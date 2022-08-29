import styled from "styled-components";

import StyledContainer from "../../../../shared/styles/Container.style";

export const StyledWrapper = styled(StyledContainer)`
  padding: 48px 20px;
  margin: 64px 0 128px 0;
  display: flex;
  padding-bottom: 128px;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  gap: 20px;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
  @media screen and (min-width: 1024px) {
    justify-content: space-between;
  }
`;
