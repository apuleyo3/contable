import React, { useState } from 'react'
import NavbarContext from '../../contexts/NavbarContext';

const Formulario = (props) => {

    // Estableciendo Props
    const {createProduct }= props;

    // Definiendo useStates
    const [ name, setName ] = useState("");
    const [ brand, setBrand ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");

    // Handlers
    const nameHandler = (e) => {
        setName(e.target.value);
      };
    
    const brandHandler = (e) => {
        setBrand(e.target.value);
      };
    
    const categoryHandler = (e) => {
        setCategory(e.target.value);
      };

    const priceHandler = (e) => {
        setPrice(e.target.value);
      };

    const descriptionHandler = (e) => {
        setDescription(e.target.value);
      };
    
    // Función Submit para crear una nueva card de producto

    const submitForm = () => {
        // Validando datos en formulario
        if (name !== "" && category !== "" && brand !== "" && price !== ""&& description !== "") {
          createProduct(name, category, brand, price, description)
        } else {
          alert("Todos los campos deben llenarse");
        }
      };

    return (
      <NavbarContext>
        <div className="container p-2 col-sm-6">
            <div className="card">
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="name">Nombre del producto</label>
                        <input type="text" className="form-control" id="name" placeholder="Armario" onChange={nameHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="brand">Marca</label>
                        <select className="custom-select" id="brand" onChange={brandHandler}>
                            <option defaultValue>Salecciona una marca</option>
                            <option value="1">Tamayo</option>
                            <option value="2">&Tradition</option>
                            <option value="3">ALKI</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Categoría</label>
                        <select className="custom-select" id="category" onChange={categoryHandler}>
                            <option defaultValue>Salecciona una categoría</option>
                            <option value="1">Categoría 1</option>
                            <option value="2">Categoría 2</option>
                            <option value="3">Categoría 2</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Precio</label>
                        <input type="number" className="form-control" id="price" placeholder="$6,000.00" onChange={priceHandler}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Descripción</label>
                        <textarea className="form-control" id="description" rows="3" onChange={descriptionHandler}></textarea>
                    </div>
                    <button className="btn btn-secondary">Cargar imagen</button>
                    <br/>
                    <br/>
                    <button className="btn btn-primary mx-auto"
                            onClick={()=>submitForm()}
                    >Agregar producto</button>
                </div>
            </div>
        </div>
      </NavbarContext>
    )
}

export default Formulario;
