import React from "react";
import ButtonStyle from "./Button.styled.js";

const Button = ({ text, color }) => {
  return <ButtonStyle color>{text}</ButtonStyle>;
};

export default Button;
