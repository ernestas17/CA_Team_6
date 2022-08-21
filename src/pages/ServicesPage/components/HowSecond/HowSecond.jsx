// Data
import { howSecondData } from "../../../../data/servicesPageData";

// Components
import Button from "../../../../components/Button";

// Styles
import {
  StyledBodyText,
  StyledHeadline,
  StyledImage,
  StyledLeftImageContainer,
  StyledRightCardContainer,
  StyledWrapper,
} from "./HowSecond.style";

const HowSecond = () => {
  // Data
  const { headline, text, buttonText, leftImage, rightImage } = howSecondData;

  return (
    <StyledWrapper>
      <StyledLeftImageContainer>
        <StyledImage image={leftImage} />
        <StyledImage image={rightImage} />
      </StyledLeftImageContainer>

      <StyledRightCardContainer>
        <StyledHeadline>{headline}</StyledHeadline>
        <StyledBodyText> {text}</StyledBodyText>
        <Button color="a" text={buttonText} />
      </StyledRightCardContainer>
    </StyledWrapper>
  );
};

export default HowSecond;
