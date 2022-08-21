// Data
import { experienceData } from "../../../../data/homePageData";

// Styles
import {
  StyledWrapper,
  StyledHeadline,
  StyledTitle,
  StyledBodyWrapper,
} from "./Experience.style";

const Experience = () => {
  return (
    <StyledWrapper>
      {experienceData.map((data, index) => (
        <StyledBodyWrapper key={index}>
          <StyledHeadline>{data.headline}</StyledHeadline>
          <StyledTitle>{data.title}</StyledTitle>
        </StyledBodyWrapper>
      ))}
    </StyledWrapper>
  );
};

export default Experience;
