import styled from "styled-components";

// Styles
import StyledContainer from "../../shared/styles/Container.style";
import { StyledH1 } from "../../shared/styles/Fonts.style";

export const StyledWrapper = styled(StyledContainer)`
  padding-top: 80px;
  padding-bottom: 128px;
`;

export const StyledHeadline = styled(StyledH1)`
  margin-bottom: 48px;
  @media screen and (min-width: 768px) {
    max-width: 507px;
  }
`;

export const StyledSection = styled.section`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 141px;
    div {
      width: 100%;
    }
  }
  @media screen and (min-width: 1024px) {
    &:first-child {
      max-width: 624px;
    }

    &:nth-child(1) {
      max-width: 479px;
      margin: 0;
    }
  }
`;
