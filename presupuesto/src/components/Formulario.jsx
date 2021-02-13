import React, { useState } from "react";
import Error from "./Error";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';

const Formulario = ({setGasto, setCrearGasto}) => {
  const [nombregasto, setNombregasto] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

    //cuando el usuario agrega un gasto

  const agregarGasto = (e) => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(cantidad) || nombregasto.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    //construir el gasto
    const gasto = {
      nombregasto,
      cantidad,
      id: uuidv4(),
    };
     // pasar el gasto al componente de listado de gastos

     setGasto(gasto);
     setCrearGasto(true);


    //resetear el forumalario
    setNombregasto('');
    setCantidad(0);

  };

  return (
    <form action="" onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? (
        <Error mensaje="Ambos casos son obligatorios o prosupuesto incorrecto" />
      ) : null}
      <div className="campo">
        <label htmlFor="gasto">Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Comida"
          value={nombregasto}
          onChange={(e) => setNombregasto(e.target.value)}
        />
      </div>
      <div className="campo">
        <label htmlFor="gasto">Cantidad del gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 20000"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        value="Guardar gasto"
        className="button-primary u-full-width"
      />
    </form>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired
}

export default Formulario;
