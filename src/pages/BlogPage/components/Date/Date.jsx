import React from "react";

// Styles
import { StyledDateBody } from "./Date.styled";

export const Date = ({ month, day, year }) => {
  return (
    <StyledDateBody>{`Posted on ${month} ${day}th ${year}`}</StyledDateBody>
  );
};
