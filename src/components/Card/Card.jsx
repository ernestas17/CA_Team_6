// Hooks
import { useNavigate } from "react-router-dom";

// Styles
import { StyledCard, StyledCardText } from "./Card.style";

const Card = ({ icon, text, path }) => {
  const navigate = useNavigate();

  // Custom functions
  const handleRedirect = () => {
    navigate(`/services/${path}`);
  };

  return (
    <StyledCard onClick={handleRedirect}>
      {icon}
      <StyledCardText>{text}</StyledCardText>
    </StyledCard>
  );
};

export default Card;
