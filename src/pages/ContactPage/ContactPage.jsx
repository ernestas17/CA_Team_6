// Data
import { contactPageData } from "../../data/contactPageData";

// Components
import GetInTouch from "./components/GetInTouch";
import Contacts from "./components/Contacts";
import Map from "./components/Map";

// Styles
import {
  StyledHeadline,
  StyledSection,
  StyledWrapper,
} from "./ContactPage.style";

const ContactPage = () => {
  // Data
  const { headline } = contactPageData;

  return (
    <main>
      <StyledWrapper>
        <StyledHeadline>{headline}</StyledHeadline>

        <StyledSection>
          <GetInTouch />
          <Contacts />
        </StyledSection>
      </StyledWrapper>

      <Map />
    </main>
  );
};

export default ContactPage;
