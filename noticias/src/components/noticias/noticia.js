import React from "react";
import PropTypes from "prop-types";

import { Contenedor, Encabezado, Fuente } from "./noticia.styles";
const Noticia = ({ noticia }) => {
  //extraer los datos

  const { urlToImage, url, title, description, source, author } = noticia;

  return (
    <Contenedor>
      <div className="col s12 m6 l4">
        <div className="card">
          <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{author}</span>
          </div>
          <div className="card-content">
            <Encabezado>{title}</Encabezado>
            <p>{description}</p>
            <Fuente>Fuente: {source.name}</Fuente>
          </div>
          <div className="card-action">
            <a href={url}>Leer noticia</a>
          </div>
        </div>
      </div>
    </Contenedor>
  );
};

Noticia.propTypes = {
  noticia: PropTypes.object.isRequired,
};
export default Noticia;
