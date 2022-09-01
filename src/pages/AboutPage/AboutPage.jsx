import React from "react";

// Components
import APHeader from "./components/APHeader";
import Steps from "./components/Steps/Steps";
import Colors from "./components/Colors";
import CallToAction from "../../components/CallToAction/CallToAction";
import FeaturesBlock from "./components/FeaturesBlock";
import TeamSection from "./components/TeamSection";

// Styles
import { StyledBackground } from "./AboutPage.style";

const AboutPage = () => {
  return (
    <>
      <APHeader />
      <Steps />
      <Colors />
      <StyledBackground color={"#F8F8F8"}>
        <FeaturesBlock />
      </StyledBackground>

      <TeamSection />
      <CallToAction />
    </>
  );
};

export default AboutPage;
