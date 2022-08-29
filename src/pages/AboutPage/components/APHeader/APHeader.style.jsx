import styled from "styled-components";

// Styles
import StyledContainer from "../../../../shared/styles/Container.style";
import { StyledH1, StyledBody1 } from "../../../../shared/styles/Fonts.style";

export const StyledWrapper = styled(StyledContainer)`
  margin-top: 80px;
  margin-bottom: 128px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    position: relative;
    height: 550px;
    flex-direction: row;
  }
`;

export const StyledImageContainer = styled.div`
  @media screen and (max-width: 1023px) {
    width: 100%;
    height: 440px;
  }
  @media screen and (min-width: 1024px) {
    position: absolute;
    left: 20px;
    top: 0;
    width: 818px;
    height: 550px;
  }
`;
export const StyledHeaderImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const StyledHeaderRight = styled.div`
  background-color: #1e1b1b;
  @media screen and (max-width: 1023px) {
    max-width: 100%;
    height: 460px;
    text-align: center;
    padding: 20px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 733px;
    height: 550px;
    position: absolute;
    top: 0;
    right: 20px;
    padding: 96px;
  }
`;

export const StyledHeadline = styled(StyledH1)`
  color: #f2f2f2;
  margin-bottom: 16px;
  @media screen and (max-width: 767px) {
    font-size: 42px;
  }
`;
export const StyledBodyText = styled(StyledBody1)`
  color: #f2f2f2;
  margin-bottom: 48px;
  @media screen and (min-width: 1024px) {
    max-width: 541px;
  }
`;
