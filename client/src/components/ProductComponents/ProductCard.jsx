import React, { Fragment } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios'
//Imagen de producto
import productImg from "../../assets/mueble.jpg";
//Estilos
import {
  CardContainer,
} from "../../layout/Card/Card.style";


const ProductCard = (props) => {

  const history = useHistory();
  const { name, brand, category, price, description, id } = props;

  const deleteCard = async () => {
    const URL = `http://45.55.54.86:5000/api/v1/productos?key=CoNtable2020&id=${id}`;
    await axios
      .delete(URL)
      .then((res) => {
        alert('Se ha eliminado el producto')
        history.push('/dashboard')
      })
      .catch((error) => alert(error));
  };

  return (
    <CardContainer>
      <div className="cardContainerC col col-sm-6 col-md-4 col-lg-4">
      <div className="card p-3">
        {/* style="width: 18rem;" */}
        <img className="card-img-top" src={productImg} alt="imagen" />
        <div className="card-body">
          <h5 className="card-title" id={name}>
            Nombre: {name}
          </h5>
          <p className="card-text" id={description}>
            {description}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" id={brand}>
            Marca: {brand}
          </li>
          <li className="list-group-item" id={category}>
            {category}
          </li>
          <li className="list-group-item" id={price}>
            Precio: {price}
          </li>
        </ul>
        <button className="btn btn-danger mx-auto mt-3 mb-3" onClick={() => deleteCard()}>Eliminar</button>
        {/*<div className="card-body"></div>*/}
      </div>
      </div>  
    </CardContainer>
  );
};
export default ProductCard;
