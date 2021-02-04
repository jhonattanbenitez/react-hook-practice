import React, {Fragment} from 'react';

const Formulario = () => {
    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            <form action="">
                <label htmlFor="">Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="nombre mascota"
                />
            </form>
        </Fragment>
      );
}
 
export default Formulario;