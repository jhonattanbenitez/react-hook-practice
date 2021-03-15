import React, { Fragment, useState } from "react";

const useMoneda = (label, stateInicial, opciones) => {
  //State  custom hook
  const [state, setState] = useState(stateInicial);

  const Seleccionar = () => (
    <Fragment>
      <label>{label}</label>
      <select 
        onChange={e => setState(e.target.value)}
      >
        <option value="">-Seleccione moneda-</option>
        {opciones.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </select>
    </Fragment>
  );

  //retornar state, parte del interfzas y fn que modifica el statwe
  return [state, Seleccionar, setState];
};

export default useMoneda;
