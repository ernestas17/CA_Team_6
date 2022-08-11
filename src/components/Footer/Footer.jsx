import React from "react";
import logo from "../../assets/images/FooterLogo.png";
import {
  StyledFooter,
  StyledFooterTop,
  StyledFooterBottom,
  StyledSocials,
  StyledFooterLeft,
  StyledFooterRight,
  StyledFooterNav,
  StyledCopyright,
  StyledFooterTopWrapper,
  StyledFooterBottomWrapper,
} from "./Footer.style";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterTopWrapper>
        <StyledFooterTop>
          <StyledFooterLeft>
            <h3>Get in touch with us for your service</h3>
            <StyledSocials>
              <ul>
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </StyledSocials>
          </StyledFooterLeft>
          <StyledFooterRight>
            <div>
              <p>Help line Noumber</p>
              <p>1800 265 24 52</p>
            </div>
            <div>
              <p>Address</p>
              <p>NH 234 Public Square San Francisco 65368</p>
            </div>
            <div>
              <p>We are open</p>
              <p>Monday to Friday 9:00 AM to 10:00 AM</p>
            </div>
          </StyledFooterRight>
        </StyledFooterTop>
      </StyledFooterTopWrapper>
      <StyledFooterBottomWrapper>
        <StyledFooterBottom>
          <div>
            <img src={logo} alt={logo} />
          </div>
          <StyledFooterNav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
            </ul>
          </StyledFooterNav>
          <StyledCopyright>&#64; Copyright Finsweet 2021</StyledCopyright>
        </StyledFooterBottom>
      </StyledFooterBottomWrapper>
    </StyledFooter>
  );
};

export default Footer;
