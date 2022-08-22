import styled from "styled-components";

import StyledContainer from "../../../../shared/styles/Container.style";

import {
  StyledBodyMed1,
  StyledH3,
  StyledTitle02,
} from "../../../../shared/styles/Fonts.style";

export const StyledFaqWrapper = styled(StyledContainer)`
  padding: 128px 20px;
`;

export const StyledFaq = styled.div`
  max-width: 896px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledHeadline = styled(StyledH3)`
  text-align: center;
  margin-bottom: 95px;
`;

export const StyledFaqCard = styled.div`
  background-color: #ffffff;
  padding: 32px 40px;

  &:hover {
    svg {
      border-radius: 14px;
    }
  }
`;

export const StyledQuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
export const StyledQuestion = styled(StyledTitle02)``;

export const StyledIconWrapper = styled.span`
  display: flex;
  svg {
    transition: all 400ms;
  }
`;

export const StyledAnswer = styled(StyledBodyMed1)`
  max-width: 700px;
  margin-top: 16px;
  color: #939191;
`;
