import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  padding: 20px 0;
  justify-content: space-around;

  .logo {
    width: 80px;
    height: 20px;
    align-self: center;
  }
  ul,
  .navigationContainer {
    display: flex;
    align-items: center;
  }
  .contactContainer {
    display: none;
  }

  li {
    list-style-type: none;
    font-size: 12px;
    font-weight: 600;
    line-height: 28px;
    margin-left: 10px;
  }
  a {
    color: black;
    text-decoration: none;
  }

  @media only screen and (min-width: 728px) {
    padding: 0;
    height: 90px;

    li {
      //   margin-left: 56px;
      margin-left: 32px;
      font-size: 16px;
    }

    .logo {
      width: 121px;
      height: 27px;
    }
  }

  @media only screen and (min-width: 1024px) {
    ul {
      margin-right: 32px;
    }
    .contactContainer {
      display: flex;
    }
    nav {
      border-right: 2px solid rgba(147, 145, 145, 0.3);
    }

    .contactNumber {
      font-size: 18px;
      font-weight: 600;
      line-height: 31px;
    }

    .contactLogo {
      width: 40px;
      height: 40px;
      margin: 0 32px 0 32px;
    }
    .contactText {
      color: #1e1b1b;
      opacity: 70%;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }
  }
`;
