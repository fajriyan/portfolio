import React from "react";
import Navigation from "../components/Navigation";
import Heros from "../components/Heros";
import SummaryPro from "../components/SummaryPro";
import FollowMe from "../components/Follow";

const Homepage = () => {
  return (
    <>
      {window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      <Navigation />
      <Heros />
      <SummaryPro />
      <FollowMe />
    </>
  );
};

export default Homepage;
