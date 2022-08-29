import React from "react";

// Components
import StepCard from "../StepCard";

// Styles
import {
  StyledWrapper,
  StyledStepsLeft,
  StyledStepsImage,
  StyledStepsH3,
  StyledStepsTitle,
} from "./Steps.style";

// Assets
import image from "../../../../assets/images/CTA1.png";

const Steps = () => {
  return (
    <StyledWrapper>
      <StyledStepsLeft>
        <StyledStepsH3>
          We Provide Expert Service and aim to have a long term with you
        </StyledStepsH3>
        <StyledStepsTitle>
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter
        </StyledStepsTitle>

        <StepCard
          step="01"
          title="Get a Quote"
          text="Through True Rich Attended does no end it his mother since real had half every."
          line={true}
        />
        <StepCard
          step="02"
          title="Book an Appointment"
          text="Through True Rich Attended does no end it his mother since real"
          line={true}
        />
        <StepCard
          step="03"
          title="Get your Service Done"
          text="Ecstatic unsatiable saw his giving Remain expense you position concluded."
        />
      </StyledStepsLeft>

      <StyledStepsImage image={image}></StyledStepsImage>
    </StyledWrapper>
  );
};

export default Steps;
