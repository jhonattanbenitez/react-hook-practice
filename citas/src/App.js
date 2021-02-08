import React, {Fragment, useState} from "react";
import Formulario from './components/Formulario';

function App() {
  //Arreglo de citas 
  const [citas, guardarCitas] = useState([]); 

  //función que modifique las citas actuales y agregue una nueva

  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita      
    ]);
  }
   
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
       <div className="container">
         <div className="row">
           <div className="one-half column"> 
           <Formulario
            crearCita={crearCita}
           />
           </div> 
           <div className="one-half column"> 
           
           </div> 

         </div>

       </div>
    </Fragment>
  );
}

export default App;
