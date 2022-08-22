import styled from "styled-components";

// Styles
import {
  StyledH4,
  StyledBody2,
  StyledTitle01,
  StyledBody1,
} from "../../../../shared/styles/Fonts.style";

export const StyledContentHeadline = styled(StyledH4)`
  margin-bottom: 24px;
`;
export const StyledContentParagraph = styled(StyledBody2)`
  color: #232536;
  white-space: pre-line;
  margin-bottom: ${({ margin }) => `${margin}px`};
`;
export const StyledContentTitle = styled(StyledTitle01)``;
export const StyledContentQoute = styled(StyledBody1)`
  color: #232536;
  border-left: 3px solid #1e1b1b;

  padding-left: 32px;
`;

export const StyledContent = styled.div``;
export const StyledImageWrapper = styled.div`
  margin-bottom: 56px;
`;
export const StyledImage = styled.img``;
export const StyledTextWrapper = styled.div``;
