import React from "react";
import Button from "./formulario.styled";
import useMoneda from '../../hooks/useMoneda';

const Formulario = () => {

  const MONEDAS = [
    {
      codigo: 'USD', nombre: 'Dolar Estadounidense'
    },
    {
      codigo: 'COP', nombre: 'Peso Colombiano'
    },
    {
      codigo: 'EUR', nombre: 'Euros'
    }, {
      codigo: 'GBP', nombre: 'Libra Esterlina'
    },
    {
      codigo: 'VES', nombre: 'Bolivares Venezolanos'
    }

  ]

  //utilizar use moneda

  const [moneda, SelectMonedas, updateState] = useMoneda('Elige tu moneda', '', MONEDAS);
  return (
    <form>
      <SelectMonedas />
      <Button type="submit" value="Calcular">Calcular</Button>
    </form>
  );
};

export default Formulario;
