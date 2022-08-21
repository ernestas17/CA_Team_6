// Styles
import { StyledForm, StyledInput } from "./QouteForm.style";

const QouteForm = ({ placeholder }) => {
  return (
    <StyledForm>
      <StyledInput placeholder={placeholder}></StyledInput>
      <StyledInput placeholder={placeholder}></StyledInput>
      <StyledInput placeholder={placeholder}></StyledInput>
      <StyledInput placeholder={placeholder}></StyledInput>
    </StyledForm>
  );
};

export default QouteForm;
