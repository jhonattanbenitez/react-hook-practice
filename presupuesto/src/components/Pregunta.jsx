import React, { Fragment, useState } from "react";
import Error from './Error';

const Pregunta = ({setPresupuesto, setRestante, setMostrarpregunta}) => {
  //definir el state
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //función que lee el presupuesto

  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };
    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if(cantidad < 1 || isNaN( cantidad ) ) {
            setError(true);
            return;
        }

        // si se pasa la validación
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        
}
  return (
    <Fragment>
      <h2>Introduce tu presupuesto</h2>
      {error ? <Error mensaje="el presupuesto es incorrecto"/> : null}
      <form
       onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
         
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
