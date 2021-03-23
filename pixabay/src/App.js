import React,{useState, useEffect} from "react";
import Formulario from "./components/formulario/formulario.component";
function App() {

  // State de la app
const [busqueda, setBusqueda] = useState('');

useEffect(() => {
 const consultarAPI = async () => {
  if(busqueda === '') return;

  const imagenesPorPagina =30;
  const key = '20825233-4b166244767b0edfb40f5f9d4';
  const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;
 
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();

  console.log(resultado);
 }
 consultarAPI();

}, [busqueda])

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>
        <Formulario
        setBusqueda={setBusqueda}/>
      </div>
    </div>
  );
}

export default App;
