import React from "react";

// Styles
import {
  StyledHeaderWrapper,
  StyledHeaderH1,
  StyledHeaderH4,
  StyledHeaderBody,
  StyledImageOverlay,
  StyledImage,
  StyledTextWrapper,
  StyledHeadline,
  StyledDate,
  StyledElementsWrapper,
  StyledDateHeader,
} from "./BlogHeader.styled";

// Components
import Button from "../../../../components/Button";

// Assets
import image from "../../../../assets/images/BlogHeader-img.png";

const BlogHeader = () => {
  return (
    <StyledHeaderWrapper>
      <StyledImage image={image}>
        <StyledHeaderH1>Our Blog</StyledHeaderH1>
        <StyledImageOverlay />
      </StyledImage>
      <StyledTextWrapper>
        <StyledHeadline>TRENDING</StyledHeadline>
        <StyledHeaderH4>
          Diagnose Car Problems If You Don’t Know Much About Cars
        </StyledHeaderH4>
        <StyledHeaderBody>
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter the cause. This includes, We provide a
          full range of front end mechanical.
        </StyledHeaderBody>

        <StyledElementsWrapper>
          <Button color={"true"} text={"Read more"} />

          <StyledDateHeader>Posted on October 6th 2021</StyledDateHeader>
        </StyledElementsWrapper>
      </StyledTextWrapper>
    </StyledHeaderWrapper>
  );
};

export default BlogHeader;
