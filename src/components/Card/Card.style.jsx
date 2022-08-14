import styled from "styled-components";

import { StyledTitle02 } from "../../shared/styles/Fonts.style";

export const StyledCard = styled.div`
  width: auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  background-color: var(--white);

  &:hover {
    cursor: pointer;
    background-color: var(--primary);
    color: var(--white);

    & svg {
      color: var(--white);
    }
  }
`;

export const StyledCardText = styled(StyledTitle02)``;
