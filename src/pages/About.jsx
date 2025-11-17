import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import FollowMe from "../components/Follow";
import { DataExp, DataLearnings } from "../data/Important";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const About = () => {
  const [lastUpdated, setLastUpdated] = useState("");

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
                  <Link
                    to="/changelog"
                  >
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
            <div className="border mt-2 border-slate-400 rounded-md p-2">
              <h3 className="font-bold text-lg text-slate-800">
                SiteSpirit | CV Adikara Solusindo - Malang
              </h3>
              <p className="text-sm">Fullstack Web Developer</p>
              <p className="text-slate-700 text-sm">August 2023 - Present</p>
            </div>
            <div className="border mt-2 border-slate-400 rounded-md p-2">
              <h3 className="font-bold text-lg text-slate-800">
                SMK Negeri 6 Malang - React JS Advanced
              </h3>
              <p className="text-sm">
                Part-time Teaching Class Sekawan Media Industry
              </p>
              <p className="text-slate-700 text-sm">October 2025</p>
            </div>
            <div className="border mt-2 border-slate-400 rounded-md p-2">
              <h3 className="font-bold text-lg text-slate-800">
                SMK Negeri 6 Malang - React JS Beginner
              </h3>
              <p className="text-sm">
                Part-time Teaching Class Sekawan Media Industry
              </p>
              <p className="text-slate-700 text-sm">February 2024, October 2025</p>
            </div>
            <div className="border mt-2 border-slate-400 rounded-md p-2">
              <h3 className="font-bold text-lg text-slate-800">
                Sekawan Media | PT Sekawan Media Informatika - Malang
              </h3>
              <p className="text-sm">Frontend & Web Developer</p>
              <p className="text-slate-700 text-sm">June 2022 - August 2023</p>
            </div>
          </div>

          <div className="">
            <h2 className="text-xl font-semibold font-sans">EDUCATION</h2>
            <div className="mt-4 mx-auto relative">
              <div className="border-l-2 border-dashed border-slate-700">
                <div className="transform transition ml-10 relative flex items-center px-6 py-4 border border-slate-400 text-slate-800 rounded mb-5 flex-col md:flex-row md:space-y-0">
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
                <div className="transform transition ml-10 relative flex items-center px-6 py-4  border border-slate-400 text-slate-800 rounded mb-10 flex-col md:flex-row md:space-y-0">
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
          <div className="md:col-span-2">
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
          </div>
          {/* || My Expertise end */}
        </div>
        {/* grid  end */}

        <h2 className="text-xl font-semibold font-sans mt-10 mb-2">
          Find me on other platforms
        </h2>
        <div className="flex gap-2 flex-wrap">
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
              src="https://seeklogo.com/images/P/pexels-logo-EFB9232709-seeklogo.com.png"
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
