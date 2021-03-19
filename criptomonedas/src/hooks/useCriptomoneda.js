import React, { Fragment, useState } from "react";
import { Label, Select } from "./useMoneda.styled";

const useCriptomoneda = (label, stateInicial, opciones) => {
  //State  custom hook
  const [state, setState] = useState(stateInicial);
 /* 
  const imgCripto = opciones.map((opcion) =>(opcion.CoinInfo.ImageUrl));

  const imgUrl = `https://www.cryptocompare.com${imgCripto}`

  console.log(imgUrl); */

  const SelectCripto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">-Seleccione criptomoneda-</option>
        {opciones.map((opcion) => (
          <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
            {opcion.CoinInfo.FullName}
          </option>
        ))}
      </Select>
      
    </Fragment>
  );

  //retornar state, parte del interfzas y fn que modifica el statwe
  return [state, SelectCripto, setState];
};

export default useCriptomoneda;
