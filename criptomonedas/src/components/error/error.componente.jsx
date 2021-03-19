import React from "react";
import MensajeError from "./error.styled";

const Error = ({ mensaje }) => {
  return <MensajeError>{mensaje}</MensajeError>;
};

export default Error;
