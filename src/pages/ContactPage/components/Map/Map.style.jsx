import styled from "styled-components";

export const StyledMapContainer = styled.div`
  position: relative;
  height: 782px;
  width: 100%;
  padding-top: 334px;
  & img {
    object-fit: cover;
  }
`;
export const StyledTopImageContainer = styled.div`
  max-width: 1320px;
  height: 512px;
  margin: 0 auto;
  padding: 0 20px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const StyledTopImage = styled.img``;
export const StyledImage = styled.img`
  height: 448px;
`;
