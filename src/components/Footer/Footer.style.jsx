import styled from "styled-components";

// Mobile first
export const StyledFooter = styled.footer`
  width: calc(100vw - (100vw - 100%));

  color: #fff;
  a {
    color: inherit;
  }
`;

export const StyledFooterTopWrapper = styled.div`
  background-color: rgba(30, 27, 27, 0.98);
`;

export const StyledFooterTop = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  padding: 20px 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    text-align: left;
    gap: 8px;
  }
  @media screen and (min-width: 1024px) {
    height: 549px;
    padding: 128px 0;
    gap: 193px;
  }
`;

export const StyledFooterLeft = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  h3 {
    font-size: 30px;
    letter-spacing: -0.03em;
    line-height: 140%;
  }
  @media screen and (min-width: 768px) {
    text-align: left;
    gap: 64px;
    align-items: start;
    h3 {
      font-size: 48px;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 463px;
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
        i {
          font-size: 1.5em;
        }
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

export const StyledFooterRight = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    p:nth-child(1) {
      font-size: 18px;
      font-weight: 600;
      opacity: 0.6;
      line-height: 175%;
    }
    p:nth-child(2) {
      font-size: 24px;
      font-weight: 600;
      letter-spacing: -0.03em;
      line-height: 36px;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 471px;
  }
`;

export const StyledFooterBottomWrapper = styled.div`
  background-color: #1e1b1b;
`;

export const StyledFooterBottom = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;

  gap: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: 1024px) {
    padding: 64px 0;
    line-height: 28px;
  }
`;

export const StyledFooterNav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    font-size: 16px;
    font-weight: 600;
  }
  @media screen and (min-width: 768px) {
    ul {
      width: 459px;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const StyledCopyright = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #939191;
`;
