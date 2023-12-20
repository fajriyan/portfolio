import React from "react";
import Navigation from "../components/Navigation";
import Cards from "../components/Cards";
import FollowMe from "../components/Follow";
import { Helmet } from "react-helmet";

const Project = () => {
  return (
    <>
      {window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}

      <Helmet>
        <meta charSet="utf-8" />
        <title>Project | Portfolio fajriyan</title>
        <link rel="canonical" href="https://fajriyan.pages.dev/project" />
        <meta name="keywords" content="project portfolio" />
      </Helmet>
      <Navigation />
      <Cards />
      <FollowMe />
    </>
  );
};

export default Project;
