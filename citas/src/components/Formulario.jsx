import React, { Fragment, useState } from "react";

const Formulario = () => {
  // crear State de citas

    const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha:'',
    hora:'',
    sintomas: ''
  });

  //función que se ejectua cada vez que el usuario escribe algo
  const actualizarState = (e) => {
    actualizarCita ({
      ...cita,
      [e.target.name] : e.target.value
    })
  };
  //Extraer los valores de los campos del formulario 
  const {mascota, propietario, fecha, hora, sintomas} = cita;

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form action="">
        <label htmlFor="">Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="nombre mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label htmlFor="">Nombre del dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="nombre del dueño de la mascota"
          onChange={actualizarState}
          value={propietario}
        />
        <label htmlFor="">Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label htmlFor="">Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label htmlFor="">Síntomas </label>
        <textarea
          type="text"
          name="sintomas"
          className="u-full-width"
          placeholder="¿Cuál es el problema con su mascota?"
          onChange={actualizarState}
          value={sintomas}
        />
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
