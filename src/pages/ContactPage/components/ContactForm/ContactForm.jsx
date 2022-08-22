// Components
import Button from "../../../../components/Button";

// Styles
import { StyledContactForm, StyledFormInput } from "./ContactForm.style";

const ContactForm = ({ placeholders, buttonText }) => {
  return (
    <StyledContactForm>
      {placeholders.map((data, index) => (
        <StyledFormInput key={index} placeholder={data.placeholder} />
      ))}
      <Button color={"a"} text={buttonText} />
    </StyledContactForm>
  );
};

export default ContactForm;
