import styled from "styled-components";

// Styles
import { StyledContainer } from "../../../../shared/styles/Container.style";
import { StyledH2 } from "../../../../shared/styles/Fonts.style";

export const StyledWrapper = styled(StyledContainer)`
  width: 100%;
  height: 100%;
`;

export const StyledFeautureH2 = styled(StyledH2)`
  max-width: 861px;
  text-align: center;
  margin: 0 auto;
  padding: 128px 0px 64px 0px;
`;

export const StyledBlockWrapper = styled.div`
  align-items: center;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;
