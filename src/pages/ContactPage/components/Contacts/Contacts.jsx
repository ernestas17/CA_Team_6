// Data
import { contactsData } from "../../../../data/contactPageData";

// Styles
import {
  StyledWrapper,
  StyledTitle,
  StyledSubTitle,
  StyledBody,
} from "./Contacts.style";

const Contacts = () => {
  return (
    <StyledWrapper>
      {contactsData.map((data, index) => (
        <StyledBody key={index}>
          <StyledTitle>{data.title}</StyledTitle>
          <StyledSubTitle>{data.subtitle}</StyledSubTitle>
        </StyledBody>
      ))}
    </StyledWrapper>
  );
};

export default Contacts;
