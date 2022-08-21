// Data
import { howFirstData } from "../../../../data/servicesPageData";

// Styles
import {
  StyledCardBody,
  StyledCardBodyContainer,
  StyledCardText,
  StyledHeadline,
  StyledLeftCardContainer,
  StyledWrapper,
  StyledRightImageContainer,
  StyledImage,
} from "./HowFirst.style";

const HowFirst = () => {
  // Data
  const { headline, checkmarks, leftImage, rightImage } = howFirstData;

  return (
    <StyledWrapper>
      <StyledLeftCardContainer>
        <StyledHeadline>{headline}</StyledHeadline>

        <StyledCardBodyContainer>
          {checkmarks.map((data, index) => (
            <StyledCardBody key={index}>
              {data.icon}
              <StyledCardText>{data.text}</StyledCardText>
            </StyledCardBody>
          ))}
        </StyledCardBodyContainer>
      </StyledLeftCardContainer>

      <StyledRightImageContainer>
        <StyledImage image={leftImage} />
        <StyledImage image={rightImage} />
      </StyledRightImageContainer>
    </StyledWrapper>
  );
};

export default HowFirst;
