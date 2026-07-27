import { Link } from "react-router";

const Error = () => {
   return (
      <>
         <title>Page Not Found</title>
         <meta charSet="utf-8" />
         <link rel="canonical" href="*" />
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
