import styled from "styled-components";
import StyledContainer from "../../../../shared/styles/Container.style";
import { StyledBody2, StyledH2 } from "../../../../shared/styles/Fonts.style";

export const StyledWrapper = styled(StyledContainer)`
  padding: 128px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 131px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const StyledProcessLeft = styled.div`
  text-align: center;
  max-width: 524px;

  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

export const StyledProcessTitle = styled(StyledH2)`
  margin-bottom: 16px;
`;
export const StyledProcessText = styled(StyledBody2)`
  margin-bottom: 32px;

  @media screen and (min-width: 1024px) {
    max-width: 437px;
  }
`;

export const StyledProcessRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
