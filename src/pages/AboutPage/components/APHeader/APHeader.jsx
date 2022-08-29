import React from "react";
// Components
import Button from "../../../../components/Button";

// Styles
import {
  StyledBodyText,
  StyledHeaderImage,
  StyledHeaderRight,
  StyledHeadline,
  StyledImageContainer,
  StyledWrapper,
} from "./APHeader.style";

// Assets
import image from "../../../../assets/images/APHeader-img.png";

const APHeader = () => {
  return (
    <StyledWrapper>
      <StyledImageContainer>
        <StyledHeaderImage image={image} />
      </StyledImageContainer>
      <StyledHeaderRight>
        <StyledHeadline>About us</StyledHeadline>
        <StyledBodyText>
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw
          Through True Rich Attended does
        </StyledBodyText>
        <Button color={"a"} text={"Book a service"} />
      </StyledHeaderRight>
    </StyledWrapper>
  );
};

export default APHeader;
