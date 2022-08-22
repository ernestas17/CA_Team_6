import styled from "styled-components";

// Styles
import { StyledH1 } from "../../shared/styles/Fonts.style";
import StyledContainer from "../../shared/styles/Container.style";

export const StyledWrapper = styled(StyledContainer)`
  padding-top: 80px;
  padding-bottom: 128px;
`;

export const ContentWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 30px;
    aside {
      flex-shrink: 0;
    }
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 96px;
    aside {
      flex-shrink: 0;
    }
  }
`;

export const ServiceHeadline = styled(StyledH1)`
  margin-bottom: 96px;
`;
