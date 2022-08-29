import React from "react";

// Styles
import {
  StyledWrapper,
  StyledBlockWrapper,
  StyledFeautureH2,
} from "./FeaturesBlock.styled";
// Assets
import { WrenchIcon } from "../../../../assets/svgs/svgs";

// Components
import Feature from "../Feature/Feature";
import Experience from "../Experience/Experience";

const FeaturesBlock = () => {
  return (
    <StyledWrapper>
      <StyledFeautureH2>
        Services we provide to our valued customers
      </StyledFeautureH2>
      <StyledBlockWrapper>
        <Feature
          icon={<WrenchIcon style={{ width: "32px", height: "32px" }} />}
          title={"Convenient Service"}
          body={
            "Through True Rich Attended does no end it his mother since real had half every him end it his mother"
          }
        />
        <Feature
          icon={<WrenchIcon style={{ width: "32px", height: "32px" }} />}
          title={"Convenient Service"}
          body={
            "Through True Rich Attended does no end it his mother since real had half every him end it his mother"
          }
        />
        <Feature
          icon={<WrenchIcon style={{ width: "32px", height: "32px" }} />}
          title={"Convenient Service"}
          body={
            "Through True Rich Attended does no end it his mother since real had half every him end it his mother"
          }
        />
      </StyledBlockWrapper>
      <Experience />
    </StyledWrapper>
  );
};

export default FeaturesBlock;
