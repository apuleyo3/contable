import React from 'react'

const ProductCard = (props) => {
    const { name, tags, brand, category, price, description } = props;
    return (
        <div className="card">{/* style="width: 18rem;" */}
             <img className="card-img-top" src=".../100px180/?text=Image cap" alt="imagen" />
            <div className="card-body">
                <h5 className="card-title" id ={name}>Card name</h5>
                <p className="card-text" id={description}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" id={brand}>Marca</li>
                <li className="list-group-item" id={tags}>Tags</li>
                <li className="list-group-item"id={category}>Categoría</li>
                <li className="list-group-item"id={price}>Precio</li>
            </ul>
            <div className="card-body">
        
            </div>
            
         
        </div>
    )
}

export default ProductCard;
