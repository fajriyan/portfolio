import { useState } from "react";
import DataProject from "../data/Important";

const Cards = () => {
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div className="container mx-auto px-3 md:px-0">
      <div className="pt-7 flex flex-wrap">
        <h1 className="font-bold text-3xl text-slate-800 w-full text-center">
          All Project
        </h1>
        <p className="w-full text-center mt-2">
          collection of my personal and professional projects
        </p>
      </div>
      <div className="flex py-10 justify-end">
        <div className="">
          <select
            id="countries"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-2 ring-offset-2 ring-slate-500 block w-full p-2.5 "
            value={selected}
            onChange={handleChange}
          >
            <option value="" defaultValue>
              All Project
            </option>
            <option key="Studio" value="Studio">
              Sekawan Studio
            </option>
            <option key="Personal" value="Personal">
              Personal
            </option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:p-0 gap-4">
        {DataProject.filter((QF) => {
          if (!selected) {
            return QF;
          } else if (QF.ct.toLowerCase().includes(selected.toLowerCase())) {
            return QF;
          }
          return false;
        }).map((d) => (
          <article
            key={d.title}
            className="flex bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-200 via-violet-100 to-slate-100 border-dashed border-[1px] border-slate-600 transition rounded-lg shadow-md hover:ring-2 hover:border-opacity-0 ring-slate-500 group"
          >
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
              <time className="flex items-center justify-between py-2 gap-4 text-xs font-bold uppercase text-gray-900">
                <span>{d.yr}</span>
                <span className="w-px flex-1 bg-gray-900/10"></span>
                <span>{d.mt}</span>
              </time>
            </div>

            <div className="hidden sm:block sm:basis-60 lg:py-3">
              <img
                width="100"
                height="100"
                alt={d.title}
                src={d.img}
                className="aspect-square h-full w-full object-cover rounded-lg border-dashed border-[1.5px] border-violet-400"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6 text-left">
                <button>
                  <h2 className="font-bold uppercase text-gray-900 text-left">
                    {d.title}
                  </h2>
                </button>

                <p className="mt-2 text-sm leading-relaxed text-gray-700 text-justify">
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
    </div>
  );
};
export default Cards;
