// Hooks
import { useState, useEffect } from "react";

// Data
import { testimonialsData } from "../../../../data/homePageData";

// Components
import TestimonialCard from "../TestimonialCard/TestimonialCard";

// Styles
import {
  StyledArrowsWrapper,
  StyledHeadline,
  StyledLeftArrow,
  StyledRightArrow,
  StyledWrapper,
  StyledLine,
  StyledLinesWrapper,
  StyledSliderBottom,
  StyledSlider,
  StyledSliderContent,
} from "./Testimonials.style";

const Testimonials = () => {
  // Data
  const { arrowIcon, usersData, headline } = testimonialsData;

  // State
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  // Side effects
  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [transition]);

  // Custom functions
  const getWidth = () => {
    if (window.innerWidth >= 1280) {
      return 1280 / 2 + 12;
    } else {
      return window.innerWidth < 768
        ? window.innerWidth - 40
        : window.innerWidth / 2;
    }
  };

  const handleResize = () => {
    setState({
      ...state,
      translate: 0,
      transition: 0,
    });
  };

  const nextSlide = () => {
    if (activeIndex === usersData.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (usersData.length - 1) * getWidth(),
        activeIndex: usersData.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };

  const goToSlide = (slideIndex) => {
    return setState({
      ...state,
      translate: slideIndex * getWidth(),
      activeIndex: slideIndex,
    });
  };

  return (
    <StyledWrapper>
      <StyledHeadline>{headline}</StyledHeadline>

      <StyledSlider>
        <StyledSliderContent
          translate={translate}
          transition={transition}
          width={getWidth() * usersData.length}
        >
          {usersData.map((slide, index) => (
            <TestimonialCard
              width={getWidth()}
              key={index}
              img={slide.image}
              name={slide.name}
              city={slide.city}
              description={slide.description}
            />
          ))}
        </StyledSliderContent>
      </StyledSlider>

      <StyledSliderBottom>
        <StyledLinesWrapper>
          {usersData.map((_slide, index) => (
            <StyledLine
              key={index}
              active={index === activeIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </StyledLinesWrapper>

        <StyledArrowsWrapper>
          <StyledLeftArrow onClick={prevSlide}>{arrowIcon}</StyledLeftArrow>

          <StyledRightArrow onClick={nextSlide}>{arrowIcon}</StyledRightArrow>
        </StyledArrowsWrapper>
      </StyledSliderBottom>
    </StyledWrapper>
  );
};

export default Testimonials;
