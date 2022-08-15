import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledLinkFont } from "../../shared/styles/Fonts.style";

export const StyledLink = styled(Link)`
  ${StyledLinkFont}
`;

export const StyledNav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  @media screen and (min-width: 768px) {
    width: ${({ width }) => (width ? width : "100%")};
    ul {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
