// Components
import HowFirst from "./components/HowFirst/HowFirst";
import HowSecond from "./components/HowSecond/HowSecond";
import Services from "./components/Services/Services";
import ServicesHeader from "./components/ServicesHeader/ServicesHeader";
import CallToAction from "../../components/CallToAction";

// Styles
import StyledBackground from "./ServicesPage.style";

const ServicesPage = () => {
  return (
    <main>
      <StyledBackground color={"#fff"}>
        <ServicesHeader />
      </StyledBackground>

      <StyledBackground color={"#F5F5F5"}>
        <Services />
      </StyledBackground>

      <StyledBackground>
        <HowFirst />
      </StyledBackground>

      <StyledBackground>
        <HowSecond />
      </StyledBackground>

      <CallToAction />
    </main>
  );
};

export default ServicesPage;
