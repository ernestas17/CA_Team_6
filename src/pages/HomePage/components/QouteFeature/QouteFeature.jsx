// Styles
import {
  StyledFeature,
  StyledFeatureCircle,
  StyledTextWrapper,
  StyledFeatureTitle,
  StyledFeatureBody,
} from "./QouteFeature.style";

const QouteFeature = ({ icon, title, text }) => {
  return (
    <StyledFeature>
      <StyledFeatureCircle icon={icon} />
      <StyledTextWrapper>
        <StyledFeatureTitle>{title}</StyledFeatureTitle>
        <StyledFeatureBody>{text}</StyledFeatureBody>
      </StyledTextWrapper>
    </StyledFeature>
  );
};

export default QouteFeature;
