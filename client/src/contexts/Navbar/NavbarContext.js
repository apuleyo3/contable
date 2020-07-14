import React, { useState, createContext, useRef } from 'react';

export const navbarContext = createContext();

const NavbarContext = (props) => {

    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    const calcHeight = e => {
        setMenuHeight(e.offsetHeight);
    }

    return (
        <navbarContext.Provider
            value={{
                activeMenu,
                menuHeight,
                dropdownRef,
                setActiveMenu,
                setMenuHeight,
                calcHeight
            }}
        >
            {props.children}
        </navbarContext.Provider>
    );
}

export default NavbarContext;