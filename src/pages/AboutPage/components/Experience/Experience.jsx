// Styles
import { StyledWrapper } from "./Experience.styled";

// Components
import ExperienceNumber from "../ExperienceNumber/ExperienceNumber";

const Experience = () => {
  return (
    <StyledWrapper>
      <ExperienceNumber headline={"20+"} title={"Proffesionals"} />
      <ExperienceNumber headline={"10+"} title={"Years Eperience"} />
      <ExperienceNumber headline={"12K+"} title={"Service Closed"} />
      <ExperienceNumber headline={"100%"} title={"Customer Satisfaction"} />
    </StyledWrapper>
  );
};

export default Experience;
