import { Link } from "react-router-dom";

const Heros = () => {
  return (
    <>
      <section className="text-white container-path relative" id="hero">
        <div className="bg-gradient-to-t from-[#f2eefe] to-black/0 w-full h-[20%] z-[2] bottom-0 absolute"></div>
        <div className="mx-auto flex items-center min-h-[600px] h-screen lg:items-center">
          <div className="mx-auto px-3 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold text-slate-700">
              Hi, I'm fajriyan
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-slate-800">
              Fullstack Web Developer, strong in frontend development and
              experienced with{" "}
              <span className="font-semibold">Content Management Systems</span>{" "}
              like Strapi, Payload CMS, Filament, Winter CMS, Statamic, etc.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div class="relative inline-flex items-center justify-center gap-4 group">
                <div class="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-300"></div>
                <a
                  role="button"
                  class="group relative animate-shake-delay flex items-center justify-center gap-3 w-full rounded-xl bg-gradient-to-l hover:bg-gradient-to-t from-gray-900 to-gray-600 font-semibold px-8 py-3 text-md active:text-opacity-75 sm:w-auto"
                  title="payment"
                  href="#"
                >
                  Download CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    fill="currentColor"
                    className="bi bi-cloud-arrow-down-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
                  </svg>
                </a>
              </div>

              <Link
                to="/project"
                className="block w-max rounded-xl border-solid border-2 border-gray-700 text-gray-800 px-12 py-2 text-md  active:text-opacity-75 sm:w-auto hover:bg-gradient-to-t font-semibold from-gray-800 to-gray-600 hover:text-white focus:ring-2 ring-gray-600 ring-offset-2 shadow-lg"
              >
                My Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Heros;
