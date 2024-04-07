import React from "react";
//import CustomBoxes from "./CustomBoxes";
import CustomerReviews from "./CustomerReviews";
import EchoFriendly from "./EchoFriendly";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
//import PackagingGrid from "./PackagingGrid";
//import PackingSolutions from "./PackingSolutions";
import Process from "./Process";
import StartJourney from "./StartJourney";
import Introduction from "./Introduction";
import Projects from "./Projects/Projects"
import Services from "./Services/Services"
const HomeContent = () => {
  return (
    <>
          <Introduction />
          <EchoFriendly />
          <Services />
          <Projects/>
          <Process />
          <CustomerReviews />
          <FrequentlyAskedQuestions />
          <StartJourney />
    </>
  );
};

export default HomeContent;
