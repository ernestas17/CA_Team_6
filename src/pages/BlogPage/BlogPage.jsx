import React from "react";

// Styles
import { StyledBackground } from "./BlogPage.style";

//Components
import BlogHeader from "./components/BlogHeader";
import CallToAction from "../../components/CallToAction";
import BlogFourSection from "./components/BlogFourSection";
import { BlogFullSection } from "./components/BlogFullSection/BlogFullSection";

const BlogPage = () => {
  return (
    <div>
      <BlogHeader />
      <StyledBackground color={"#F5F5F5"}>
        <BlogFourSection />
      </StyledBackground>
      <BlogFullSection />
      <CallToAction />
    </div>
  );
};

export default BlogPage;
