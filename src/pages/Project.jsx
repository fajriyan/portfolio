import React from "react";
import Navigation from "../components/Navigation";
import Cards from "../components/Cards";
import FollowMe from "../components/Follow";

const Project = () => {
  return (
    <>
      {window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      <Navigation />
      <Cards />
      <FollowMe />
    </>
  );
};

export default Project;
