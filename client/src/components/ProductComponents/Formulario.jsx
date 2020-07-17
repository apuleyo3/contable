import React, { useState } from "react";
import NavbarContext from "../../contexts/NavbarContext";

const Formulario = ({ createProduct }) => {
  // Estableciendo Props

  // Definiendo useStates

  const [product, setProduct] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    description: "",
  });

  const { name, brand, category, price, description } = product;

  // Handlers
  const changeHandler = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // Función Submit para crear una nueva card de producto

  const submitForm = () => {
    // Validando datos en formulario
    if (
      name === "" ||
      category === "" ||
      brand === "" ||
      price === "" ||
      description === ""
    ) {
      return alert("Todos los campos deben llenarse");
    }
    createProduct(name, category, brand, price, description, 1);
    alert("Producto creado");
    setProduct({
      name: "",
      brand: "",
      category: "",
      price: "",
      description: "",
    });
  };

  const brandOptions = [
    [1, "Tamayo"],
    [2, "&Tradition"],
    [3, "IKEA"],
  ];
  const categoryOptions = [
    [1, "Categoria1"],
    [2, "Categoria 2"],
    [3, "Categoria 3"],
  ];

  return (
    <NavbarContext>
      <div className="container p-2 col-sm-6">
        <div className="card">
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="name">Nombre del producto</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Armario"
                onChange={changeHandler}
                value={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="brand">Marca</label>
              <select
                className="custom-select"
                name="brand"
                onChange={changeHandler}
              >
                <option defaultValue>Salecciona una marca</option>
                {brandOptions.map((option) => (
                  <option key={option[0]} value={option[0]}>
                    {option[1]}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="category">Categoría</label>
              <select
                className="custom-select"
                name="category"
                onChange={changeHandler}
              >
                <option value="">Salecciona una categoría</option>
                {categoryOptions.map((option) => (
                  <option key={option[0]} value={option[0]}>
                    {option[1]}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="price">Precio</label>
              <input
                type="number"
                className="form-control"
                name="price"
                placeholder="$6,000.00"
                onChange={changeHandler}
                value={price}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Descripción</label>
              <textarea
                className="form-control"
                name="description"
                rows="3"
                onChange={changeHandler}
                value={description}
              ></textarea>
            </div>
            <button className="btn btn-secondary">Cargar imagen</button>
            <br />
            <br />
            <button
              className="btn btn-primary mx-auto"
              onClick={() => submitForm()}
            >
              Agregar producto
            </button>
          </div>
        </div>
      </div>
    </NavbarContext>
  );
};

export default Formulario;
