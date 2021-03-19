import React from 'react';
import {Div, Info, Precio} from './cotizacion.styled';

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    console.log(resultado)
    return ( 
    <Div>
        <Precio>El precio es: <br/> <span>{resultado.PRICE}</span></Precio>
        <Info>El precio más alto del día  es: <span>{resultado.HIGHDAY}</span></Info>
        <Info>El precio más bajo del día es: <span>{resultado.LOWDAY}</span></Info>
        <Info>Variación en las últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
        <Info>Última actualización: <span>{resultado.LASTUPDATE}</span></Info>
    </Div> );
}
 
export default Cotizacion;