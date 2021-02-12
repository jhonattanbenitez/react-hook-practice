import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  // definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setMostrarpregunta] = useState(true);
  const [gastos, setgastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [creargasto, setCrearGasto] = useState(false);


  //useEffect que actualiza el restante

  useEffect(() => {
    if (creargasto) {
      //agrega el nuevo presupuesto
      setgastos([...gastos, gasto]);
      //resetear a false
      setCrearGasto(false);
      //resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
    }
  }, [gasto, gastos, creargasto, restante]);

  return (
    <header className="container">
      <h1>Gasto Semanal</h1>
      <div className="contenido-principal">
        {mostrarpregunta ? (
          <Pregunta
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
            setMostrarpregunta={setMostrarpregunta}
          />
        ) : (
        
          <div className="row">
            <div className="one-half column">
              <Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} />
            </div>
            <div className="one-half column">
              <Listado gastos={gastos}  />
              <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>
        )}
        {
          console.log(presupuesto, restante)
          
        }
      </div>
    </header>
  );
}

export default App;
