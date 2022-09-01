import React from "react";

// Components
import { BlogFullCard } from "../BlogFullCard/BlogFullCard";

//Styles
import { StyledWrapper } from "./BlogFullSection.styled";

export const BlogFullSection = () => {
  return (
    <StyledWrapper>
      <BlogFullCard
        month={"October"}
        day={"06"}
        year={"2021"}
        title={"5 Genius Car Accessories You Should Never Drive Without"}
        body={
          "We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models"
        }
        image={require("../../../../assets/images/BlogFull1-img.png")}
      />
      <BlogFullCard
        month={"October"}
        day={"06"}
        year={"2021"}
        title={"5 Genius Car Accessories You Should Never Drive Without"}
        body={
          "We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models"
        }
        image={require("../../../../assets/images/BlogFull2-img.png")}
      />
      <BlogFullCard
        month={"October"}
        day={"06"}
        year={"2021"}
        title={"We provide blow straight past it with the wheels skidding"}
        body={
          "We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models"
        }
        image={require("../../../../assets/images/BlogFull3-img.png")}
      />
      <BlogFullCard
        month={"October"}
        day={"06"}
        year={"2021"}
        title={"We provide blow straight past it with the wheels skidding"}
        body={
          "We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models"
        }
        image={require("../../../../assets/images/BlogFull4-img.png")}
      />
      <BlogFullCard
        month={"October"}
        day={"06"}
        year={"2021"}
        title={"5 Genius Car Accessories You Should Never Drive Without"}
        body={
          "We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models"
        }
        image={require("../../../../assets/images/BlogFull5-img.png")}
      />
      <BlogFullCard
        month={"October"}
        day={"06"}
        year={"2021"}
        title={"5 Genius Car Accessories You Should Never Drive Without"}
        body={
          "We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models"
        }
        image={require("../../../../assets/images/BlogFull6-img.png")}
      />
    </StyledWrapper>
  );
};
