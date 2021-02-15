import React from "react";
import Header from "./components/header/Header.jsx";
import Formulario from './components/formulario/Formulario';
import {Contenedor, ContenedorFormulario} from './App.styles';


function App() {
  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />
      <ContenedorFormulario>
        <Formulario />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
