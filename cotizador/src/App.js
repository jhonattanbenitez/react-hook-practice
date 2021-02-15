import React, {useState} from "react";
import Header from "./components/header/Header.jsx";
import Formulario from './components/formulario/Formulario';
import Resumen from './components/resumen/Resumen';
import {Contenedor, ContenedorFormulario} from './App.styles';


function App() {
 const [resumen, setResumen] = useState({
   cotizacion: 0,
   datos: {
     marca: 'marca',
     year: '',
     plan: ''
   }


 });

 //extraer datos 
 const {datos} = resumen
  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />
      <ContenedorFormulario>
        <Formulario 
          setResumen={setResumen}
        />
      <Resumen datos={datos}/>
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
