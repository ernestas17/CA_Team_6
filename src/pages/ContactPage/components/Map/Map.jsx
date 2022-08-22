// Data
import { contactPageData } from "../../../../data/contactPageData";

// Styles
import {
  StyledImage,
  StyledTopImage,
  StyledMapContainer,
  StyledTopImageContainer,
} from "./Map.style";

const Map = () => {
  // Data
  const { map, image } = contactPageData;
  return (
    <StyledMapContainer>
      <StyledTopImageContainer>
        <StyledTopImage src={map} alt={map} />
      </StyledTopImageContainer>

      <StyledImage src={image} alt={image} />
    </StyledMapContainer>
  );
};

export default Map;
