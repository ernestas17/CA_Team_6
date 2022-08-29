// Data
import { qouteData } from "../../../../data/homePageData";

// Components
import Button from "../../../../components/Button";
import QouteForm from "../QouteForm/QouteForm";
import QouteFeature from "../QouteFeature/QouteFeature";

// Styles
import {
  StyledLeftTitle,
  StyledQouteLeft,
  StyledQouteRight,
  StyledWrapper,
  StyledFeatureWrapper,
  StyledLinkText,
  StyledLink,
  StyledRightTitle,
} from "./Qoute.style";

const Qoute = () => {
  // Data
  const {
    qouteFeatureData,
    headline,
    linkText,
    formTitle,
    buttonText,
    icon,
    placeholder,
  } = qouteData;

  return (
    <StyledWrapper>
      <StyledQouteLeft>
        <StyledLeftTitle>{headline}</StyledLeftTitle>
        <StyledFeatureWrapper>
          {qouteFeatureData.map((data) => (
            <QouteFeature
              key={data.title}
              icon={data.icon}
              title={data.title}
              text={data.text}
            />
          ))}

          <StyledLink to={"/"}>
            <StyledLinkText>{linkText}</StyledLinkText>
            {icon}
          </StyledLink>
        </StyledFeatureWrapper>
      </StyledQouteLeft>
      <StyledQouteRight>
        <StyledRightTitle>{formTitle}</StyledRightTitle>
        <QouteForm placeholder={placeholder} />
        <Button color="a" text={buttonText} />
      </StyledQouteRight>
    </StyledWrapper>
  );
};

export default Qoute;
