import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/header/header.component';
import Formulario from './components/formulario/formulario.component';
import ListadoNoticias from './components/listadoNoticias/listadonoticias.component';

function App() {

  // definir la categría y noticias

  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () =>{
      const API_KEY = "c4387f01f30f4e62b2a9ea8c040b7c4f";
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${API_KEY}`;

      const respueta = await fetch(url);
      const noticias = await respueta.json();

      setNoticias(noticias.articles);

    }
    consultarAPI();
  }, [categoria])

  return (
 <Fragment>
   <Header titulo={"Buscador de noticias"}/>
   <div className="container white">
     <Formulario setCategoria={setCategoria} />
     <ListadoNoticias noticias={noticias}/>
   </div>
 </Fragment>
  );
}

export default App;
