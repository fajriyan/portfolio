import { DataChangeLog } from "./MyData";

const Changelog = () => {
  return (
    <div className="min-h-screen px-3 md:px-0">
      <div className="container mx-auto py-5 md:py-10">
        <a href="/">
          <button className="group relative inline-flex items-center overflow-hidden rounded-lg px-8 py-3 text-white focus:outline-none bg-gradient-to-l hover:bg-gradient-to-t from-gray-900 to-gray-600 shadow-lg focus:ring-2 ring-gray-600 ring-offset-2">
            <span className="absolute -left-8 translate-x-full transition-transform group-hover:translate-x-11">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:ml-2">
              Back to Home
            </span>
          </button>
        </a>

        <h1 className="mt-9 mb-3 text-2xl">Changelog site : </h1>
        <div className="overflow-x-auto rounded-lg border border-slate-500 border-dashed">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Author
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Date Update
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Version
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Status
                </th>
                <th className=" whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Description
                </th>
              </tr>
            </thead>

            <tbody className="bg-gray-50 divide-y divide-gray-200">
              {DataChangeLog.map((ch) => (
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {ch.author}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {ch.date}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {ch.version}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <span
                      className={
                        "inline-flex items-center justify-center rounded-full px-3 py-0.5 " +
                        ch.color
                      }
                    >
                      <p className="whitespace-nowrap text-sm">{ch.status}</p>
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {ch.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap justify-end pt-10">
          <a
            href="https://www.linkedin.com/in/fajriyan/"
            target={"_blank"}
            rel="noreferrer"
          >
            <button className="flex text-slate-900 items-center justify-center gap-3 w-full rounded-xl border border-slate-900 border-dashed px-5 py-3 sm:w-auto focus:ring-2 ring-gray-600 shadow-sm hover:shadow-lg transition-all duration-700 focus:shadow-md focus:border-opacity-0  text-sm font-normal">
              Have any bugs?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bug"
                viewBox="0 0 16 16"
              >
                <path d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6a3.989 3.989 0 0 0-1.334-2.982A3.983 3.983 0 0 0 8 2a3.983 3.983 0 0 0-2.667 1.018A3.989 3.989 0 0 0 4 6h8z" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Changelog;
