import React, { useState } from "react";
import Error from "../error/error.component";

const Formulario = ({ setBusqueda }) => {
  const [termino, setTermino] = useState("");
  const [error, setError] = useState(false);
  
  const buscarImagenes = (e) => {
    e.preventDefault();

    // validar

    if (termino.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }

    //y después de enviar el termino de búsqueeda hacia el componente principal
    setBusqueda(termino);
  };

  return (
    <form onSubmit={buscarImagenes}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            name=""
            id=""
            className="form-control form-control-large"
            placeholder="Busca una imagen, ejemplo: Mascotas o perros"
            onChange={(e) => setTermino(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            name=""
            id=""
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>
      {error ? <Error mensaje="Agrega un término de búsqueda" /> : null}
    </form>
  );
};

export default Formulario;
