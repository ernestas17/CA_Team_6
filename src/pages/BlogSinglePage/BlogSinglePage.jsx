import React from "react";

// Styles
import {
  StyledWrapper,
  StyledWrapperSm,
  StyledImage,
  StyledImageWrapper,
  StyledBorder,
} from "./BlogSinglePage.styled";

// Components
import Date from "../BlogPage/components/Date";
import { StyledH3 } from "./StyledH3/StyledH3";
import { StyledBody1 } from "./StyledBody1/StyledBody1";
import { StyledBody2 } from "./StyledBody2/StyledBody2";
import { StyledH4 } from "./StyledH4/StyledH4";
import { StyledTitle } from "./StyledTitle/StyledTitle";
import CallToAction from "../../components/CallToAction";

// Assets
import image1 from "../../../src/assets/images/BlogSingle1-img.png";
import image2 from "../../../src/assets/images/BlogSingle2-img.png";

const BlogSinglePage = () => {
  return (
    <>
      <StyledWrapper>
        <StyledWrapperSm>
          <Date month={"October"} day={"06"} year={"2021"} />
          <StyledH3
            headline={"Should I Buy a New Car or Lease a New Car in 2021?"}
          />
          <StyledBody2
            body={
              "We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical "
            }
          />
        </StyledWrapperSm>
      </StyledWrapper>
      <StyledWrapper>
        <StyledImageWrapper>
          <StyledImage image={image1} />
        </StyledImageWrapper>
      </StyledWrapper>
      <StyledWrapper>
        <StyledWrapperSm>
          <StyledH4 headline={"This is a blog post headline"} />
          <StyledBody2
            body={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui auctor dictum eget a elit. Pellentesque varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu posuere metus convallis."
            }
          />
          <StyledBody2
            body={
              "Ut non urna a odio condimentum dictum. Proin egestas erat a orci ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas sodales tristique quam. Suspendisse fringilla massa vel dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque egestas, non condimentum mi bibendum. Sed est eros, molestie consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris at nisi sed elit gravida malesuada."
            }
          />

          <StyledImageWrapper>
            <StyledImage image={image2} />
          </StyledImageWrapper>

          <StyledTitle headline={"This is a small blog post headline"} />
          <StyledBody2
            body={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui auctor dictum eget a elit. Pellentesque varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu posuere metus convallis. "
            }
          />
          <StyledBorder>
            <StyledBody1
              body={
                "Ut non urna a odio condimentum dictum. Proin egestas erat a orci ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis mollis ante."
              }
            />
          </StyledBorder>
          <StyledBody2
            body={
              "Ut non urna a odio condimentum dictum. Proin egestas erat a orci ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas sodales tristique quam. Suspendisse fringilla massa vel dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque egestas, non condimentum mi bibendum. Sed est eros, molestie consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris at nisi sed elit gravida malesuada."
            }
          />
        </StyledWrapperSm>
      </StyledWrapper>
      ;
      <CallToAction />
    </>
  );
};

export default BlogSinglePage;
