import styled from "styled-components";

// Styles
import { StyledTitle01 } from "../../../../shared/styles/Fonts.style";

export const StyledTitle = styled(StyledTitle01)``;

export const StyledImageContainer = styled.div``;

export const StyledImg = styled.div`
  height: 192px;
  background-image: url(${({ image }) => image});
  min-width: 192px;
  margin: 32px auto;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (min-width: 586px) {
    margin: 32px 24px;
  }
`;

export const StyledWrapper = styled.div`
  text-align: center;
  width: 100%;
  @media screen and (min-width: 586px) {
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: center;
  }
`;
export const StyledTextWrapper = styled.div`
  @media screen and (min-width: 586px) {
    width: 50%;
  }
  @media screen and (min-width: 1320px) {
    width: 480px;
  }
`;
