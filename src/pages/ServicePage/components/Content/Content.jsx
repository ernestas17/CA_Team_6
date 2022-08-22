// Styles
import {
  StyledTextWrapper,
  StyledContent,
  StyledImage,
  StyledImageWrapper,
  StyledContentHeadline,
  StyledContentParagraph,
  StyledContentTitle,
  StyledContentQoute,
} from "./Content.style";

const Content = ({ content }) => {
  return (
    <StyledContent>
      <StyledImageWrapper>
        <StyledImage src={content.image} />
      </StyledImageWrapper>
      <StyledTextWrapper>
        <StyledContentHeadline>{content.headline}</StyledContentHeadline>
        <StyledContentParagraph margin={"68"}>
          {content.text1}
        </StyledContentParagraph>
        <StyledContentTitle>{content.title}</StyledContentTitle>
        <StyledContentParagraph margin={"32"}>
          {content.text2}
        </StyledContentParagraph>

        <StyledContentQoute>{content.text3}</StyledContentQoute>
      </StyledTextWrapper>
    </StyledContent>
  );
};

export default Content;
