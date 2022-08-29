import React from "react";

// Styles
import {
  StyledPersonImage,
  StyledPersonWrapper,
  StyledTextWrapper,
  StyledCardTitle,
  StyledCardBody,
} from "./PersonCard.styled";

export const PersonCard = ({ image, title, body }) => {
  return (
    <StyledPersonWrapper>
      <StyledPersonImage image={image}>
        <StyledTextWrapper>
          <StyledCardTitle>{title}</StyledCardTitle>
          <StyledCardBody>{body}</StyledCardBody>
        </StyledTextWrapper>
      </StyledPersonImage>
    </StyledPersonWrapper>
  );
};
