import styled from "styled-components";

// Styles
import { StyledContainer } from "../../shared/styles/Container.style";

export const StyledWrapper = styled(StyledContainer)`
  margin: 64px auto 64px auto;
`;

export const StyledWrapperSm = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const StyledImage = styled.div`
  max-width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;

export const StyledImageWrapper = styled.div`
  width: 100%;
  height: 512px;
`;

export const StyledBorder = styled.div`
  border-left: 3.19px solid var(--black);
  padding-left: 34.05px;
`;
