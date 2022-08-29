import styled from "styled-components";

import StyledContainer from "../../../../shared/styles/Container.style";

import { Link } from "react-router-dom";

import {
  StyledH2,
  StyledH3,
  StyledBodyMed1,
} from "../../../../shared/styles/Fonts.style";

export const StyledWrapper = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 71px;

  padding: 128px 20px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: baseline;
  }
`;

export const StyledQouteLeft = styled.div``;
export const StyledLeftTitle = styled(StyledH2)`
  max-width: 583px;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-text-stroke: 1px #000000;
  margin-bottom: 48px;
`;
export const StyledFeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 385px;
`;

export const StyledLink = styled(Link)`
  color: #1e1b1b;
  display: flex;
  align-items: center;
  gap: 21px;

  padding-left: 63px;
`;
export const StyledLinkText = styled(StyledBodyMed1)``;

export const StyledQouteRight = styled.div`
  max-width: 625px;
`;

export const StyledRightTitle = styled(StyledH3)``;
