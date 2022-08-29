// Styles
import {
  StyledCard,
  StyledStep,
  StyledBottomCircle,
  StyledNumber,
  StyledBodyWrapper,
  StyledBodyTitle,
  StyledBodyText,
  StyledLine,
  StyledStepWrapper,
} from "./StepCard.style";

const StepCard = ({ step, title, text, line }) => {
  return (
    <StyledCard>
      <StyledStepWrapper>
        <StyledStep>
          <StyledNumber>{step}</StyledNumber>
          <StyledBottomCircle />
        </StyledStep>

        {line ? <StyledLine /> : ""}
      </StyledStepWrapper>

      <StyledBodyWrapper>
        <StyledBodyTitle>{title}</StyledBodyTitle>
        <StyledBodyText>{text}</StyledBodyText>
      </StyledBodyWrapper>
    </StyledCard>
  );
};

export default StepCard;
