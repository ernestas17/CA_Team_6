import React from "react";

// Styles
import {
  StyledServicesLeft,
  StyledImageContainer,
  StyledImage,
  StyledBodyText,
} from "../../../ServicesPage/components/Services/Services.style";

import {
  StyledLink,
  StyledLinkText,
} from "../../../HomePage/components/Offer/Offer.style";

import { StyledHeadline } from "./BlogFourLeft.styled";

// Components
import Date from "../Date";

// Assets
import image from "../../../../assets/images/BlogFour-img.png";
import { ArrowIcon } from "../../../../assets/svgs/svgs";

export const BlogFourLeft = ({ headline, text, linkText }) => {
  return (
    <StyledServicesLeft>
      <StyledImageContainer>
        <StyledImage image={image} />
      </StyledImageContainer>
      <Date month={"October"} day={"06"} year={"2021"} />
      <StyledHeadline>{headline}</StyledHeadline>
      <StyledBodyText>{text}</StyledBodyText>

      <StyledLink to={"blogpage"}>
        <StyledLinkText>{linkText}</StyledLinkText>
        <ArrowIcon />
      </StyledLink>
    </StyledServicesLeft>
  );
};
