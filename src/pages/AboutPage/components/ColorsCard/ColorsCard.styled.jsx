import styled from "styled-components";

// Styles
import { StyledH4, StyledTitle02 } from "../../../../shared/styles/Fonts.style";

export const StyledColorsImage = styled.div`
  width: 100%;
  height: 629px;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  object-fit: fill;
  color: var(--white);

  @media screen and (min-width: 1204px) {
    text-align: left;
  }
`;

export const StyledWrapper = styled.div`
  background-color: ${({ color }) => color};
  opacity: 0.9;
  height: 100%;
  @media screen and (min-width: 1024px) {
    max-width: 640px;
  }
`;
export const StyledColorsTitle = styled(StyledTitle02)`
  max-width: 435px;
  margin: 0 auto;
`;
export const StyledColorsH4 = styled(StyledH4)`
  padding-top: 142px;

  max-width: 437px;
  margin: 0 auto 32px;
`;
