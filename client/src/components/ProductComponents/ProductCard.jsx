import React, { Fragment } from "react";

//Imagen de producto
import productImg from "../../assets/mueble.jpg";

const ProductCard = (props) => {
  const { name, brand, category, price, description } = props;
  return (
    <Fragment>
      <div className="container p-2 col-sm-5">
        <div className="card">
          {/* style="width: 18rem;" */}
          <img className="card-img-top" src={productImg} alt="imagen" />
          <div className="card-body">
            <h5 className="card-title" id={name}>
              Armario
            </h5>
            <p className="card-text" id={description}>
              Armario, efecto roble tinte blanco, 175x58x236cm
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item" id={brand}>
              Marca: PAX
            </li>
            <li className="list-group-item" id={category}>
              Categoría: Armarios
            </li>
            <li className="list-group-item" id={price}>
              Precio: $8,500.00
            </li>
          </ul>
          <button className="btn btn-danger mx-auto mt-3 mb-3">Eliminar</button>
          {/*<div className="card-body"></div>*/}
        </div>
      </div>
    </Fragment>
  );
};
export default ProductCard;
