import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Changelog = () => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/fajriyan/portfolio/commits"
        );
        const data = await response.json();
        setCommits(data);
      } catch (error) {
        console.error("Error fetching commits:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCommits();
  }, []);

  return (
    <div className="min-h-screen px-3 md:px-0">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Changelog | Portfolio fajriyan</title>
        <link rel="canonical" href="https://fajriyan.pages.dev/changelog" />
      </Helmet>

      <Navigation />

      <div className="container mx-auto py-5 md:py-10">
        <div class="pt-7 flex flex-wrap mb-10">
          <h1 class="font-bold text-3xl text-slate-800 w-full text-center">
            Changelog Page
          </h1>
          <p class="w-full text-center mt-2">
            based on the commit message from GitHub
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-slate-500 border-dashed">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-900">
                  Author
                </th>
                <th className="px-4 py-2 text-left font-medium text-gray-900">
                  Date
                </th>
                <th className="px-4 py-2 text-left font-medium text-gray-900">
                  Commit
                </th>
                <th className="px-4 py-2 text-left font-medium text-gray-900">
                  Message
                </th>
              </tr>
            </thead>

            <tbody className="bg-gray-50 divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">
                    Loading commits...
                  </td>
                </tr>
              ) : (
                commits.map((commit, i) => (
                  <tr key={i}>
                    <td className="px-4 py-2 font-medium text-gray-900">
                      {commit.commit.author.name}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {new Date(commit.commit.author.date).toLocaleString()}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      <a
                        href={commit.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {commit.sha.substring(0, 7)}
                      </a>
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {commit.commit.message}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Changelog;
