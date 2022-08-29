import styled from "styled-components";

// Styles
import StyledContainer from "../../../../shared/styles/Container.style";
import { StyledH3, StyledTitle02 } from "../../../../shared/styles/Fonts.style";

export const StyledWrapper = styled(StyledContainer)`
  margin-top: 80px;
  margin-bottom: 128px;
  display: flex;
  height: 1546px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 1024px) {
    height: 773px;
    flex-direction: row;
  }
`;

export const StyledStepsLeft = styled.div`
  text-align: center;
  max-width: 620px;
  width: 100%;
  margin-bottom: 32px;
  @media screen and (min-width: 1024px) {
    text-align: left;
    padding-right: 10px;
  }
`;
export const StyledStepsH3 = styled(StyledH3)`
  margin-bottom: 16px;
`;

export const StyledStepsTitle = styled(StyledTitle02)`
  margin-bottom: 32px;
  opacity: 0.6;
  @media screen and (min-width: 1024px) {
    max-width: 614px;
  }
`;

export const StyledStepsImage = styled.div`
  width: 100%;
  height: 773px;
  background-position: center;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (min-width: 1024px) {
    background-position: right;
  }
`;
