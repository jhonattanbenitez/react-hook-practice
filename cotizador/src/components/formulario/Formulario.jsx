import React, { useState } from "react";
import {
  obtenerDiferenciaYear,
  calcularMarca,
  obtenerPlan,
} from "../../helper";
import {
  Campo,
  Label,
  Select,
  InputRadio,
  Button,
  Error,
} from "./formulario.styles";

const Formulario = () => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState(false);

  //estraer los valores del state

  const { marca, year, plan } = datos;
  //leer los datos del formulario y colocarlos en el state

  const getInformation = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario presiona cotizar

  const cotizarSeguro = (e) => {
    e.preventDefault();
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    // Base de 200000
    let resultado = 200000;

    // obetener la diferencia de años

    const diferencia = obtenerDiferenciaYear(year);

    //por cada año hay que sumar el 3%
    resultado += (diferencia * 3 * resultado) / 100;
    console.log(resultado);
    //americano 15%
    //Asiático 5%
    //Europeo 30%
    resultado = calcularMarca(marca) * resultado;

    console.log(resultado);

    //Básico aumenta 20%
    //Completo 50&

    const incrmentoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrmentoPlan * resultado).toFixed(2);
    console.log(resultado);
    //Total
  };

  return (
    <form onSubmit={cotizarSeguro}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Campo>
        <Label>Marca: </Label>
        <Select name="marca" value={marca} id="" onChange={getInformation}>
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiático</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año: </Label>
        <Select name="year" value={year} id="" onChange={getInformation}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label htmlFor="plan">Plan: </Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={getInformation}
        />
        Básico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={getInformation}
        />
        Completo
      </Campo>
      <Button type="submit">Cotizar</Button>
    </form>
  );
};

export default Formulario;
