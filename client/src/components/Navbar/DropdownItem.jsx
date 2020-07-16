import React, { useContext } from 'react';
// Conectext for DropDown menu
import { navbarContext } from '../../contexts/NavbarContext';

const DropdownItem = ({children, leftIcon, goToMenu }) => {

    const NavbarContext = useContext(navbarContext);
    const {setActiveMenu} = NavbarContext;

    const handleClick = e => {
        e.preventDefault();
        goToMenu && setActiveMenu(goToMenu);
    }

    return (
        <span
            href="!#"
            className="menu-item"
            onClick={handleClick}
        >
            <span className="icon-button"><i className={leftIcon}></i></span>
            {children}
        </span>
    );
}

export default DropdownItem;