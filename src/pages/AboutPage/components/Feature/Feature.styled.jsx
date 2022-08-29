import styled from "styled-components";

// Styles
import {
  StyledTitle01,
  StyledBody1,
} from "../../../../shared/styles/Fonts.style";

export const StyledFeatureTitle = styled(StyledTitle01)`
  margin: 16px auto;
  width: 100%;
`;

export const StyledFeatureBody = styled(StyledBody1)`
  width: 100%;
`;

export const StyledFeatureWrapper = styled.div`
  min-height: 424px;
  max-width: 426px;
  border: 2px solid #f2f2f2;
  margin: 0 auto;
  background-color: var(--white);
`;

export const StyledFeatureTextWrapper = styled.div`
  padding: 69px 60px;
  text-align: center;
`;

export const StyledIconWrapper = styled.div`
  background-color: #ffdace;
  width: 64px;
  height: 64px;
  margin: 0 auto;
  padding-top: 15px;
  border-radius: 50%;
`;
