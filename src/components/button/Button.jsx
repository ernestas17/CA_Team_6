import React from "react";
import ButtonStyle from "./Button.styled.jsx";

const Button = ({ text, color }) => {
  return <ButtonStyle color={color}>{text}</ButtonStyle>;
};

export default Button;
