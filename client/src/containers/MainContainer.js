import React from 'react'
import Formulario from '../components/ProductComponents/Formulario';
import ProductCard from '../components/ProductComponents/ProductCard';
import SearchInput from '../components/ProductComponents/SearchInput';

const Main = () => {
    return (
        <div>
            <SearchInput />
            <Formulario />
            <ProductCard />
        </div>
    )
}

export default Main;
