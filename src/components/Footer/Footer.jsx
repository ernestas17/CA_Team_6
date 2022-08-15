import { Link } from "react-router-dom";
import logo from "../../assets/images/FooterLogo.png";
import StyledContainer from "../../shared/styles/Container.style";
import {
  footerContactData,
  headline,
  copyright,
  footerMediaData,
} from "../../data/footerData";
import {
  StyledFooter,
  StyledFooterTop,
  StyledFooterBottom,
  StyledSocials,
  StyledFooterLeft,
  StyledFooterRight,
  StyledCopyright,
  StyledFooterBottomWrapper,
  StyledHeadline,
  StyledTitle,
  StyledSubTitle,
  StyledTitlesWrapper,
} from "./Footer.style";

import Navigation from "../Navigation";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledFooterTop>
          <StyledFooterLeft>
            <StyledHeadline>{headline}</StyledHeadline>
            <StyledSocials>
              <ul>
                {footerMediaData.map((media, index) => (
                  <li key={index}>
                    <a href={media.link}>{media.icon}</a>
                  </li>
                ))}
              </ul>
            </StyledSocials>
          </StyledFooterLeft>
          <StyledFooterRight>
            {footerContactData.map((info) => (
              <StyledTitlesWrapper key={info.body}>
                <StyledTitle>{info.body}</StyledTitle>
                <StyledSubTitle>{info.title}</StyledSubTitle>
              </StyledTitlesWrapper>
            ))}
          </StyledFooterRight>
        </StyledFooterTop>
      </StyledContainer>

      <StyledFooterBottomWrapper>
        <StyledFooterBottom>
          <Link to={"/"}>
            <img src={logo} alt={logo} />
          </Link>

          <Navigation width={"459px"} footerText />

          <StyledCopyright>&#64; {copyright}</StyledCopyright>
        </StyledFooterBottom>
      </StyledFooterBottomWrapper>
    </StyledFooter>
  );
};

export default Footer;
