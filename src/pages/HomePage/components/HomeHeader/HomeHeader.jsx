// Data
import { homePageHeaderData } from "../../../../data/homePageData";

// Components
import Button from "../../../../components/Button";
// Styles
import {
  StyledHeaderImage,
  StyledHeaderLeft,
  StyledHeaderRight,
  StyledHeaderTitle,
  StyledOpenCard,
  StyledTextWrapper,
  StyledCaptionText,
  StyledBodyText,
  StyledServiceCard,
  StyledServiceCircle,
  StyledCircleNumbers,
  StyledCircleLetters,
  StyledText,
  StyledRatingCard,
  StyledRatingTextWrapper,
  StyledRatingCaptionText,
  StyledStarsWrapper,
  StyledWrapper,
} from "./HomeHeader.style";

const HomeHeader = () => {
  // Data
  const {
    headline,
    buttonText,
    captionText,
    bodyText,
    serviceHours,
    rating,
    clockIcon,
    starIcon,
    image,
  } = homePageHeaderData;

  return (
    <StyledWrapper>
      <StyledHeaderLeft>
        <StyledHeaderTitle>{headline}</StyledHeaderTitle>

        <Button color="a" text={buttonText} />

        <StyledOpenCard>
          {clockIcon}
          <StyledTextWrapper>
            <StyledCaptionText>{captionText}</StyledCaptionText>
            <StyledBodyText>{bodyText}</StyledBodyText>
          </StyledTextWrapper>
        </StyledOpenCard>
      </StyledHeaderLeft>

      <StyledHeaderRight>
        <StyledHeaderImage image={image} />

        <StyledServiceCard>
          <StyledServiceCircle>
            <StyledCircleNumbers>{serviceHours.numbers}</StyledCircleNumbers>
            <StyledCircleLetters>{serviceHours.hour}</StyledCircleLetters>
          </StyledServiceCircle>
          <StyledText>{serviceHours.text}</StyledText>
        </StyledServiceCard>

        <StyledRatingCard>
          <StyledRatingTextWrapper>
            <StyledText>{rating.numbers}</StyledText>
            <StyledRatingCaptionText>{rating.text}</StyledRatingCaptionText>
          </StyledRatingTextWrapper>

          <StyledStarsWrapper>
            {starIcon}
            {starIcon}
            {starIcon}
            {starIcon}
            {starIcon}
          </StyledStarsWrapper>
        </StyledRatingCard>
      </StyledHeaderRight>
    </StyledWrapper>
  );
};

export default HomeHeader;
