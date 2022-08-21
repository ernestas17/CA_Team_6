// Data
import { servicesPageHeaderData } from "../../../../data/servicesPageData";

// Components
import Button from "../../../../components/Button";

// Styles
import {
  StyledBodyText,
  StyledHeaderImage,
  StyledHeaderRight,
  StyledHeadline,
  StyledImageContainer,
  StyledWrapper,
} from "./ServicesHeader.style";

const ServicesHeader = () => {
  // Data
  const { image, headline, text, buttonText } = servicesPageHeaderData;

  return (
    <StyledWrapper>
      <StyledImageContainer>
        <StyledHeaderImage image={image} />
      </StyledImageContainer>
      <StyledHeaderRight>
        <StyledHeadline>{headline}</StyledHeadline>
        <StyledBodyText>{text}</StyledBodyText>
        <Button color={"a"} text={buttonText} />
      </StyledHeaderRight>
    </StyledWrapper>
  );
};

export default ServicesHeader;
