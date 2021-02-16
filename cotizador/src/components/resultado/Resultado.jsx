import React from "react";
import { P, ResultadoCotizacion, TextoCotizacion } from "./resultado.styles";

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <P>Elige marca, año y tipo de seguro</P>
  ) : (
    <ResultadoCotizacion>
      <TextoCotizacion>El total es: ${cotizacion}</TextoCotizacion>
    </ResultadoCotizacion>
  );
};

export default Resultado;
