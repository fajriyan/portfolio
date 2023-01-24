import { ContactBTN } from "./MyData";

const FollowMe = () => {
  return (
    <div className="py-12">
      <h1 className="text-center">Contact Me</h1>
      <div className="flex flex-wrap justify-center py-2 gap-2">
        {ContactBTN.map((Fol) => (
          <a key={Fol.link} href={Fol.link} target="_blank" rel="noreferrer">
            <button className="inline-block rounded-lg border border-slate-600 p-3 text-sm font-medium text-slate-600 hover:bg-slate-800 hover:text-violet-100 focus:outline-none focus:ring-1 ring-slate-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                fill="currentColor"
                viewBox="0 0 17 17"
              >
                <path d={Fol.svg} />
              </svg>
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};
export default FollowMe;
