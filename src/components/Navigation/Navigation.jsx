import routes from "../../data/routesData";
import { StyledLink, StyledNav } from "./Navigation.style";

const Navigation = ({ footerText, width }) => {
  return (
    <StyledNav footerText width={width}>
      <ul>
        {routes.map((route) => (
          <li key={route.text}>
            <StyledLink to={route.to}>
              {!Array.isArray(route.text)
                ? route.text
                : footerText
                ? route.text[1]
                : route.text[0]}
            </StyledLink>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default Navigation;
