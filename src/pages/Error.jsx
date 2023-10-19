import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page Not Found</title>
        <link rel="canonical" href="*" />
      </Helmet>
      <div className="h-[90vh] flex flex-col justify-center p-3">
        <h1 className="font-semibold text-lg">Error Page Not Found</h1>
        <Link to="/" className="px-5 py-2 border border-slate-700">
          Back To Homepage
        </Link>
      </div>
    </>
  );
};

export default Error;
