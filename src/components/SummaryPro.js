import { Link } from "react-router-dom";
import { SummaryProject } from "./MyData";

const SummaryPro = () => {
  return (
    <div className="container mx-auto">
      <div className="py-7 flex flex-wrap">
        <h1 className="font-bold text-3xl text-slate-800 w-full text-center">
          Project Summary
        </h1>
        <p className="w-full text-center mt-2">My latest project collection</p>
      </div>

      <div className="grid grid-cols-1 py-10 px-3 lg:grid-cols-2 md:p-0 gap-4">
        {SummaryProject.map((d) => (
          <article
            key={d.title}
            className="flex bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-200 via-violet-100 to-slate-100  border-dashed border-[1px] border-slate-600 transition rounded-lg shadow-md hover:ring-2 hover:border-opacity-0 ring-slate-500 group"
          >
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
              <time className="flex items-center justify-between py-2 gap-4 text-xs font-bold uppercase text-gray-900">
                <span>{d.yr}</span>
                <span className="w-px flex-1 bg-gray-900/10"></span>
                <span>{d.mt}</span>
              </time>
            </div>

            <div className="hidden sm:block sm:basis-56 lg:py-3">
              <img
                alt={d.title}
                src={d.img}
                className="aspect-square h-full w-full object-cover rounded-lg border-dashed border-[1px] border-violet-400 "
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6 text-left">
                <button>
                  <h3 className="font-bold uppercase text-gray-900">
                    {d.title}
                  </h3>
                </button>

                <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                  {d.desc}
                </p>
                <div className="mt-2">
                  <span className="inline-flex items-center justify-center rounded-lg bg-emerald-100 px-2.5 py-0.5 text-emerald-700 border-[1px] border-dashed border-slate-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-code-slash"
                      viewBox="0 0 22 16"
                    >
                      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg>
                    <p className="whitespace-nowrap text-sm">{d.ct}</p>
                  </span>
                </div>
              </div>

              <div className="flex items-end justify-end">
                <a href={d.link} target="_blank" rel="noreferrer">
                  <button className=" relative items-center overflow-hidden flex gap-2 rounded-tl-lg rounded-br-lg bg-slate-300 px-5 py-3 text-center font-bold uppercase text-gray-900 transition hover:bg-violet-300 ">
                    <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </span>

                    <span className="text-sm font-medium transition-all group-hover:mr-5">
                      See More
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      {/* End Grid */}
      <div className="flex justify-center my-10">
        <Link
          to="/project"
          className="group relative inline-flex items-center overflow-hidden rounded-lg px-8 py-3 text-white focus:outline-none bg-gradient-to-l hover:bg-gradient-to-t from-gray-900 to-gray-600 shadow-lg focus:ring-2 ring-gray-600 ring-offset-2"
        >
          <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>

          <span className="text-sm font-medium transition-all group-hover:mr-4">
            See More
          </span>
        </Link>
      </div>
    </div>
  );
};
export default SummaryPro;
