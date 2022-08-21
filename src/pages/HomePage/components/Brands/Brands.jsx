// Data
import { brandsData } from "../../../../data/homePageData";

// Styles
import {
  StyledHeadline,
  StyledWrapper,
  BrandsWrapper,
  BrandsRow,
} from "./Brands.style";

const Brands = () => {
  // Data
  const { headline, brands } = brandsData;

  return (
    <StyledWrapper>
      <StyledHeadline>{headline}</StyledHeadline>
      <BrandsWrapper>
        <BrandsRow>
          {brands.map((data, index) => (
            <li key={index}>{data.image}</li>
          ))}
        </BrandsRow>
        <BrandsRow>
          {brands.map((data, index) => (
            <li key={index}>{data.image}</li>
          ))}
        </BrandsRow>
      </BrandsWrapper>
    </StyledWrapper>
  );
};

export default Brands;
