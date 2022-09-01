import React from "react";

// Styles
import {
  StyledTitle,
  StyledBody,
  StyledWrapper,
  StyledImageWrapper,
  // StyledImage,
} from "./BlogFullCard.styled";

import { StyledImage } from "../../../ServicesPage/components/Services/Services.style";
// Components
import { Date } from "../Date/Date";

export const BlogFullCard = ({ image, month, day, year, title, body }) => {
  return (
    <StyledWrapper>
      <StyledImageWrapper>
        <StyledImage image={image} />
      </StyledImageWrapper>

      <Date month={month} day={day} year={year} />
      <StyledTitle>{title}</StyledTitle>
      <StyledBody>{body}</StyledBody>
    </StyledWrapper>
  );
};
