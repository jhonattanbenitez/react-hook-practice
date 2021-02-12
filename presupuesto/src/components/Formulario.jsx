import React, { useState } from "react";

const Formulario = () => {
  return (
    <form action="">
      <h2>Agrega tus gastos aquí</h2>
      <div className="campo">
        <label htmlFor="gasto">Nombre del gasto</label>
        <input type="text" className="u-full-width" placeholder="Ej. Comida"/>
      </div>
      <div className="campo">
        <label htmlFor="gasto">Cantidad del gasto</label>
        <input type="number" className="u-full-width" placeholder="Ej. 20000"/>
      </div>
      <input type="submit" value="Guardar gasto" className="button-primary u-full-width"/>
    </form>
  );
};

export default Formulario;
