import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import FollowMe from "../components/Follow";
import { DataExp, DataLearnings } from "../data/Important";
import { Link } from "react-router-dom";
import { Helmet } from "@dr.pogodin/react-helmet";
import Subscribe from "../components/Subscribe";

const About = () => {
  const [lastUpdated, setLastUpdated] = useState("");
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeGallery, setActiveGallery] = useState(null);

  const galleryData = {
    advanced: {
      title: "SMK Negeri 6 Malang - React JS Advanced",
      images: [
        "https://ik.imagekit.io/fajriyann/portfolio/activity/smk6-malang/batch-2.1/IMG-20251008-WA0046.webp",
        "https://ik.imagekit.io/fajriyann/portfolio/activity/smk6-malang/batch-2.1/IMG-20251008-WA0049.webp",
        // "https://ik.imagekit.io/fajriyann/portfolio/activity/smk6-malang/batch-2.1/IMG-20251008-WA0043.webp",
        "https://ik.imagekit.io/fajriyann/portfolio/activity/smk6-malang/batch-2.1/IMG-20251008-WA0047.webp",
        "https://ik.imagekit.io/fajriyann/portfolio/activity/smk6-malang/batch-2.1/IMG-20251008-WA0042.webp",
      ],
    },
    beginner: {
      title: "SMK Negeri 6 Malang - React JS Beginner",
      images: [
        "https://ik.imagekit.io/fajriyann/portfolio/activity/smk6-malang/batch-1.1/IMG-20241029-WA0027.webp?updatedAt=1775618041321",
        "https://ik.imagekit.io/fajriyann/portfolio/activity/smk6-malang/batch-1.1/IMG-20241029-WA0019.webp?updatedAt=1775618023082",
        "https://ik.imagekit.io/fajriyann/portfolio/activity/smk6-malang/batch-1.1/IMG-20241029-WA0015.webp?updatedAt=1775618023050",
        "https://ik.imagekit.io/fajriyann/portfolio/activity/smk6-malang/batch-1.1/IMG-20241029-WA0023.webp?updatedAt=1775618022987",
      ],
    },
  };

  const openGallery = (key) => {
    setActiveGallery(key);
    setGalleryOpen(true);
    setTimeout(() => setModalVisible(true), 10);
  };

  const closeGallery = () => {
    setModalVisible(false);
    setTimeout(() => {
      setGalleryOpen(false);
      setActiveGallery(null);
    }, 250);
  };

  useEffect(() => {
    fetch("https://api.github.com/repos/fajriyan/portfolio/commits?per_page=1")
      .then((res) => res.json())
      .then((data) => {
        const dateStr = data[0]?.commit?.committer?.date;
        if (dateStr) {
          const date = new Date(dateStr);
          const options = { year: "numeric", month: "long" }; // May 2025
          const formattedDate = date.toLocaleDateString("en-US", options);
          setLastUpdated(formattedDate);
        }
      })
      .catch((err) => {
        console.error("Error fetching commit:", err);
      });
  }, []);

  const years = new Date();
  return (
    <>
      {window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Me | Portfolio fajriyan</title>
        <link rel="canonical" href="https://fajriyan.pages.dev/about" />
        <meta name="keywords" content="portfolio" />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <Navigation />
      {/* -/- */}
      <div className="container mx-auto py-5 px-3 md:px-0 mt-5">
        <article className="rounded-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-100 to-slate-100 p-6 ring-1 ring-slate-300 sm:p-8">
          <div className="flex items-center sm:hidden w-[30%] mb-2 border-2 border-slate-700 rounded">
            <img
              src="https://ik.imagekit.io/fajriyann/MVIMG_20221125_161020%202.png?updatedAt=1747231977721"
              alt="fajriyan profile"
              width="100%"
              height="100%"
            />
          </div>
          <div className="flex items-start">
            <div
              className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center rounded-xl sm:border-2 sm:ring-2 ring-slate-500 ring-offset-2"
              aria-hidden="true"
            >
              <div className="flex items-center">
                <img
                  className="rounded-xl"
                  src="https://ik.imagekit.io/fajriyann/MVIMG_20221125_161020%202.png?updatedAt=1747231977721"
                  alt="fajriyan profile"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>

            <div className="sm:ml-8">
              <h1 className=" text-2xl font-semibold font-sans sm:text-xl">
                Hai, i'm fajriyan nur
              </h1>

              <p className="mt-1 text-sm text-gray-700 text-justify">
                Fullstack Developer with approximately 3 years of experience in
                web development, from monolith architecture to microservices.
                Strong frontend expertise, especially in building responsive,
                intuitive, and user-friendly user interfaces with modern UX/UI
                principles. Results-oriented and ambitious to deliver the best
                output aligned with business objectives. Proven ability to
                develop optimized web products through industry-standard coding
                practices and effective SEO strategies. Experienced in handling
                website development and maintenance projects in startups,
                agencies, and government institutions.
              </p>

              <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="fill-gray-600"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
                  </svg>
                  <p className="ml-1 text-sm font-medium text-slate-800">
                    Fullstack Web Developer
                  </p>
                </div>

                <span className="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>

                <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                  Last updated :{" "}
                  <Link to="/changelog">
                    <button className="underline hover:text-gray-700">
                      {lastUpdated || "Loading..."}
                    </button>
                  </Link>{" "}
                  by fajriyan
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* grid start */}
        <div className="my-10 grid md:grid-cols-2 gap-10 md:px-3 lg:px-0">
          <div className="">
            <h2 className="text-xl font-semibold font-sans mb-4">
              WORK EXPERIENCE
            </h2>
            <div className="border mt-2 border-slate-400 rounded-xl p-2">
              <h3 className="font-bold text-lg text-slate-800">
                Sekawan Media | PT Sekawan Media Informatika
              </h3>
              <p className="text-sm">Fullstack Web Developer</p>
              <p className="text-slate-700 text-sm">August 2023 - Present</p>
            </div>
            <button
              type="button"
              onClick={() => openGallery("advanced")}
              className="w-full text-left border mt-2 border-slate-400 rounded-xl p-2 hover:bg-purple-50 transition relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                className="absolute right-2 fill-gray-500 "
              >
                <title xmlns="">image</title>
                <path d="M15.06 9.83a2.75 2.75 0 0 1 1.737 0c.368.123.672.338.967.596c.282.248.602.579.985.975q.686.713 1.374 1.424c.448.462.628.95.626 1.602c-.006 1.659-.041 2.797-.517 3.73a4.75 4.75 0 0 1-2.076 2.075c-1.345.686-3.065.518-4.523.518h-3.266c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.295-.579-.41-1.209-.47-1.976c-.088-1.16.896-2.099 1.653-2.862c.307-.31.631-.57 1.033-.718a2.75 2.75 0 0 1 1.889 0c.402.148.726.408 1.033.718c.298.3.632.7 1.036 1.185c.035.043.09.083.141.03l3.025-3.133c.384-.396.703-.727.985-.975c.295-.258.6-.473.967-.596m.023 1.723c-.23.202-.507.488-.917.913l-3.004 3.11a1.58 1.58 0 0 1-2.351-.086c-.431-.516-.724-.867-.97-1.114c-.24-.243-.38-.328-.483-.366a1.25 1.25 0 0 0-.859 0c-.103.038-.242.123-.483.366c-.37.372-.697.787-1.032 1.19c-.161.193-.205.295-.187.54c.05.656.147 1.055.307 1.37a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h3.2c1.192 0 2.765.212 3.876-.354a3.25 3.25 0 0 0 1.42-1.42c.282-.555.346-1.303.353-3.054c.001-.274-.041-.386-.238-.589l-1.32-1.367c-.41-.425-.686-.71-.917-.913c-.515-.452-1.154-.472-1.691 0" />
                <path d="M10.367 3.25h3.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v3.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.077 2.075c-.55.281-1.154.403-1.868.461c-.697.057-1.563.057-2.655.057h-3.266c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655v-3.266c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M7.834 4.802c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v3.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h3.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566v-3.2c0-1.132 0-1.937-.052-2.566c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302c-.63-.051-1.434-.052-2.566-.052h-3.2c-1.132 0-1.937 0-2.566.052" />
                <path d="M10 7.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M7.25 9a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" />
              </svg>
              <h3 className="font-bold text-lg text-slate-800">
                SMK Negeri 6 Malang - React JS Advanced
              </h3>
              <p className="text-sm">
                Part-time Teaching Class Sekawan Media Industry
              </p>
              <p className="text-slate-700 text-sm">October 2025</p>
            </button>
            <button
              type="button"
              onClick={() => openGallery("beginner")}
              className="w-full text-left border mt-2 border-slate-400 rounded-xl p-2 hover:bg-purple-50 transition relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                className="absolute right-2 fill-gray-500 "
              >
                <title xmlns="">image</title>
                <path d="M15.06 9.83a2.75 2.75 0 0 1 1.737 0c.368.123.672.338.967.596c.282.248.602.579.985.975q.686.713 1.374 1.424c.448.462.628.95.626 1.602c-.006 1.659-.041 2.797-.517 3.73a4.75 4.75 0 0 1-2.076 2.075c-1.345.686-3.065.518-4.523.518h-3.266c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.295-.579-.41-1.209-.47-1.976c-.088-1.16.896-2.099 1.653-2.862c.307-.31.631-.57 1.033-.718a2.75 2.75 0 0 1 1.889 0c.402.148.726.408 1.033.718c.298.3.632.7 1.036 1.185c.035.043.09.083.141.03l3.025-3.133c.384-.396.703-.727.985-.975c.295-.258.6-.473.967-.596m.023 1.723c-.23.202-.507.488-.917.913l-3.004 3.11a1.58 1.58 0 0 1-2.351-.086c-.431-.516-.724-.867-.97-1.114c-.24-.243-.38-.328-.483-.366a1.25 1.25 0 0 0-.859 0c-.103.038-.242.123-.483.366c-.37.372-.697.787-1.032 1.19c-.161.193-.205.295-.187.54c.05.656.147 1.055.307 1.37a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h3.2c1.192 0 2.765.212 3.876-.354a3.25 3.25 0 0 0 1.42-1.42c.282-.555.346-1.303.353-3.054c.001-.274-.041-.386-.238-.589l-1.32-1.367c-.41-.425-.686-.71-.917-.913c-.515-.452-1.154-.472-1.691 0" />
                <path d="M10.367 3.25h3.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v3.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.077 2.075c-.55.281-1.154.403-1.868.461c-.697.057-1.563.057-2.655.057h-3.266c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655v-3.266c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M7.834 4.802c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v3.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h3.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566v-3.2c0-1.132 0-1.937-.052-2.566c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302c-.63-.051-1.434-.052-2.566-.052h-3.2c-1.132 0-1.937 0-2.566.052" />
                <path d="M10 7.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M7.25 9a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" />
              </svg>
              <h3 className="font-bold text-lg text-slate-800">
                SMK Negeri 6 Malang - React JS Beginner
              </h3>
              <p className="text-sm">
                Part-time Teaching Class Sekawan Media Industry
              </p>
              <p className="text-slate-700 text-sm">
                February 2024, October 2025
              </p>
            </button>
            <div className="border mt-2 border-slate-400 rounded-xl p-2">
              <h3 className="font-bold text-lg text-slate-800">
                Sekawan Media | PT Sekawan Media Informatika
              </h3>
              <p className="text-sm">Frontend & Web Developer</p>
              <p className="text-slate-700 text-sm">June 2022 - August 2023</p>
            </div>
          </div>

          <div className="">
            <h2 className="text-xl font-semibold font-sans">EDUCATION</h2>
            <div className="mt-4 mx-auto relative">
              <div className="border-l-2 border-dashed border-slate-700">
                <div className="transform transition ml-10 relative flex items-center px-6 py-4 rounded-xl border border-slate-400 text-slate-800 mb-5 flex-col md:flex-row md:space-y-0">
                  <div className="w-5 h-5 bg-slate-600 absolute top-0 md:top-[58px] lg:top-[45px] -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-violet-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h2 className="text-xl font-bold">
                      PGRI Kanjuruhan University Malang
                    </h2>
                    <h3 className="text-sm">
                      Informatics Engineering, Cumulative GPA 3.61/4.00
                    </h3>
                    <span className="text-sm">August 2018 - May 2022</span>
                  </div>
                </div>

                <div className="transform transition ml-10 relative flex items-center px-6 py-4 rounded-xl border border-slate-400 text-slate-800 mb-10 flex-col md:flex-row md:space-y-0">
                  <div className="w-5 h-5 bg-slate-600 absolute top-0 md:top-[58px] lg:top-[45px] -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-violet-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <h2 className="text-xl font-bold">
                      Senior High School 6 Lamongan
                    </h2>
                    <h3 className="text-sm">Math and Natural Sciences</h3>
                    <span className="text-sm">2016 - 2018</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* || My Expertise start */}
          {/* <div className="md:col-span-2">
            <h2 className="text-xl font-semibold font-sans">TOOLS & SKILL</h2>
            <div className="mt-4">
              <div className="border border-slate-400 p-3 rounded-md">
                <div className="grid grid-cols-6 lg:grid-cols-6 xl:grid-cols-12 gap-3">
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/laravel.png"
                      alt="Laravel"
                      title="Laravel"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png"
                      alt="React"
                      title="React"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vite.png"
                      alt="Vite"
                      title="Vite"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/php.png"
                      alt="php"
                      title="php"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png"
                      alt="Tailwind CSS"
                      title="Tailwind CSS"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/graphql.png"
                      alt="GraphQL"
                      title="GraphQL"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png"
                      alt="Git"
                      title="Git"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png"
                      alt="Postman"
                      title="Postman"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png"
                      alt="HTML"
                      title="HTML"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png"
                      alt="CSS"
                      title="CSS"
                    />
                  </code>

                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/firebase.png"
                      alt="Firebase"
                      title="Firebase"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/supabase.png"
                      alt="Supabase"
                      title="Supabase"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://alternative.me/media/256/statamic-icon-9ki3q3g12i981e0c-c.png"
                      alt="Supabase"
                      title="Supabase"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/strapi.png"
                      alt="Strapi"
                      title="Strapi"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/figma.png"
                      alt="Figma"
                      title="Figma"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png"
                      alt="JavaScript"
                      title="JavaScript"
                    />
                  </code>

                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png"
                      alt="TypeScript"
                      title="TypeScript"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/npm.png"
                      alt="npm"
                      title="npm"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redux.png"
                      alt="Redux"
                      title="Redux"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react_query.png"
                      alt="React Query"
                      title="React Query"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png"
                      alt="Next.js"
                      title="Next.js"
                    />
                  </code>

                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/php_(elephpant).png"
                      alt="php (elephpant)"
                      title="php (elephpant)"
                    />
                  </code>

                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png"
                      alt="PostgreSQL"
                      title="PostgreSQL"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mysql.png"
                      alt="MySQL"
                      title="MySQL"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png"
                      alt="Docker"
                      title="Docker"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/nginx.png"
                      alt="Nginx"
                      title="Nginx"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/digital_ocean.png"
                      alt="Digital Ocean"
                      title="Digital Ocean"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/linux.png"
                      alt="Linux"
                      title="Linux"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ubuntu.png"
                      alt="Ubuntu"
                      title="Ubuntu"
                    />
                  </code>
                  <code>
                    <img
                      width="50"
                      src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rabbitmq.png"
                      alt="RabbitMQ"
                      title="RabbitMQ"
                    />
                  </code>
                </div>
              </div>
            </div>
          </div> */}
          {/* || My Expertise end */}
        </div>
        {/* grid  end */}

        {galleryOpen && activeGallery ? (
          <div
            className={`fixed inset-0 z-[100] flex  items-end justify-center transition-opacity duration-500 ease-out ${modalVisible ? "opacity-100" : "opacity-0"}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-title"
            onClick={closeGallery}
          >
            <div
              className={`w-full container mx-auto overflow-hidden rounded-t-xl bg-violet-50 border border-gray-400 shadow-2xl transition-all duration-500 ease-out ${modalVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20"}`}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between  px-5 py-4">
                <div>
                  <h2
                    id="gallery-title"
                    className="text-xl font-bold text-slate-800"
                  >
                    {galleryData[activeGallery].title}
                  </h2>
                  <p className="text-sm text-slate-700">
                    Gallery preview for the selected teaching session.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeGallery}
                  className="rounded-full bg-slate-800 text-white px-3 py-2 text-sm font-medium hover:bg-slate-900"
                >
                  Close
                </button>
              </div>
              <div className="grid gap-3 pt-0 p-5 sm:grid-cols-4">
                {galleryData[activeGallery].images.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${galleryData[activeGallery].title} screenshot ${index + 1}`}
                    className="h-64 w-full rounded-xl object-cover shadow-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <div className="my-10">
          <Subscribe />
        </div>

        <h2 className="text-xl font-semibold font-sans mt-10 mb-2">
          Find me on other platforms
        </h2>
        <div className="flex gap-2 flex-wrap">
          <a
            href="https://www.youtube.com/@fajriyann"
            target="_blank"
            rel="noreferrer"
            className="border p-2 border-slate-400 rounded-md flex items-center gap-2 font-bold hover:ring-2 ring-violet-300"
          >
            <img
              width={30}
              className="object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
              alt=""
            />
            @fajriyann
          </a>
          <a
            href="https://www.npmjs.com/~fajriyan"
            target="_blank"
            rel="noreferrer"
            className="border p-2 border-slate-400 rounded-md flex items-center gap-2 font-bold hover:ring-2 ring-violet-300"
          >
            <img
              width={30}
              className="object-contain"
              src="https://pbs.twimg.com/profile_images/1285630920263966721/Uk6O1QGC_400x400.jpg"
              alt=""
            />
            NPM
          </a>
          <a
            href="https://stackoverflow.com/users/22432262/fajriyan"
            target="_blank"
            rel="noreferrer"
            className="border p-2 border-slate-400 rounded-md flex items-center gap-2 font-bold hover:ring-2 ring-violet-300"
          >
            <img
              width={30}
              className="object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/2048px-Stack_Overflow_icon.svg.png"
              alt=""
            />
            Stack Overflow
          </a>
          <a
            href="https://menulisapaini.blogspot.com/"
            target="_blank"
            rel="noreferrer"
            className="border p-2 border-slate-400 rounded-md flex items-center gap-2 font-bold hover:ring-2 ring-violet-300"
          >
            <img
              width={30}
              className="object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Blogger_icon.svg/2048px-Blogger_icon.svg.png"
              alt=""
            />
            Blogger
          </a>
          <a
            href="https://unsplash.com/@fajriyan"
            target="_blank"
            rel="noreferrer"
            className="border p-2 border-slate-400 rounded-md flex items-center gap-2 font-bold hover:ring-2 ring-violet-300"
          >
            <img
              width={30}
              className="object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Unsplash.svg/1024px-Logo_of_Unsplash.svg.png"
              alt=""
            />
            Unsplash
          </a>
          <a
            href="https://www.pexels.com/id-id/@fajriyan/"
            target="_blank"
            rel="noreferrer"
            className="border p-2 border-slate-400 rounded-md flex items-center gap-2 font-bold hover:ring-2 ring-violet-300"
          >
            <img
              width={30}
              className="object-contain"
              src="https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/68bf05a48c4054d73fa0289b_68753d3a3cf7d125d66f10ab_64ffb2b7dee9fde09d183799_5d5d168cbbbfb9ca2820198a_Pexels-Twitter-profile.jpeg"
              alt=""
            />
            Pexels
          </a>
          <a
            href="https://instagram.com/fajriyan.nur"
            target="_blank"
            rel="noreferrer"
            className="border p-2 border-slate-400 rounded-md flex items-center gap-2 font-bold hover:ring-2 ring-violet-300"
          >
            <img
              width={30}
              className="object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
              alt=""
            />
            Instagram
          </a>
        </div>

        {/* container end  */}
      </div>
      <FollowMe />

      <div className="py-4 border-t border-gray-400">
        <p className="text-center text-xs leading-relaxed text-gray-500">
          © fajriyan {years.getFullYear()}. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default About;
