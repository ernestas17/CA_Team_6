import React from "react";

// Components
import ColorsCard from "../ColorsCard/ColorsCard";

// Styles
import { StyledColorsWrapper } from "./Colors.styled";

const Colors = () => {
  return (
    <StyledColorsWrapper>
      <ColorsCard
        color={"var(--primary)"}
        image={require("../../../../assets/images/CTA1.png")}
        heading="Serve our customers and always deliver the customer service"
        title="We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes "
      />

      <ColorsCard
        color={"var(--black)"}
        image={require("../../../../assets/images/CTA2.png")}
        heading="To be the world’s most eader in automotive business solutions."
        title="We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes "
      />
      <ColorsCard
        color={"var(--secondary)"}
        image={require("../../../../assets/images/CTA2.png")}
        heading="We value the service we provide and our loyal returning customers"
        title="We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes "
      />
    </StyledColorsWrapper>
  );
};

export default Colors;
