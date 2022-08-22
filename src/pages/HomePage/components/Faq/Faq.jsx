// Hooks
import { useState } from "react";

// Data
import { faqData } from "../../../../data/homePageData";

// Styles
import {
  StyledAnswer,
  StyledFaq,
  StyledFaqCard,
  StyledFaqWrapper,
  StyledHeadline,
  StyledIconWrapper,
  StyledQuestion,
  StyledQuestionWrapper,
} from "./Faq.style";

const Faq = () => {
  // Data
  const { headline, questions, openIcon, closeIcon } = faqData;

  // State
  const [isOpened, setIsOpened] = useState(false);

  // Custom functions
  const toogle = (index) => {
    if (isOpened === index) {
      return setIsOpened(null);
    }
    setIsOpened(index);
  };

  return (
    <StyledFaqWrapper>
      <StyledHeadline>{headline}</StyledHeadline>

      <StyledFaq>
        {questions.map((data, index) => (
          <StyledFaqCard key={index} onClick={() => toogle(index)}>
            <StyledQuestionWrapper>
              <StyledQuestion>{data.question}</StyledQuestion>

              <StyledIconWrapper>
                {isOpened === index ? closeIcon : openIcon}
              </StyledIconWrapper>
            </StyledQuestionWrapper>

            {isOpened === index ? (
              <StyledAnswer>{data.answer}</StyledAnswer>
            ) : null}
          </StyledFaqCard>
        ))}
      </StyledFaq>
    </StyledFaqWrapper>
  );
};

export default Faq;
