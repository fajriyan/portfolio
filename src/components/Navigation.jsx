import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { mainMenu } from "../data/Important";

const Navigation = () => {
  const currentRoute = useLocation();
  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <header
        aria-label="Site Header"
        className="sticky top-0 z-[100] backdrop-blur-lg bg-violet-50/40 text-slate-800 border-b border-slate-300"
      >
        <div className="container mx-auto px-3 md:px-0">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a href="/" className="block text-slate-900 text-lg font-bold">
                <span className="sr-only">Home</span>
                <button>Fajriyan</button>
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Site Nav">
                <ul className="flex items-center gap-6 text-md font-semibold text-slate-800 ">
                  {mainMenu.map((i) => (
                    <li key={i.id}>
                      <NavLink
                        to={i.url}
                        className={
                          currentRoute.pathname === i.url
                            ? "md:border-b-2 md:py-5 border-slate-600"
                            : "text-slate-800 md:hover:border-b-2 md:py-5 border-slate-600"
                        }
                      >
                        {i.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a href="https://www.linkedin.com/in/fajriyan/">
                  <button className="rounded-xl bg-gradient-to-l hover:bg-gradient-to-t from-gray-900 to-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow">
                    Contact
                  </button>
                </a>
              </div>

              <div className="block md:hidden">
                <button
                  onClick={OpenMenu}
                  className="bg-gray-100 p-2 border border-slate-600 rounded-lg text-gray-600 transition hover:text-gray-600/75"
                >
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      stroke="currentColor"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  )}
                </button>
                {open ? (
                  <ul className="absolute flex gap-4 top-16 w-full right-0 p-4 bg-violet-100 backdrop-blur-xl bg-opacity-90 border-y border-slate-500">
                    {mainMenu.map((i) => (
                      <li key={i.id}>
                        <NavLink
                          to={i.url}
                          className={
                            currentRoute.pathname === i.url
                              ? "border-b-2 py-4 border-slate-700"
                              : "text-slate-800 hover:border-b-2 py-4 border-slate-700"
                          }
                        >
                          {i.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navigation;
