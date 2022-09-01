import React from "react";

// Components
import { BlogFourLeft } from "../BlogFourLeft/BlogFourLeft";
import { BlogFourCard } from "../BlogFourCard/BlogFourCard";

// Styles
import { StyledWrapper, StyledCardWrapper } from "./BlogFourSection.styled";

export const BlogFourSection = () => {
  return (
    <StyledWrapper>
      <BlogFourLeft
        headline={"Should I Buy a New Car or Lease a New Car in 2021?"}
        text={
          "We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical."
        }
        linkText={"Read more"}
      />
      <StyledCardWrapper>
        <BlogFourCard
          image={require("../../../../assets/images/BlogCard1-img.png")}
          title={"Get an Awesome Number Plate for Your New Car"}
          month={"October"}
          day={"06"}
          year={"2021"}
        />
        <BlogFourCard
          image={require("../../../../assets/images/BlogCard2-img.png")}
          title={"Would you Let a Robot Drive your Car? Our AI Future"}
          month={"October"}
          day={"06"}
          year={"2021"}
        />
        <BlogFourCard
          image={require("../../../../assets/images/BlogCard3-img.png")}
          title={"Will Electric Technology Soon Rule The Road?"}
          month={"October"}
          day={"06"}
          year={"2021"}
        />
      </StyledCardWrapper>
    </StyledWrapper>
  );
};
