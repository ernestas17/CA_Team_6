import styled from "styled-components";

// Styles
import StyledContainer from "../../../../shared/styles/Container.style";
import { StyledH3, StyledTitle02 } from "../../../../shared/styles/Fonts.style";

export const StyledWrapper = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 128px 20px;
  @media screen and (min-width: 1320px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledLeftCardContainer = styled.div`
  max-width: 515px;
  margin-bottom: 32px;
`;

export const StyledCardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const StyledCardBody = styled.div`
  display: flex;
  gap: 24px;

  svg {
    flex-shrink: 0;
  }
`;

export const StyledHeadline = styled(StyledH3)`
  text-align: center;
  margin-bottom: 48px;

  @media screen and (min-width: 1024px) {
    text-align: left;
    max-width: 489px;
  }
`;
export const StyledCardText = styled(StyledTitle02)``;

export const StyledRightImageContainer = styled.div`
  max-width: 624px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
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
