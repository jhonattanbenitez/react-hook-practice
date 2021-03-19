import React, { useEffect, useState } from "react";
import Button from "./formulario.styled";
import useMoneda from "../../hooks/useMoneda";
import useCriptomoneda from "../../hooks/useCriptomoneda";
import axios from "axios";
import Error from '../error/error.componente';

const Formulario = ({setMoneda, setCriptomoneda}) => {

  //state del listado de criptomonedas

  const [listacripto, setListacripto] = useState([])
  const [error, setError] = useState(false);



  const MONEDAS = [
    {
      codigo: "USD",
      nombre: "Dolar Estadounidense",
    },
    {
      codigo: "COP",
      nombre: "Peso Colombiano",
    },
    {
      codigo: "EUR",
      nombre: "Euros",
    },
    {
      codigo: "GBP",
      nombre: "Libra Esterlina",
    },
    {
      codigo: "VES",
      nombre: "Bolivares Venezolanos",
    },
  ];

  //utilizar use moneda

  const [moneda, SelectMonedas] = useMoneda(
    "Elige tu moneda",
    "",
    MONEDAS
  );

  //utilizar criptomoneda
  const [criptomoneda, SelectCripto] = useCriptomoneda(
    "Elige tu criptomonedas",
    "", listacripto
  );

  // ejecutar llamado a la api
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      setListacripto(resultado.data.Data);
    }
    consultarAPI();
    
  }, []);

  //Cuando el usuario hace submit

  const cotizarMoneda = (e) =>{
    e.preventDefault();
    if(moneda === '' || criptomoneda === ''){
      setError(true);
      return;
    }
    
    //pasar los datos al componente principal
    setError(false);
    setMoneda(moneda);
    setCriptomoneda(criptomoneda);    
  }

  return (
    <form onSubmit={cotizarMoneda}>
      {error && <Error mensaje="Todos los campos son obligatorios"/>}
      <SelectMonedas />
      <SelectCripto />
      <Button type="submit" value="Calcular">
        CALCULAR
      </Button>
    </form>
  );
};

export default Formulario;
