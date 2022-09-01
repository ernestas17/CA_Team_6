// Styles
import {
  StyledTitle,
  StyledWrapper,
  StyledImg,
  StyledTextWrapper,
} from "./BlogFourCard.styled";

// Components
import Date from "../Date";

export const BlogFourCard = ({ path, image, title, month, day, year }) => {
  return (
    <StyledWrapper>
      <StyledImg image={image} />
      <StyledTextWrapper>
        <StyledTitle>{title}</StyledTitle>
        <Date month={month} day={day} year={year} />
      </StyledTextWrapper>
    </StyledWrapper>
  );
};
