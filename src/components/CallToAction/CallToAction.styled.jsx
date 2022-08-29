import styled from "styled-components";

const CallToActionContainer = styled.section`
  width: 100%;

  .centerContainer {
    height: 502px;
    background-color: var(--primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .CTA1Style,
  .CTA2Style {
    width: 100%;
    height: 502px;
    object-fit: cover;
  }

  h3 {
    inline-size: 80%;
    font-size: var(--font-size4);
    font-weight: var(--font-weight2);
    color: var(--white);
    text-align: center;
  }

  @media only screen and (min-width: 728px) {
    height: 502px;
    position: relative;
    display: flex;

    .centerContainer {
      position: absolute;
      width: 45%;
      float: left;
      left: 20%;
    }
    .CTA1Style {
      width: 50%;
      object-fit: cover;
    }
    .CTA2Style {
      width: 50%;
      object-fit: cover;
    }
  }
  @media only screen and (min-width: 1024px) {
    .centerContainer {
      position: absolute;
      width: 45%;
      float: left;
      left: 20%;

      padding: 1rem 3rem;
      align-items: flex-start;
    }

    h3 {
      inline-size: 90%;
      font-size: var(--font-size3);
      text-align: left;
    }
  }
`;

export default CallToActionContainer;
