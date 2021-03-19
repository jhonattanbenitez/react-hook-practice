import React, { useState, useEffect } from "react";
import { Contenedor, Heading } from "./app.styled";

import Formulario from "./components/formulario/formulario.component";
import axios from "axios";
import Cotizacion from "./components/cotizacion/cotizacion.component";

function App() {
  //State
  const [moneda, setMoneda] = useState("");
  const [criptomoneda, setCriptomoneda] = useState("");
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      //previene la ejecución la primera vez
      if (moneda === "") return;
      //consultar API
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);
      setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
    };
    cotizarCriptomoneda();
  }, [moneda, criptomoneda]);
  return (
    <Contenedor>
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
      </div>
      <div>
        <Formulario setMoneda={setMoneda} setCriptomoneda={setCriptomoneda} />
      </div>
      <div>
        <Cotizacion resultado={resultado} />
      </div>
    </Contenedor>
  );
}

export default App;
