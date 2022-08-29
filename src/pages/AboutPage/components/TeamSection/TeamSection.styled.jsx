import styled from "styled-components";

// Styles
import { StyledH1 } from "../../../../shared/styles/Fonts.style";
import { StyledContainer } from "../../../../shared/styles/Container.style";

export const StyledWrapper = styled(StyledContainer)`
  text-align: center;
  margin-bottom: 140px;
`;
export const StyledTeamH1 = styled(StyledH1)`
  margin-bottom: 66px;
`;

export const StyledCardWrapper = styled.div`
  @media screen and (min-width: 826px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: center;
  }
`;
