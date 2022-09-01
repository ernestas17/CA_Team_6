import styled from "styled-components";

// Styles
import { StyledContainer } from "../../../../shared/styles/Container.style";

export const StyledWrapper = styled(StyledContainer)`
  padding: 128px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  @media screen and (min-width: 1320px) {
    flex-direction: row;
  }
`;

export const StyledCardWrapper = styled.div``;
