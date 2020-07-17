import React, { useContext } from 'react'
// import Formulario from '../components/ProductComponents/Formulario';
import CrearProductoContainer from './CrearProductoContainer'
import SearchInput from '../components/ProductComponents/SearchInput';
import { mainContext } from '../contexts/MainContext';
import Productos from './Productos'

const Main = () => {

    const MainContext = useContext(mainContext);
    const { mainMenu } = MainContext;

    return (
        <div>
            { mainMenu.dashboard ? <SearchInput /> : null}
            { mainMenu.nuevoProducto ? <CrearProductoContainer /> : null}
            { mainMenu.productos ? <Productos /> : null}
        </div>
    )
}

export default Main;
