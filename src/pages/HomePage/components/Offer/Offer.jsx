// Data
import { offerData } from "../../../../data/homePageData";

// Components
import Card from "../../../../components/Card";

// Styles
import {
  StyledHeadline,
  StyledTitle,
  StyledWrapper,
  StyledOfferWrapper,
  StyledLinkText,
  StyledLink,
} from "./Offer.style";

const Offer = () => {
  // Data
  const { offerGridData, title, headline, linkText, icon } = offerData;

  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledHeadline>{headline}</StyledHeadline>
      <StyledOfferWrapper>
        {offerGridData.map((data) => (
          <Card key={data.text} icon={data.icon} text={data.text} />
        ))}
      </StyledOfferWrapper>
      <StyledLink to={"/"}>
        <StyledLinkText>{linkText}</StyledLinkText>
        {icon}
      </StyledLink>
    </StyledWrapper>
  );
};

export default Offer;
