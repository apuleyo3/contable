import React from 'react'

const Formulario = () => {
    return (
        <div className="container p-2 col-sm-6">
            <div className="card">
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFfor="name">Nombre del producto</label>
                        <input type="text" className="form-control" id="name" placeholder="Cama" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tags">Tags</label>
                        <input type="text" className="form-control" id="tags" placeholder="Dormitorio, cama, dormir,... " />
                    </div>
                    <div className="form-group">
                        <label htmlFor="brand">Marca</label>
                        <select class="custom-select" id="brand">
                            <option selected>Salecciona una marca</option>
                            <option value="1">Tamayo</option>
                            <option value="2">&Tradition</option>
                            <option value="3">ALKI</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Categoría</label>
                        <select class="custom-select" id="category">
                            <option selected>Salecciona una marca</option>
                            <option value="1">Categoría 1</option>
                            <option value="2">Categoría 2</option>
                            <option value="3">Categoría 2</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Precio</label>
                        <input type="number" className="form-control" id="number" placeholder="$6,000.00" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Descripción</label>
                        <textarea class="form-control" id="description" rows="3"></textarea>
                    </div>
                    <button className="btn btn-secondary">Cargar imagen</button>
                    <br/>
                    <br/>
                    <button className="btn btn-primary mx-auto">Agregar producto</button>
                </div>
            </div>
        </div>
    )
}

export default Formulario;
