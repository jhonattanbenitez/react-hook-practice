import React, { useContext } from "react";
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {
  const { categorias } = useContext(CategoriasContext);
  console.log(categorias);

  return (
    <form className="col-12">
      <fieldset className="text-center">
        <legend>Busca bebida por categorías o ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="busca por ingrediente "
          />
        </div>
        <div className="col-md-4">
          <select className="form-control" name="categoria">
            <option value="">--Selecciona categoría--</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            value="Buscar bebidas"
            className="btn btn-primary btn-block"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
