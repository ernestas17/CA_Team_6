import styled from "styled-components";

import {
  StyledTitle02,
  StyledBodyMed2,
} from "../../../../shared/styles/Fonts.style";

export const StyledTestimonial = styled.div`
  padding: 72px;
  background-color: #ffffff;
  border: 1px solid rgba(172, 172, 172, 0.29);
  box-shadow: 11px 130px 100px 30px rgba(0, 0, 0, 0.02);
  border-radius: 6px;
  text-align: center;
  width: calc(${({ width }) => width}px - (100vw - 100%));

  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
  @media screen and (min-width: 768px) {
    width: ${({ width }) => width}px;
    text-align: left;
  }
`;
export const StyledProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledPersonWrapper = styled.div``;

export const StyledPersonName = styled(StyledTitle02)`
  white-space: nowrap;
`;
export const StyledPersonCity = styled(StyledBodyMed2)`
  color: #939191;
`;

export const StyledImageWrapper = styled.div`
  align-self: center;
  width: 64px;
  height: 64px;
`;
export const StyledImage = styled.img`
  border-radius: 151px;
  object-fit: cover;
`;
export const StyledPersonTestimonial = styled(StyledTitle02)``;
