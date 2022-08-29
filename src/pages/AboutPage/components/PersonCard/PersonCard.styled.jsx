import styled from "styled-components";

// Styles
import {
  StyledTitle02,
  StyledBody2,
} from "../../../../shared/styles/Fonts.style";

export const StyledCardTitle = styled(StyledTitle02)`
  font-size: 24px;
  margin: 24px 0 4px 0;
`;

export const StyledCardBody = styled(StyledBody2)``;

export const StyledPersonImage = styled.div`
  max-width: 405px;
  height: 432px;
  margin: 0px auto 32px auto;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  position: relative;
`;

export const StyledPersonWrapper = styled.div`
  height: 100%;

  @media screen and (min-width: 826px) {
    width: calc(50% - 32px);
  }
  @media screen and (min-width: 1024px) {
    width: calc(33.3% - 32px);
  }
`;

export const StyledTextWrapper = styled.div`
  width: 100%;
  height: 116px;
  position: absolute;
  background-color: var(--black);
  bottom: 0;

  color: var(--white);
  text-align: center;
`;
