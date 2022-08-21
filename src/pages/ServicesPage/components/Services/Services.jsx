// Data
import { servicesData } from "../../../../data/servicesPageData";

// Components
import Card from "../../../../components/Card";

// Styles
import {
  StyledBodyText,
  StyledHeadline,
  StyledImage,
  StyledImageContainer,
  StyledServicesLeft,
  StyledServicesRight,
  StyledWrapper,
} from "./Services.style";

import {
  StyledLink,
  StyledLinkText,
} from "../../../HomePage/components/Offer/Offer.style";

const Services = () => {
  // Data
  const { headline, text, image, linkText, icon, services } = servicesData;

  return (
    <StyledWrapper>
      <StyledServicesLeft>
        <StyledImageContainer>
          <StyledImage image={image} />
        </StyledImageContainer>
        <StyledHeadline>{headline}</StyledHeadline>
        <StyledBodyText>{text}</StyledBodyText>
        <StyledLink to={"/"}>
          <StyledLinkText>{linkText}</StyledLinkText>
          {icon}
        </StyledLink>
      </StyledServicesLeft>

      <StyledServicesRight>
        {services.map((service, index) => (
          <Card key={index} icon={service.icon} text={service.text} />
        ))}
      </StyledServicesRight>
    </StyledWrapper>
  );
};

export default Services;
