// Components
import HomeHeader from "./components/HomeHeader/HomeHeader";
import Offer from "./components/Offer/Offer";
import Process from "./components/Process/Process";
import Qoute from "./components/Qoute/Qoute";
import CallToAction from "../../components/CallToAction";
import Experience from "./components/Experience";
import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";

// Styles
import { StyledBackground } from "./HomePage.style";

const HomePage = () => {
  return (
    <main>
      <StyledBackground color={"#fff"}>
        <HomeHeader />
      </StyledBackground>

      <StyledBackground color={"#e2e6e9"}>
        <Qoute />
      </StyledBackground>

      <StyledBackground color={"#fff"}>
        <Process />
      </StyledBackground>

      <StyledBackground color={"#F2F2F2;"}>
        <Offer />
      </StyledBackground>

      <CallToAction />

      <StyledBackground color={"#F2F2F2"}>
        <Experience />
      </StyledBackground>

      <StyledBackground color={"#FAFAFA"}>
        <Brands />
      </StyledBackground>

      <StyledBackground color={"#F2F2F2"}>
        <Testimonials />
      </StyledBackground>

      <StyledBackground color={"#E2E6E9"}>
        <Faq />
      </StyledBackground>
    </main>
  );
};

export default HomePage;
