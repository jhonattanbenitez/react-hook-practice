import React from "react";
import styles from "./formulario.module.css";
import PropTypes from 'prop-types'
import useSelect from "../../hooks/useSelect";

const Formulario = ({ setCategoria }) => {
  const OPCIONES = [
    {
      value: "general",
      label: "General",
    },
    {
      value: "business",
      label: "Negocios",
    },
    {
      value: "entertainment",
      label: "Entretenimiento",
    },
    {
      value: "health",
      label: "Salud",
    },
    {
      value: "science",
      label: "Ciencia",
    },
    {
      value: "sports",
      label: "Deportes",
    },
    {
      value: "technology",
      label: "Tecnología",
    },
  ];

  //usando custom hook select

  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

  //submit al form, pásar categoría a App.js

  const buscarNoticias = (e) => {
    e.preventDefault();
    setCategoria(categoria);
  };

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
          <SelectNoticias />
          <div className="input-field col-s12">
            <input
              type="submit"
              className={`btn-large amber darken-2 ${styles.btn_block}`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
  }
export default Formulario;
