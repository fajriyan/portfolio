import React from "react";
import Navigation from "../components/Navigation";
import FollowMe from "../components/Follow";
import { DataExp, DataLearnings } from "../data/Important";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const About = () => {
  const years = new Date();
  return (
    <>
      {window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Me | Portfolio fajriyan</title>
        <link rel="canonical" href="https://fajriyan.pages.dev/about" />
        <meta name="keywords" content="portfolio" />
      </Helmet>
      <Navigation />
      {/* -/- */}
      <div className="container mx-auto py-5 px-3 md:px-0">
        <article className="rounded-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-100 to-slate-100 p-6 ring-1 ring-slate-300 sm:p-8">
          <div className="flex items-center sm:hidden w-[30%] mb-2 border-2 border-slate-700 rounded">
            <img
              src="https://avatars.githubusercontent.com/u/56616688?v=4"
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
                  src="https://avatars.githubusercontent.com/u/56616688?v=4"
                  alt="fajriyan profile"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>

            <div className="sm:ml-8">
              <h1 className=" text-2xl font-semibold font-sans sm:text-xl">
                Hai, saya fajriyan nur
              </h1>

              <p className="mt-1 text-sm text-gray-700 text-justify">
                Saya tertarik pada dunia Web Developer sejak 2014 pada waktu itu
                saya masih berada di bangku Sekolah Menengah Pertama,
                ketertarikan itu terjadi karena pada 2014 saya melihat website
                sekolah saya yang digunakan sebagai sistem informasi dan galeri
                sekolah, sejak saat itu saya mulai melihat tutorial di berbagai
                platform seperti Youtube, web pertama yang saya buat adalah web
                untuk melakukan post blog di platform milik google yaitu
                Blogger. Saya mulai melihat tutorial tentang template blog
                seperti edit HTML dan CSS, begitu menyenangkan kemudian saya
                lanjutkan sampai sekarang.
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
                    Web Developer at Sekawan Studio
                  </p>
                </div>

                <span className="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>

                <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                  Last updated :{" "}
                  <Link to="/changelog">
                    <button className="underline hover:text-gray-700">
                      Desember 2023
                    </button>
                  </Link>
                  , by fajriyan
                </p>
              </div>
            </div>
          </div>
        </article>
        {/* grid start */}
        <div className="my-10 grid md:grid-cols-2 gap-5 md:px-3 lg:px-0">
          {/* | My Learning Journey start */}
          <div className="">
            <h2 className="text-xl font-semibold font-sans">Study Journey</h2>
            <div className="mt-4 mx-auto relative">
              <div className="border-l-2 border-dashed border-slate-700">
                <div className="transform transition ml-10 relative flex items-center px-6 py-4 border border-slate-400 text-slate-800 rounded mb-5 flex-col md:flex-row md:space-y-0">
                  <div className="w-5 h-5 bg-slate-600 absolute top-0 md:top-[58px] lg:top-[45px] -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-violet-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <span className="text-sm">2018 - 2022</span>
                    <h2 className="text-xl font-bold">
                      PGRI Kanjuruhan University Malang
                    </h2>
                    <h3 className="text-md">
                      Bachelor of Informatics Engineering
                    </h3>
                  </div>
                </div>
                <div className="transform transition ml-10 relative flex items-center px-6 py-4  border border-slate-400 text-slate-800 rounded mb-10 flex-col md:flex-row md:space-y-0">
                  <div className="w-5 h-5 bg-slate-600 absolute top-0 md:top-[58px] lg:top-[45px] -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                  <div className="w-10 h-1 bg-violet-300 absolute -left-10 z-0"></div>

                  <div className="flex-auto">
                    <span className="text-sm">2016 - 2018</span>
                    <h2 className="text-xl font-bold">
                      Senior High School 6 Lamongan
                    </h2>
                    <h3 className="text-md">Math and Natural Sciences</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* | My Learning Journey end */}

          {/* || My Expertise start */}
          <div className="">
            <h2 className="text-xl font-semibold font-sans">Expertise</h2>
            <div className="mt-4">
              <div className="border border-slate-400 p-3 rounded-md">
                <h3 className="font-semibold">Front End + Backend</h3>
                <div className="pt-2 flex gap-2 overflow-auto">
                  <img
                    width={50}
                    className="object-contain"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png"
                    alt=""
                  />
                  <img
                    width={50}
                    className="object-contain"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
                    alt=""
                  />
                  <img
                    width={50}
                    className="object-contain"
                    src="https://plugins.jetbrains.com/files/15251/377610/icon/pluginIcon.png"
                    alt=""
                  />
                  <img
                    width={50}
                    className="object-contain"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                    alt=""
                  />

                  <img
                    width={50}
                    className="object-contain"
                    src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
                    alt=""
                  />

                  <img
                    width={50}
                    className="object-contain"
                    src="https://www.ignazkastl.de/static/media/expressjs_logo_icon_169185.e3d4f9e5c8b469e45838.png"
                    alt=""
                  />
                  <img
                    width={50}
                    className="object-contain"
                    src="https://cdn.freebiesupply.com/logos/large/2x/codeigniter-logo-png-transparent.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-4 border border-slate-400 p-3 rounded-md">
                <h3 className="font-semibold">Programming Languages </h3>
                <div className="pt-2 flex gap-2">
                  <img
                    className="object-contain"
                    width={50}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"
                    alt=""
                  />
                  <img
                    className="object-contain"
                    width={50}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png"
                    alt=""
                  />
                  <img
                    className="object-contain"
                    width={50}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
                    alt=""
                  />
                  <img
                    className="object-contain"
                    width={60}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
                    alt=""
                  />
                  <img
                    className="object-contain"
                    width={60}
                    src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* || My Expertise end */}
        </div>
        {/* grid  end */}
        {/* accordion start */}
        <div className="">
          <h2 className="text-xl font-semibold font-sans mb-4">
            Career Journey
          </h2>
          <div className="border border-slate-400 rounded-md p-2">
            <h3 className="font-bold text-lg text-slate-800">Sekawan Studio</h3>
            <p className="text-slate-700">
              Saya Bekerja di Sekawan Studio Sebagai Web Developer Sejak Juli
              2022. Disini biasanya saya membuat Website Company Profile,
              Website Kampus sampai E-Commerce.
            </p>
            <div className="flex gap-2 mt-2">
              Using :
              <img
                className="object-contain"
                width={30}
                height={30}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"
                alt=""
              />
              <img
                className="object-contain"
                width={30}
                height={30}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png"
                alt=""
              />
              <img
                className="object-contain"
                width={30}
                height={30}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
                alt=""
              />
              <img
                className="object-contain"
                width={30}
                height={30}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
                alt=""
              />
              <img
                className="object-contain"
                width={30}
                height={30}
                src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* accordion end */}
        <h2 className="text-xl font-semibold font-sans mt-10 mb-2">
          Find me on other platforms
        </h2>
        <div className="flex gap-2 flex-wrap">
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
        </div>

        {/* container end  */}
      </div>
      <FollowMe />

      <div className="py-4 border-t border-gray-400">
        <p className="text-center text-xs leading-relaxed text-gray-500">
          © Fajriyan {years.getFullYear()}. All rights reserved.
          <br />
          Created with{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <button className="text-slate-700 hover:text-gray-900 underline">
              React{" "}
            </button>
            ✨
          </a>{" "}
          and{" "}
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <button className="text-slate-700 hover:text-gray-900 underline">
              Tailwind CSS
            </button>
            🍃.
          </a>
        </p>
      </div>
    </>
  );
};

export default About;
