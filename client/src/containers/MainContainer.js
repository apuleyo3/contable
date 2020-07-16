import React, { useContext } from 'react'
import Formulario from '../components/ProductComponents/Formulario';
import ProductCard from '../components/ProductComponents/ProductCard';
import SearchInput from '../components/ProductComponents/SearchInput';
import { mainContext } from '../contexts/MainContext';

const Main = () => {

    const MainContext = useContext(mainContext);
    const { mainMenu } = MainContext;

    return (
        <div>
            { mainMenu.dashboard ? <SearchInput /> : null}
            { mainMenu.nuevoProducto ? <Formulario /> : null}
            { mainMenu.productos ? <ProductCard /> : null}
        </div>
    )
}

export default Main;
