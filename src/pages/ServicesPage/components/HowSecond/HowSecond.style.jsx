import styled from "styled-components";

// Styles
import StyledContainer from "../../../../shared/styles/Container.style";
import { StyledBody1, StyledH3 } from "../../../../shared/styles/Fonts.style";

export const StyledWrapper = styled(StyledContainer)`
  text-align: center;
  padding-bottom: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
  @media screen and (min-width: 1320px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledHeadline = styled(StyledH3)`
  margin-bottom: 32px;
`;

export const StyledBodyText = styled(StyledBody1)`
  color: #232536;
  margin-bottom: 32px;
  max-width: 512px;
`;

export const StyledRightCardContainer = styled.div`
  max-width: 547px;
`;

export const StyledLeftImageContainer = styled.div`
  max-width: 624px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledImage = styled.div`
  width: 303px;
  height: 477px;

  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
