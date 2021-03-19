import React, { Fragment, useState } from "react";
import {Label, Select} from './useMoneda.styled';

const useMoneda = (label, stateInicial, opciones) => {
  //State  custom hook
  const [state, setState] = useState(stateInicial);

  const Seleccionar = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select 
        onChange={e => setState(e.target.value)}
        value={state}
      >
        <option value="">-Seleccione moneda-</option>
        {opciones.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  //retornar state, parte del interfzas y fn que modifica el statwe
  return [state, Seleccionar, setState];
};

export default useMoneda;
