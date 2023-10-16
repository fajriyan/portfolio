import React from "react";
import Navigation from "../components/Navigation";
import FollowMe from "../components/Follow";
import { DataExp, DataLearnings } from "../data/Important";

const About = () => {
  const years = new Date();
  return (
    <>
      {window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      <Navigation />
      {/* -/- */}
      <div className="container mx-auto py-5 px-3 md:px-0">
        <article className="rounded-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-100 to-slate-100 p-6 ring-1 ring-slate-300 sm:p-8">
          <div className="flex items-center sm:hidden w-[30%] mb-2 border-2 border-slate-700 rounded-xl">
            <img
              className="rounded-xl"
              src="https://avatars.githubusercontent.com/u/56616688?v=4"
              alt="fajriyan"
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
                  alt="fajriyan"
                />
              </div>
            </div>

            <div className="sm:ml-8">
              <h1 className=" text-2xl font-semibold font-sans sm:text-xl">
                Hai, saya Fajriyan Nur
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
                  <a href="/changelog">
                    <button className="underline hover:text-gray-700">
                      Oktober 2023
                    </button>
                  </a>
                  , by fajriyan
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* grid start */}
        <div className="my-10 grid md:grid-cols-2 gap-5">
          {/* | My Learning Journey start */}
          <div className="">
            <h1 className="text-xl font-semibold font-sans mb-2">
              My Learning Journey
            </h1>
            {DataLearnings.map((Lr) => (
              <article
                key={Lr.id}
                className="rounded-lg border border-slate-400 p-3 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-200 via-violet-100 to-slate-100 shadow-lg mb-4"
              >
                <div>
                  <p className="text-sm text-gray-500">{Lr.status}</p>

                  <p className="text-lg font-medium text-gray-900">{Lr.name}</p>
                </div>

                <div className="mt-1 flex gap-1 text-green-600">
                  <p className="flex gap-2 text-sm">
                    <span className="font-medium">{Lr.major}</span>-
                    <span className="text-gray-500">{Lr.since} </span>
                  </p>
                </div>
              </article>
            ))}
          </div>
          {/* | My Learning Journey end */}

          {/* || My Expertise start */}
          <div className="">
            {" "}
            <h1 className="text-xl font-semibold font-sans mb-2">
              My Expertise
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 ">
              {DataExp.map((Ex) => (
                <article
                  key={Ex.id}
                  className="rounded-lg border border-slate-400 p-2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-200 via-violet-100 to-slate-100 shadow-lg flex flex-wrap items-end"
                >
                  <img
                    src={Ex.img}
                    alt={Ex.name}
                    className="object-contain rounded-full p-1"
                  />

                  <div className="w-fit">
                    <p className="text-sm font-medium text-gray-900">
                      {Ex.name}
                    </p>
                    <p className="font-medium text-xs text-green-600">
                      {Ex.level}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          {/* || My Expertise end */}
        </div>
        {/* grid  end */}

        {/* accordion start */}
        <div className="">
          <h1 className="text-xl font-semibold font-sans mb-4">
            My Career Journey
          </h1>
          <details
            className="group border border-slate-400 rounded-lg bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-200 via-violet-100 to-slate-100 p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex items-center justify-between cursor-pointer">
              <h2 className="font-medium text-gray-900">Coming Soon ⌛</h2>

              <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
        </div>

        {/* accordion end */}

        <h1 className="text-xl font-semibold font-sans mt-10 mb-2">
          Find me on other platforms
        </h1>

        <div className="p-4 border border-slate-800 rounded-md">
          Waiting for Data ⏳
        </div>
        {/* <div className="grid grid-cols-3 md:grid-cols-5 gap-5 ">
          {DataOtherPlatform.map((Op) => (
            <article
              key={Op.id}
              className="rounded-lg border border-slate-400 p-2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-200 via-violet-100 to-slate-100 flex flex-wrap items-end"
            >
              <img
                src={Op.img}
                alt={Op.name}
                className="object-contain rounded-full p-1"
              />

              <div className="w-fit">
                <p className="text-sm font-medium text-gray-900">{Op.name}</p>
                <p className="font-medium text-xs text-green-600">{Op.level}</p>
              </div>
            </article>
          ))}
        </div> */}

        {/* container end  */}
      </div>
      <FollowMe />

      <div class="py-4 border-t border-gray-400">
        <p class="text-center text-xs leading-relaxed text-gray-500">
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
