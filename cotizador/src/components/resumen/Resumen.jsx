import React from "react";
import {ContenedorResumen} from './resumen.styled';

const Resumen = ({ datos }) => {
  //extraer datos
  const { marca, year, plan } = datos;
  if (marca === "" || year === "" || plan === "") {
    return null;
  }

  return (
    <ContenedorResumen>
      <h2>Resumen de cotización</h2>
      <ul>
        <li>Marca: {marca} </li>
        <li>Plan: {plan}</li>
        <li>Año: {year}</li>
      </ul>
    </ContenedorResumen>
  );
};

export default Resumen;
