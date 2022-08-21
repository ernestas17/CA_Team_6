import styled from "styled-components";

import StyledContainer from "../../../../shared/styles/Container.style";
import { StyledH2, StyledTitle02 } from "../../../../shared/styles/Fonts.style";

export const StyledWrapper = styled(StyledContainer)`
  padding: 48px 20px;
  display: flex;

  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  gap: 20px;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
  @media screen and (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const StyledBodyWrapper = styled.div`
  width: calc(100% / 2 - 10px);
  @media screen and (min-width: 768px) {
    white-space: nowrap;
    width: calc(100% / 4);
  }
  @media screen and (min-width: 1024px) {
    width: fit-content;
  }
`;

export const StyledHeadline = styled(StyledH2)`
  color: #661ce7;
  margin-bottom: 2px;
`;
export const StyledTitle = styled(StyledTitle02)`
  opacity: 0.7;
`;
