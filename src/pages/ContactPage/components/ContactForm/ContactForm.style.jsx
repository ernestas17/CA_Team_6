import styled from "styled-components";

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 4px;

  button {
    max-width: 206px;
    margin-top: 48px;
  }
`;

export const StyledFormInput = styled.input`
  background-color: #f2f2f2;
  border: 0;
  outline: 0;

  border-radius: 2px;
  padding: 23px 40px;
  &::placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    color: #1e1b1b;
  }
  &:focus {
    outline: 2px solid gray;
  }
`;
