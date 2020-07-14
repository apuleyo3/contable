import React, { useContext } from 'react';
// Conectext for DropDown menu
import { navbarContext } from '../../../contexts/Navbar/NavbarContext';
// Import DropdownSub from sub-menus of dropdown
import DropdownSub from "./DropdownSub";
// Import DropdownItem for sub-items of dropdown
import DropdownItem from "./DropdownItem";

const Dropdown = () => {

    const NavbarContext = useContext(navbarContext);
    const {menuHeight,dropdownRef} = NavbarContext;

    return (
        <div
            className="dropdown"
            style={{ height: menuHeight }}
            ref={dropdownRef}
        >
            <DropdownSub menu={'main'} type={'primary'} >
                <DropdownItem leftIcon={"fas fa-tachometer-alt"}>
                    Dashboard
                </DropdownItem>
                <DropdownItem leftIcon={'fas fa-user'} goToMenu="humanos">
                    Humanos
                </DropdownItem>
                <DropdownItem leftIcon={"fa fa-user"} goToMenu="palic">
                    Palic
                </DropdownItem>
                <DropdownItem leftIcon={"fa fa-user"} goToMenu="reservas">
                    Reservas
                </DropdownItem>
                <DropdownItem leftIcon={"fa fa-user"} goToMenu="universal">
                    Universal
                </DropdownItem>
                <DropdownItem leftIcon={"fa fa-user"} goToMenu="pepin">
                    Pepin
                </DropdownItem>
                <DropdownItem leftIcon={"fa fa-user"} goToMenu="colonial">
                    La Colonial
                </DropdownItem>
                <DropdownItem leftIcon={"fa fa-user"} goToMenu="general">
                    General de Seguros
                </DropdownItem>
                <DropdownItem leftIcon={"fa fa-user"} goToMenu="mapreh">
                    MAPREH
                </DropdownItem>
            </DropdownSub>

            <DropdownSub menu={'humanos'} type={'secondary'} >
                <DropdownItem goToMenu="main" leftIcon={"fas fa-arrow-left"}>
                    Regresar
                </DropdownItem>
                {/* <DropdownItem leftIcon={"fas fa-book-open"}>Manuales</DropdownItem>
                <DropdownItem leftIcon={"fas fa-industry"}>Subestaciones</DropdownItem> */}
            </DropdownSub>

            <DropdownSub menu={'palic'} type={'secondary'} >
                <DropdownItem goToMenu="main" leftIcon={"fas fa-arrow-left"}>
                    Regresar
                </DropdownItem>
                {/* <DropdownItem leftIcon={"fas fa-book-open"}>Manuales</DropdownItem>
                <DropdownItem leftIcon={"fas fa-industry"}>Subestaciones</DropdownItem> */}
            </DropdownSub>

            <DropdownSub menu={'reservas'} type={'secondary'} >
                <DropdownItem goToMenu="main" leftIcon={"fas fa-arrow-left"}>
                    Regresar
                </DropdownItem>
                {/* <DropdownItem leftIcon={"fas fa-book-open"}>Manuales</DropdownItem>
                <DropdownItem leftIcon={"fas fa-industry"}>Subestaciones</DropdownItem> */}
            </DropdownSub>

            <DropdownSub menu={'universal'} type={'secondary'} >
                <DropdownItem goToMenu="main" leftIcon={"fas fa-arrow-left"}>
                    Regresar
                </DropdownItem>
                {/* <DropdownItem leftIcon={"fas fa-book-open"}>Manuales</DropdownItem>
                <DropdownItem leftIcon={"fas fa-industry"}>Subestaciones</DropdownItem> */}
            </DropdownSub>

            <DropdownSub menu={'pepin'} type={'secondary'} >
                <DropdownItem goToMenu="main" leftIcon={"fas fa-arrow-left"}>
                    Regresar
                </DropdownItem>
                {/* <DropdownItem leftIcon={"fas fa-book-open"}>Manuales</DropdownItem>
                <DropdownItem leftIcon={"fas fa-industry"}>Subestaciones</DropdownItem> */}
            </DropdownSub>

            <DropdownSub menu={'colonial'} type={'secondary'} >
                <DropdownItem goToMenu="main" leftIcon={"fas fa-arrow-left"}>
                    Regresar
                </DropdownItem>
                {/* <DropdownItem leftIcon={"fas fa-book-open"}>Manuales</DropdownItem>
                <DropdownItem leftIcon={"fas fa-industry"}>Subestaciones</DropdownItem> */}
            </DropdownSub>

            <DropdownSub menu={'general'} type={'secondary'} >
                <DropdownItem goToMenu="main" leftIcon={"fas fa-arrow-left"}>
                    Regresar
                </DropdownItem>
                {/* <DropdownItem leftIcon={"fas fa-book-open"}>Manuales</DropdownItem>
                <DropdownItem leftIcon={"fas fa-industry"}>Subestaciones</DropdownItem> */}
            </DropdownSub>

            <DropdownSub menu={'mapreh'} type={'secondary'} >
                <DropdownItem goToMenu="main" leftIcon={"fas fa-arrow-left"}>
                    Regresar
                </DropdownItem>
                {/* <DropdownItem leftIcon={"fas fa-book-open"}>Manuales</DropdownItem>
                <DropdownItem leftIcon={"fas fa-industry"}>Subestaciones</DropdownItem> */}
            </DropdownSub>            
        </div>
    );
}

export default Dropdown;