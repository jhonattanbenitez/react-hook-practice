import React from 'react';
import Pregunta from './components/Pregunta';
function App() {
  return (
    <header className="container">
      <h1>Gasto Semanal</h1>
      <div className="contenido-principal">
        <Pregunta />  

      </div>
    </header>
  );
}

export default App;
