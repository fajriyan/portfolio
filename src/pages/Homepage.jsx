import Navigation from "../components/Navigation";
import Heros from "../components/Heros";
import SummaryPro from "../components/SummaryPro";
import FollowMe from "../components/Follow";
import Gsap from "../components/Gsap";
import { Helmet } from "@dr.pogodin/react-helmet";
import Subscribe from "../components/Subscribe";

const Homepage = () => {
  return (
    <>
      {window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Overview | Portfolio fajriyan</title>
        <link rel="canonical" href="https://fajriyan.pages.dev/" />
        <meta
          name="keywords"
          content="portfolio, fajriyan, developer, frontend, fullstack"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Navigation />
      <Heros />
      <Gsap />
      <SummaryPro />
      <div className="my-40">
      <Subscribe/>
      </div>

      <FollowMe />
    </>
  );
};

export default Homepage;
