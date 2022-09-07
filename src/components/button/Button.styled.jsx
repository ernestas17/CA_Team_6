import styled from "styled-components";

const ButtonStyle = styled.button`
  border-radius: 12px;
  padding: 16px 40px;
  gap: 10px;
  border: none;
  background-color: ${(props) =>
    props.color ? "var(--primary)" : "var(--black)"};
  color: var(--white);
  font-size: var(--font-size7);
  &:hover {
    cursor: pointer;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  }
`;

export default ButtonStyle;
