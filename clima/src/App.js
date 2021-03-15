import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/header/header.component";
import Formulario from "./components/formulario/formulario.component";
import Clima from "./components/clima/clima.component.jsx";
import Error from "./components/error/error.component";

function App() {
  //state del formulario

  const [search, setSearch] = useState({
    ciudad: "",
    pais: "",
  });
  const [query, setQuery] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);
  const { ciudad, pais } = search;
  useEffect(() => {
    const consultarAPI = async () => {
      if (query) {
        const appId = "4afaed396c8883f8001c5fcb220120fe";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResult(resultado);
        setQuery(false);
        //Dectecta si hubo resultaedos correctos en la consulta
        if (result.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    consultarAPI();
  }, [query]);

  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultados" />;
  } else {
    componente = <Clima result={result} />;
  }

  return (
    <Fragment>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                search={search}
                setSearch={setSearch}
                setQuery={setQuery}
              />
            </div>
            <div className="col m6 s12">
               {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
