// Styles
import {
  StyledProfileWrapper,
  StyledImage,
  StyledImageWrapper,
  StyledPersonTestimonial,
  StyledPersonCity,
  StyledPersonName,
  StyledPersonWrapper,
  StyledTestimonial,
} from "./TestimonialCard.style";

const TestimonialCard = ({ img, name, city, description }) => {
  return (
    <StyledTestimonial>
      <StyledProfileWrapper>
        <StyledImageWrapper>
          <StyledImage src={img} alt={img} />
        </StyledImageWrapper>
        <StyledPersonWrapper>
          <StyledPersonName>{name}</StyledPersonName>
          <StyledPersonCity>{city}</StyledPersonCity>
        </StyledPersonWrapper>
      </StyledProfileWrapper>

      <StyledPersonTestimonial>{description}</StyledPersonTestimonial>
    </StyledTestimonial>
  );
};

export default TestimonialCard;
