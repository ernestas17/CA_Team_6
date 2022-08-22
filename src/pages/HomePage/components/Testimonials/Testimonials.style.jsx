import styled from "styled-components";

import StyledContainer from "../../../../shared/styles/Container.style";

import { StyledH3 } from "../../../../shared/styles/Fonts.style";

export const StyledWrapper = styled(StyledContainer)`
  padding: 128px 20px;
`;

export const StyledHeadline = styled(StyledH3)`
  text-align: center;
  max-width: 909px;
  margin: 0 auto;
  padding-bottom: 94px;
`;

export const StyledSliderBottom = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 23px;
  height: 62px;
`;

export const StyledArrowsWrapper = styled.div`
  display: none;
  position: absolute;
  right: 0;
  align-items: center;
  gap: 24px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const StyledLeftArrow = styled.div`
  cursor: pointer;
  width: 48px;
  height: 48px;
  background-color: #fff;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledRightArrow = styled.div`
  cursor: pointer;
  width: 62px;
  height: 62px;
  background-color: #1e1b1b;
  border-radius: 50%;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

  svg {
    transform: rotate(180deg);
  }
`;

export const StyledLinesWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const StyledLine = styled.div`
  cursor: pointer;
  width: 32px;

  border: 2px solid ${({ active }) => (active ? "#FF6433" : "#939191")};
`;

export const StyledSlider = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const StyledSliderContent = styled.div`
  transform: translateX(-${({ translate }) => translate}px);
  transition: transform ease-out ${({ transition }) => transition}s;
  height: 100%;
  width: ${({ width }) => width}px;
  display: flex;
  @media screen and (min-width: 1024px) {
    gap: 48px;
  }
`;
