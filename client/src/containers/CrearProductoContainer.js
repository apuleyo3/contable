import React, { Fragment } from 'react';
import Formulario from '../components/ProductComponents/Formulario'
import axios from 'axios';
import { ProductClass } from '../utils/ProductClass';
import { useHistory } from 'react-router-dom';


const CrearProductoContainer = (props) => {

    const{ name, category, brand, price, description, user }= props;

    const URL = `http://45.55.54.86:5000/api/v1/productos?key=CoNtable2020&name=${name}&category_id=${category}&user_id=${user}&price=${price}&description=${description}&brand_id=${brand}`
    const history = useHistory();

    const createProduct = (name, category, brand, price, description, user, id) => {
        const newProduct = new ProductClass(name, category, brand, price, description, user, id);
        axios.post(URL, newProduct.id)
        .then(()=>history.push('/Productos'))
        .catch((error)=>alert(error))
    }
    return (
        <Fragment>
            <div>
                <Formulario createProduct={createProduct} />
            </div>
        </Fragment>
    )
}

export default CrearProductoContainer
