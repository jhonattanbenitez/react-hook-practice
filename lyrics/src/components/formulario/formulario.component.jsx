import React, { useState } from "react";

const Formulario = ({setSearchlyric}) => {
  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });
  const [error, setError] = useState(false);

  const { artista, cancion } = busqueda;

  // función para cada input y leer su contenido

  const actualizarState = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  //consultar APIS
  const buscarInformacion = (e) => {
    e.preventDefault();
    if (artista.trim() === '' || cancion.trim() === '') {
      setError(true);
      return;
    }

    setError(false);
    //Pasar al componente principal
    setSearchlyric(busqueda)

  };

  return (
    <div className="bg-info">
     { error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
      <div className="container">
        <div className="row">
          <form
            onSubmit={buscarInformacion}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">Buscador de Lyrics</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="artista">Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre artista"
                      onChange={actualizarState}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="Cancion">Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre de la canción"
                      onChange={actualizarState}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
