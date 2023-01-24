import Cards from "./Cards";
import FollowMe from "./Follow";
import Navigation from "./Navigation";

const PageP = () => {
  return (
    <>
      {window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      <Navigation />
      <Cards />
      <FollowMe />
    </>
  );
};
export default PageP;
