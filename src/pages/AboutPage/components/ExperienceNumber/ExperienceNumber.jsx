import React from "react";

// Styles
import {
  StyledHeadline,
  StyledTitle,
  StyledBodyWrapper,
} from "./ExperienceNumber.styled";

const ExperienceNumber = ({ headline, title }) => {
  return (
    <StyledBodyWrapper>
      <StyledHeadline>{headline}</StyledHeadline>
      <StyledTitle>{title}</StyledTitle>
    </StyledBodyWrapper>
  );
};

export default ExperienceNumber;
