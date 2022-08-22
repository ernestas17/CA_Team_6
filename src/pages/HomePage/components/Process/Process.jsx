// Data
import { processData } from "../../../../data/homePageData";

// Components
import Button from "../../../../components/Button";
import StepCard from "../StepCard/StepCard";

// Styles
import {
  StyledProcessLeft,
  StyledProcessRight,
  StyledProcessText,
  StyledProcessTitle,
  StyledWrapper,
} from "./Process.style";

const Process = () => {
  // Data
  const { processStepsData, headline, subHeadline, buttonText } = processData;
  return (
    <StyledWrapper>
      <StyledProcessLeft>
        <StyledProcessTitle>{headline}</StyledProcessTitle>
        <StyledProcessText>{subHeadline}</StyledProcessText>
        <Button color={"a"} text={buttonText} />
      </StyledProcessLeft>

      <StyledProcessRight>
        {processStepsData.map((data) => (
          <StepCard
            key={data.step}
            step={data.step}
            title={data.title}
            text={data.text}
            line={data.line}
          />
        ))}
      </StyledProcessRight>
    </StyledWrapper>
  );
};

export default Process;
