import React from "react";

// Styles
import {
  StyledFeatureTitle,
  StyledFeatureBody,
  StyledFeatureWrapper,
  StyledFeatureTextWrapper,
  StyledIconWrapper,
} from "./Feature.styled";

const Feature = ({ title, body, icon }) => {
  return (
    <>
      <StyledFeatureWrapper>
        <StyledFeatureTextWrapper>
          <StyledIconWrapper>{icon}</StyledIconWrapper>
          <StyledFeatureTitle>{title}</StyledFeatureTitle>
          <StyledFeatureBody>{body}</StyledFeatureBody>
        </StyledFeatureTextWrapper>
      </StyledFeatureWrapper>
    </>
  );
};

export default Feature;
