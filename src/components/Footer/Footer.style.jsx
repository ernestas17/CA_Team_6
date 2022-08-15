import styled from "styled-components";
import StyledContainer from "../../shared/styles/Container.style";
import {
  StyledH3,
  StyledBody1,
  StyledTitle02,
  StyledBody2,
} from "../../shared/styles/Fonts.style";

// Mobile first
export const StyledFooter = styled.footer`
  width: calc(100vw - (100vw - 100%));
  background-color: rgba(30, 27, 27, 0.98);

  color: var(--white);
  a {
    color: inherit;
  }
`;

export const StyledFooterTop = styled.div`
  text-align: center;
  padding: 20px 0;

  @media screen and (min-width: 768px) {
    display: flex;
    text-align: left;
    gap: 40px;
  }
  @media screen and (min-width: 1024px) {
    height: 549px;
    padding-top: 128px;
    gap: 193px;
  }
`;

export const StyledFooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 64px;
    align-items: start;
  }
  @media screen and (min-width: 1024px) {
    width: 463px;
  }
`;

export const StyledHeadline = styled(StyledH3)`
  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`;

export const StyledSocials = styled.div`
  width: 167px;
  height: 24px;
  margin-bottom: 20px;
  ul {
    display: flex;
    justify-content: space-between;

    li {
      a {
        display: flex;
      }
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    ul {
      align-items: flex-start;
    }
  }
`;

export const StyledFooterRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 1024px) {
    width: 471px;
  }
`;
export const StyledTitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const StyledTitle = styled(StyledBody1)``;
export const StyledSubTitle = styled(StyledTitle02)``;
export const StyledFooterBottomWrapper = styled.div`
  background-color: #1e1b1b;
`;

export const StyledFooterBottom = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: 1024px) {
    padding: 64px 20px;
    height: 157px;
  }
`;

export const StyledCopyright = styled(StyledBody2)`
  color: #939191;
  opacity: 1;
`;
