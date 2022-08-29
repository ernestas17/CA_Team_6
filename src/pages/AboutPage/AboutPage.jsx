import React from "react";
// Components
import Header from "../../components/Header";
import APHeader from "./components/APHeader";
import Steps from "./components/Steps/Steps";
import Colors from "./components/Colors";
import CallToAction from "../../components/CallToAction/CallToAction";
import Footer from "../../components/Footer";
import FeaturesBlock from "./components/FeaturesBlock";
import TeamSection from "./components/TeamSection";

// Styles
import { StyledBackground } from "./AboutPage.style";

const AboutPage = () => {
  return (
    <>
      <Header />
      <APHeader />
      <Steps />
      <Colors />
      <StyledBackground color={"#F8F8F8"}>
        <FeaturesBlock />
      </StyledBackground>

      <TeamSection />
      <CallToAction />
      <Footer />
    </>
  );
};

export default AboutPage;
