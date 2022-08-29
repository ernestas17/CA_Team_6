// Data
import { getInTouchData } from "../../../../data/contactPageData";

// Components
import ContactForm from "../ContactForm/ContactForm";

// Styles
import { StyledContentWrapper, StyledWrapper } from "./GetInTouch.style";

const GetInTouch = () => {
  // Data
  const { placeholders, buttonText } = getInTouchData;
  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <ContactForm placeholders={placeholders} buttonText={buttonText} />
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default GetInTouch;
