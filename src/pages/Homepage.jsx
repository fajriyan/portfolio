import Navigation from "../components/Navigation";
import Heros from "../components/Heros";
import SummaryPro from "../components/SummaryPro";
import FollowMe from "../components/Follow";
import Gsap from "../components/Gsap";
import Subscribe from "../components/Subscribe";
import { useEffect } from "react";
import PackageShowcase from "../components/PackageShowcase";

const Homepage = () => {
   return (
      <>
         <title>Overview | Portfolio fajriyan</title>
         <meta charSet="utf-8" />
         <link rel="canonical" href="https://fajriyan.pages.dev/" />
         <meta
            name="keywords"
            content="portfolio, fajriyan, developer, frontend, fullstack"
         />
         <meta name="robots" content="index, follow" />
         <Navigation />
         <Heros />
         <Gsap />
         <PackageShowcase />
         <SummaryPro />
         <div className="my-40">
            <Subscribe />
         </div>
         <FollowMe />
      </>
   );
};

export default Homepage;
