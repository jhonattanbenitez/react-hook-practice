import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/formulario/formulario.component";
import Informacion from './components/informacion/informacion.component';
import axios from 'axios';
import Cancion from './components/cancion/cancion.component';

function App() {
  //definir el state

  const [searchlyric, setSearchlyric] = useState({});
  const [lyric, setLyric] = useState('')
  const [informacion, setInformacion] = useState({})

  useEffect(() => {
    if (Object.keys(searchlyric).length === 0) return;

    const consultarAPI_lyrics = async () => {
      const {artista, cancion} = searchlyric; 
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const urlArtista = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([
        axios(url),
        axios(urlArtista)
      ])
      console.log(informacion.data.artists[0])
      setInformacion(informacion.data.artists[0]);
      setLyric(letra.data.lyrics);
    
     

    };
    consultarAPI_lyrics();
  }, [searchlyric, informacion]);

  return (
    <Fragment>
      <Formulario setSearchlyric={setSearchlyric} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6"><Informacion informacion={informacion}/></div>
          <div className="col-md-6"><Cancion lyric={lyric} /></div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
