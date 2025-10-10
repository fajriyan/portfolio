import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "SEO-friendly websites",
    desc: "built to achieve top search rankings.",
    left: "https://ik.imagekit.io/xf/portfolio/Helix.png?updatedAt=1755589344811",
    right:
      "https://ik.imagekit.io/xf/portfolio/Cylinder%201.png?updatedAt=1755589312789",
  },
  {
    title: "Lightning-fast performance",
    desc: "for smooth, seamless browsing.",
    left: "https://ik.imagekit.io/xf/portfolio/Icosahedron.png?updatedAt=1755589312090",
    right:
      "https://ik.imagekit.io/xf/portfolio/Pyramid%202.png?updatedAt=1755589312097",
  },
  {
    title: "Custom CMS solutions",
    desc: "tailored to fit every workflow.",
    left: "https://ik.imagekit.io/xf/portfolio/Cylinder%201.png?updatedAt=1755589312789",
    right:
      "https://ik.imagekit.io/xf/portfolio/Cube%203.png?updatedAt=1755589312135",
  },
  {
    title: "Pixel-perfect development",
    desc: "that mirrors the design 1:1.",
    left: "https://ik.imagekit.io/xf/portfolio/Icosahedron.png?updatedAt=1755589312090",
    right:
      "https://ik.imagekit.io/xf/portfolio/Helix.png?updatedAt=1755589344811",
  },
  {
    title: "High security standards",
    desc: "OWASP standarts for web applications.",
    left: "https://ik.imagekit.io/xf/portfolio/Pyramid%202.png?updatedAt=1755589312097",
    right:
      "https://ik.imagekit.io/xf/portfolio/Icosahedron.png?updatedAt=1755589312090",
  },
  {
    title: "Complex ideas simplified",
    desc: "into intuitive, engaging experiences.",
    left: "https://ik.imagekit.io/xf/portfolio/Thorus%20Knot.png?updatedAt=1755589312754",
    right:
      "https://ik.imagekit.io/xf/portfolio/Thorus%201.png?updatedAt=1755589312712",
  },
];

const Gsap = () => {
  const containerRef = useRef(null);
  const leftLogoRef = useRef(null);
  const rightLogoRef = useRef(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const texts = gsap.utils.toArray(".word");

      // Set awal teks
      texts.forEach((text, i) => {
        if (i === 0) gsap.set(text, { opacity: 1, y: 0 });
        else gsap.set(text, { opacity: 0, y: 200 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=" + items.length * 450,
          scrub: 0.1,
          pin: true,
          snap: {
            snapTo: 1 / (items.length - 1), // snap ke setiap item
            duration: { min: 0, max: 0.3 },
            delay: 0,
            ease: "power1.inOut",
          },
          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.min(
              items.length - 1,
              Math.floor(progress * items.length)
            );

            if (index !== currentIndexRef.current) {
              currentIndexRef.current = index;

              // animasi logo lama keluar
              gsap.to([leftLogoRef.current, rightLogoRef.current], {
                y: -100,
                scale: 0.3,
                opacity: 0,
                rotation: -15,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                  // ganti logo baru
                  leftLogoRef.current.src = items[index].left;
                  rightLogoRef.current.src = items[index].right;

                  // posisi awal logo baru random
                  const leftStartX = -30 + Math.random() * -20;
                  const rightStartX = 30 + Math.random() * 20;

                  gsap.set(leftLogoRef.current, {
                    y: 50 + Math.random() * 50,
                    scale: 0.3,
                    opacity: 0,
                    x: leftStartX,
                    rotation: 15,
                  });
                  gsap.set(rightLogoRef.current, {
                    y: 50 + Math.random() * 50,
                    scale: 0.3,
                    opacity: 0,
                    x: rightStartX,
                    rotation: -15,
                  });

                  // animasi logo baru masuk
                  gsap.to([leftLogoRef.current, rightLogoRef.current], {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    x: 0,
                    rotation: 0,
                    duration: 0.5,
                    ease: "power2.out",
                  });
                },
              });
            }
          },
        },
      });

      texts.forEach((word, i) => {
        if (i > 0) {
          tl.to(word, { y: 0, opacity: 1, duration: 0.3 });
          tl.to(texts[i - 1], { y: -80, opacity: 0, duration: 0.3 }, "<");
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="overflow-hidden relative">
      <div
        ref={containerRef}
        className="h-[90dvh] flex items-center justify-center flex-col overflow-hidden relative"
      >
        <div className="bg-gradient-to-b from-[#f2eefe] to-black/0 w-full h-[20%] z-[2] top-0 absolute"></div>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
          }}
        />

        <h2 className="text-2xl font-semibold mb-6">How I Add Value</h2>
        <div className="relative  w-full">
          <div className="overflow-hidden flex items-center h-[150px] justify-center flex-col">
            {items.map((item, i) => (
              <div key={i} className="word absolute flex flex-col items-center">
                <h1 className="text-3xl md:text-4xl xl:text-7xl font-bold text-center text-slate-800">
                  {item.title}
                </h1>
                <p className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Logo kiri */}
          <img
            ref={leftLogoRef}
            src={items[0].left}
            alt="Left Logo"
            className="absolute left-0 top-[20dvh] xl:top-[100px] h-[140px] xl:h-[250px] object-contain"
          />

          {/* Logo kanan */}
          <img
            ref={rightLogoRef}
            src={items[0].right}
            alt="Right Logo"
            className="absolute -right-10 rotate-[30deg] -top-[30dvh] xl:-top-[200px] h-[140px] xl:h-[200px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Gsap;
