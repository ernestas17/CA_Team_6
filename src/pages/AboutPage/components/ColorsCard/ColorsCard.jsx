import React from "react";

// Styles
import {
  StyledColorsH4,
  StyledColorsTitle,
  StyledWrapper,
  StyledColorsImage,
} from "./ColorsCard.styled";

const ColorsCard = ({ heading, title, image, color }) => {
  return (
    <StyledColorsImage image={image}>
      <StyledWrapper color={color}>
        <StyledColorsH4>{heading}</StyledColorsH4>
        <StyledColorsTitle>{title}</StyledColorsTitle>
      </StyledWrapper>
    </StyledColorsImage>
  );
};

export default ColorsCard;
