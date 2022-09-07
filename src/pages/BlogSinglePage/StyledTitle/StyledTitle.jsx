import React from "react";

// Styles
import { StyledBlogTitle } from "./StyledTitle.styled";

export const StyledTitle = ({ headline }) => {
  return <StyledBlogTitle>{headline}</StyledBlogTitle>;
};
