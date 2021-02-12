import React, { useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
function App() {
  // definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setMostrarpregunta] = useState(true);

  return (
    <header className="container">
      <h1>Gasto Semanal</h1>
      <div className="contenido-principal">
        <Pregunta
          setPresupuesto={setPresupuesto}
          setRestante={setRestante}
          setMostrarpregunta={setMostrarpregunta}
        />
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </header>
  );
}

export default App;
