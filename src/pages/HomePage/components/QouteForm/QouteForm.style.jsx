import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 4px;
  margin: 32px 0;
`;
export const StyledInput = styled.input`
  border: 0;
  outline: 0;

  border-radius: 2px;
  padding: 23px 40px;
  &::placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    color: #1e1b1b;
    opacity: 0.5;
  }
  &:focus {
    outline: 2px solid gray;
  }
`;
