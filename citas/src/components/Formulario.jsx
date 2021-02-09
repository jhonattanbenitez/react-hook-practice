import React, { Fragment, useState } from "react";
import uuid from 'react-uuid';

const Formulario = ({crearCita}) => {
  // crear State de citas

  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  //función que se ejectua cada vez que el usuario escribe algo
  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };
  //Extraer los valores de los campos del formulario
  const { mascota, propietario, fecha, hora, sintomas } = cita;
  //cuando el usuario presiona agregar cita
  const submitCita = (e) => {
    e.preventDefault();

    //Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    //eliminar el mensaje previo
    actualizarError(false);

    //asignar UN ID
    cita.id = uuid();
   
    //Crear la cita
    crearCita(cita);

    //Reiniciar el form
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    })
  };
  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {
        error ? <p className="alerta-error">Todos los campos son obligatorios</p>: null
      }
      <form action="" onSubmit={submitCita}>
        <label htmlFor="">Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="nombre mascota"
          onChange={actualizarState}
          value={mascota}
          required
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
