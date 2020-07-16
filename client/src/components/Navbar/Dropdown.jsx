import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Conectext for DropDown menu
import { navbarContext } from '../../contexts/NavbarContext';
import { mainContext } from '../../contexts/MainContext';
// Import DropdownSub from sub-menus of dropdown
import DropdownSub from "./DropdownSub";
// Import DropdownItem for sub-items of dropdown
import DropdownItem from "./DropdownItem";

const Dropdown = () => {

    const NavbarContext = useContext(navbarContext);
    const {menuHeight,dropdownRef} = NavbarContext;

    const MainContext = useContext(mainContext);
    const { mainMenu, setMainMenu } = MainContext;

    const setMainDashboard = (e) => {
        e.preventDefault();
        setMainMenu({ 
            dashboard: true,
            nuevoProducto: false,
            productos: false
        });
    }
    const setMainNuevoProductos = (e) => {
        e.preventDefault();
        setMainMenu({ 
            dashboard: false,
            nuevoProducto: true,
            productos: false
        });
    }
    const setMainProductos = (e) => {
        e.preventDefault();
        setMainMenu({ 
            dashboard: false,
            nuevoProducto: false,
            productos: true
        });
    }
    return (
        <div
            className="dropdown"
            style={{ height: menuHeight }}
            ref={dropdownRef}
        >
            <DropdownSub menu={'main'} type={'primary'} >

                <span onClick={setMainDashboard}>
                <DropdownItem
                    leftIcon={"fas fa-tachometer-alt"}>
                Dashboard
                </DropdownItem></span>

                <span onClick={setMainNuevoProductos}>
                <DropdownItem leftIcon={'fas fa-plus'} goToMenu="main">
                    Nuevo Producto
                </DropdownItem></span>

                <span onClick={setMainProductos}>
                <DropdownItem leftIcon={"fa fa-cubes"} goToMenu="productos">
                    Productos
                </DropdownItem></span>

                <DropdownItem leftIcon={"fas fa-toggle-off"} goToMenu="main">
                <Link to='/'>Cerrar Sesión</Link>
                </DropdownItem>
            </DropdownSub>

            <DropdownSub menu={'productos'} type={'secondary'} >
                <DropdownItem goToMenu="main" leftIcon={"fas fa-arrow-left"}>
                    Regresar
                </DropdownItem>
                <DropdownItem leftIcon={"fas fa-book-open"}>Categorías</DropdownItem>
                <DropdownItem leftIcon={"fas fa-industry"}>Marcas</DropdownItem>
            </DropdownSub>


        
        </div>
    );
}

export default Dropdown;