import React, { Fragment } from 'react';
import Formulario from '../components/ProductComponents/Formulario'
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const CrearProductoContainer = () => {
    
    const history = useHistory();

    const createProduct = async(name, category, brand, price, description, user) => {
        const URL = `http://45.55.54.86:5000/api/v1/productos?key=CoNtable2020&name=${name}&category_id=${category}&user_id=${user}&price=${price}&description=${description}&brand_id=${brand}`
        await axios.post(URL)
        .then(()=>history.push('/dashboard'))
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
