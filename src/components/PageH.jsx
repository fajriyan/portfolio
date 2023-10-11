import FollowMe from "./Follow";
import Heros from "./Heros";
import Navigation from "./Navigation";
import SummaryPro from "./SummaryPro";

const PageH = () => {
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

export default PageH;
