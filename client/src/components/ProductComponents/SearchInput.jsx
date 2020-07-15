import React from 'react'

const SearchInput = () => {
    return (
        <div className="input-group input-group-lg mt-3 mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">Buscar mueble...</span>
            </div>
            <input type="text" className="form-control"/>
        </div>
    )
}

export default SearchInput
