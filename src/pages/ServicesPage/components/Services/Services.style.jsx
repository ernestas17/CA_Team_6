import styled from "styled-components";

// Styles
import StyledContainer from "../../../../shared/styles/Container.style";
import { StyledH3, StyledTitle02 } from "../../../../shared/styles/Fonts.style";

export const StyledWrapper = styled(StyledContainer)`
  padding: 128px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  @media screen and (min-width: 1320px) {
    flex-direction: row;
  }
`;

export const StyledHeadline = styled(StyledH3)`
  margin-bottom: 16px;
`;
export const StyledBodyText = styled(StyledTitle02)`
  color: #232536;
  opacity: 0.6;
  margin-bottom: 32px;
`;

export const StyledServicesLeft = styled.div`
  max-width: 624px;
  padding: 64px 48px 43px;

  background-color: #ffffff;
`;

export const StyledImageContainer = styled.div`
  max-width: 528px;
  height: 294px;
  margin-bottom: 32px;
`;

export const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const StyledServicesRight = styled.div`
  width: 100%;
  max-width: 624px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  div {
    height: 232px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    div {
      width: 296px;
    }
  }
`;
