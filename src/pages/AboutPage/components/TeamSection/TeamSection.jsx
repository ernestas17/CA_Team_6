import React from "react";

// Components
import PersonCard from "../PersonCard";

// Styles
import {
  StyledCardWrapper,
  StyledTeamH1,
  StyledWrapper,
} from "./TeamSection.styled";

export const TeamSection = () => {
  return (
    <StyledWrapper>
      <StyledTeamH1>Meet our Team</StyledTeamH1>
      <StyledCardWrapper>
        <PersonCard
          image={require("../../../../assets/images/Person1.png")}
          title={"Javena Melo"}
          body={"Founder, Director"}
        />
        <PersonCard
          image={require("../../../../assets/images/Person2.png")}
          title={"Paul Honson"}
          body={"Head Technician"}
        />
        <PersonCard
          image={require("../../../../assets/images/Person3.png")}
          title={"Devon Lane"}
          body={"Technician"}
        />
        <PersonCard
          image={require("../../../../assets/images/Person4.png")}
          title={"Jalen Davies"}
          body={"Marketing Manager"}
        />
        <PersonCard
          image={require("../../../../assets/images/Person5.png")}
          title={"Kylee Danford"}
          body={"Sales Manager"}
        />
        <PersonCard
          image={require("../../../../assets/images/Person6.png")}
          title={"Luisa Wilson"}
          body={"Support Assistant"}
        />
      </StyledCardWrapper>
    </StyledWrapper>
  );
};
