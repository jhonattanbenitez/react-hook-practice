import React, {Fragment, useState} from 'react';

const Pregunta = () => {
    //definir el state

    return (  
        <Fragment>
            <h2>Introduce tu presupuesto</h2>
            <form>
                <input 
                type="number"
                className="u-full-width"/>
                <input 
                type="submit"
                className="button-primary u-full-width"
                value="Definir presupuesto"
                
                />
            </form>

        </Fragment>
    );
}
 
export default Pregunta;
