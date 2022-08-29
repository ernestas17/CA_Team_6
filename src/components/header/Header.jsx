import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Logo from "../../assets/images/Logo.png";
import AssistanceIcon from "../../assets/images/AssistanceIcon.png";
import { HeaderWrapper } from "./Header.style";
import StyledContainer from "../../shared/styles/Container.style";

const Header = () => {
  return (
    <StyledContainer>
      <HeaderWrapper>
        <img src={Logo} alt="" className="logo" />
        <div className="navigationContainer">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="contactContainer">
            <img src={AssistanceIcon} alt="" className="contactLogo" />
            <div>
              <p className="contactText">Road Assistance</p>
              <p className="contactNumber">1800 265 24 52</p>
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </StyledContainer>
  );
};

export default Header;
