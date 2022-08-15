import { StyledCard, StyledCardText } from "./Card.style";

const Card = ({ icon, text }) => {
  return (
    <StyledCard>
      {icon}
      <StyledCardText>{text}</StyledCardText>
    </StyledCard>
  );
};

export default Card;
