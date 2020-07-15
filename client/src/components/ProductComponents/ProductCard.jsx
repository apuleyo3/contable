import React from 'react'

const ProductCard = (props) => {
    const { name, tags, brand, category, price, description } = props;
    return (
        <div>
            <h1
            id={name}>nombre</h1>
            <h1 id={tags}>tags</h1>
            <h1 id={brand}>marca</h1>
            <h1 id={category}>categoria</h1>
            <h1 id={price}>precio</h1>
            <h1 id={description}>descripcion</h1>
        </div>
    )
}

export default ProductCard;
