import styled from "styled-components";

// Styles
import {
  StyledH1,
  StyledH4,
  StyledBody1,
} from "../../../../shared/styles/Fonts.style";

import { StyledDateBody } from "../Date/Date.styled";

export const StyledDateHeader = styled(StyledDateBody)`
  color: var(--white);
  padding-top: 16px;
  opacity: 0.8;

  @media screen and (min-width: 1024px) {
    align-self: flex-start;
    margin-left: 32px;
  }
`;

export const StyledHeaderH1 = styled(StyledH1)`
  z-index: 100;
  position: absolute;
  text-align: center;
  color: var(--white);
  width: 100%;
  margin-top: 112px;
  @media screen and (min-width: 1024px) {
    width: 50%;
    text-align: center;
    margin-top: 224px;
  }
`;

export const StyledHeaderH4 = styled(StyledH4)`
  width: 80%;
  margin: 0 auto;
  color: var(--white);
  @media screen and (min-width: 1024px) {
    margin-left: 64px;
  }
`;

export const StyledHeaderBody = styled(StyledBody1)`
  width: 85%;
  margin: 16px auto 48px auto;
  color: var(--white);
  opacity: 1;
  @media screen and (min-width: 1024px) {
    margin: 16px 0 48px 64px;
  }
`;

export const StyledHeaderWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    height: 624px;
  }
`;

export const StyledImage = styled.div`
  background-image: url(${({ image }) => image});
  height: 312px;
  width: 100%;
  background-repeat: no-repeat;
  object-fit: contain;
  background-size: cover;
  text-align: center;
  @media screen and (min-width: 1024px) {
    width: 50%;
    height: 624px;
    background-position: left;
  }
`;

export const StyledImageOverlay = styled.div`
  height: 100%;
  width: 100%;
  opacity: 80%;
  background-color: var(--black);
  color: var(--white);
`;

export const StyledTextWrapper = styled.div`
  height: 100%;
  max-width: 1053px;
  text-align: center;
  background-color: var(--black);
  opacity: 99%;
  padding: 128px 0 139px 0;
  @media screen and (min-width: 1024px) {
    text-align: left;
    width: 50%;
  }
`;

export const StyledHeadline = styled.p`
  padding-bottom: 16px;
  line-height: 28px;
  letter-spacing: 8px;
  color: var(--primary);
  font-weight: var(--font-weight4);
  font-size: var(--font-size8);
  @media screen and (min-width: 1024px) {
    margin-left: 64px;
  }
`;

export const StyledElementsWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    margin-left: 64px;
  }
`;
