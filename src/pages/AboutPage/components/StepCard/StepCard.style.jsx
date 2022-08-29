import styled from "styled-components";

import {
  StyledTitle01,
  StyledBody1,
} from "../../../../shared/styles/Fonts.style";

export const StyledCard = styled.div`
  display: flex;
  gap: 24px;
  display-flex;
 justify-content: center;
  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
  }

`;

export const StyledStep = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #661ce7;
`;
export const StyledBottomCircle = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.24);

  position: absolute;
  bottom: -21px;
`;

export const StyledNumber = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 24px;
  color: #fff;
`;

export const StyledLine = styled.div`
  width: 71px;
  height: 0px;

  margin-top: 32px;

  border: 2px dashed #ff6433;
  transform: rotate(90deg);
`;

export const StyledStepWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 16px;
  padding-bottom: px;
`;

export const StyledBodyWrapper = styled.div`
  max-width: 356px;
`;

export const StyledBodyTitle = styled(StyledTitle01)`
  margin-top: 13px;
  margin-bottom: 8px;
`;
export const StyledBodyText = styled(StyledBody1)``;
