import styled from "styled-components";

import StyledContainer from "../../../../shared/styles/Container.style";

import { StyledH3 } from "../../../../shared/styles/Fonts.style";

export const StyledWrapper = styled(StyledContainer)`
  padding: 128px 20px 81px 20px;
`;

export const StyledHeadline = styled(StyledH3)`
  text-align: center;
  margin-bottom: 40px;
`;

export const BrandsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

export const BrandsRow = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 8px;

  li {
    max-width: 224px;
    max-height: 127px;
  }
  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    gap: 0;
    li {
      width: calc(100% / 5);

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
