import styled from "styled-components";
import {
  StyledTitle02,
  StyledBody2,
} from "../../../../shared/styles/Fonts.style";

export const StyledFeature = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledFeatureCircle = styled.div`
  background: url(${({ icon }) => icon});
  background-repeat: no-repeat;

  width: 47px;
  height: 47px;

  flex-shrink: 0;
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledFeatureTitle = styled(StyledTitle02)``;

export const StyledFeatureBody = styled(StyledBody2)``;
