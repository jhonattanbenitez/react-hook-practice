import React from "react";
import { Contenedor, Imagen, Heading } from "./app.styled";
import imagen from "./cryptomonedas.png";
import Formulario from "./components/formulario/formulario.component";

function App() {
  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="imagen cripto" />
      </div>
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario />
      </div>
    </Contenedor>
  );
}

export default App;
