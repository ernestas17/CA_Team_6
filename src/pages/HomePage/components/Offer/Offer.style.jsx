import styled from "styled-components";

import { Link } from "react-router-dom";

import StyledContainer from "../../../../shared/styles/Container.style";

import {
  StyledTitle02,
  StyledH2,
  StyledBodyMed1,
} from "../../../../shared/styles/Fonts.style";

export const StyledWrapper = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 128px 20px;
`;

export const StyledTitle = styled(StyledTitle02)`
  margin-bottom: 8px;
`;

export const StyledHeadline = styled(StyledH2)`
  max-width: 858px;
  margin-bottom: 64px;
`;

export const StyledOfferWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
  div {
    width: 100%;
    height: 232px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    div {
      width: calc(100% / 2 - 4px);
    }
  }
  @media screen and (min-width: 1024px) {
    div {
      width: calc(100% / 4 - 6px);
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;

  align-self: flex-end;
`;

export const StyledLinkText = styled(StyledBodyMed1)`
  color: #1e1b1b;
`;
