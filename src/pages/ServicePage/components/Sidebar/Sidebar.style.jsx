import styled from "styled-components";

// Styles
import {
  StyledTitle01,
  StyledTitle02,
  StyledBody2,
} from "../../../../shared/styles/Fonts.style";

export const StyledSidebar = styled.aside`
  max-width: 330px;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
`;

export const StyledServicesContainer = styled.div`
  display: flex;
  background-color: #f5f5f5;
  padding: 32px;

  flex-direction: column;

  gap: 26px;
  div {
    max-width: 264px;
    height: 158px;
  }
`;

export const StyledTitle = styled(StyledTitle01)`
  margin-bottom: 32px;
`;
export const StyledFeatureTitle = styled(StyledTitle02)``;
export const StyledFeatureBody = styled(StyledBody2)`
  color: #1e1b1b;
`;

export const StyledFeatureBodyContainer = styled.div``;
export const StyledFeatureContainer = styled.div``;
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
