import styled from "styled-components";

import StyledContainer from "../../../../shared/styles/Container.style";

import {
  StyledH1,
  StyledCaption,
  StyledBodyMed1,
  StyledBodyMed2,
  StyledTitle02,
} from "../../../../shared/styles/Fonts.style";

export const StyledWrapper = styled(StyledContainer)`
  padding-top: 80px;
  padding-bottom: 128px;
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 21px;
  }
`;

export const StyledHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    max-width: 624px;
    align-items: flex-start;
  }
`;

export const StyledHeaderTitle = styled(StyledH1)`
  margin-bottom: 32px;

  @media screen and (max-width: 1023px) {
    text-align: center;
    font-size: 40px;
    line-height: 140%;
  }
`;

export const StyledOpenCard = styled.div`
  display: flex;
  align-items: center;
  margin: 48px 0;

  svg {
    margin-right: 13.05px;
  }
`;

export const StyledTextWrapper = styled.div``;

export const StyledCaptionText = styled(StyledCaption)`
  color: #939191;
`;
export const StyledBodyText = styled(StyledBodyMed1)``;

export const StyledHeaderRight = styled.div`
  max-width: 655px;
  height: 500px;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 20px;
  position: relative;

  @media screen and (min-width: 768px) {
    height: 632px;
    width: 655px;
  }
`;
export const StyledHeaderImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const StyledServiceCard = styled.div`
  width: 282px;
  height: 102px;
  background: linear-gradient(138.85deg, #ffffff -38.72%, #ffffff 153.95%);
  outline: 12px solid rgba(225, 225, 225, 0.43);
  box-shadow: 0px 28px 118px rgba(109, 108, 115, 0.12);
  border-radius: 59px;

  display: flex;
  align-items: center;
  gap: 15px;

  position: absolute;
  top: 20px;
  left: 0;
  padding-left: 14px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    top: 81px;
    left: 0;
  }
`;

export const StyledServiceCircle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #5cba99;
  color: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const StyledCircleNumbers = styled(StyledTitle02)``;

export const StyledCircleLetters = styled(StyledBodyMed2)``;

export const StyledText = styled(StyledTitle02)``;

export const StyledRatingCard = styled.div`
  width: 326px;
  height: 102px;
  background: #ffffff;
  outline: 12px solid rgba(225, 225, 225, 0.43);
  box-shadow: 0px 28px 118px rgba(109, 108, 115, 0.12);
  border-radius: 59px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  position: absolute;
  bottom: 20px;
  right: 0;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    bottom: 70px;
    right: 0;
  }
`;

export const StyledRatingTextWrapper = styled.div``;

export const StyledRatingCaptionText = styled(StyledCaption)`
  opacity: 0.7;
`;

export const StyledStarsWrapper = styled.div`
  width: 185px;
  display: flex;
  justify-content: space-between;
  svg {
    width: 36px;
    height: 36px;
  }
`;
