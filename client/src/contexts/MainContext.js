import React, { createContext, useState } from 'react';

export const mainContext = createContext();

const MainContext = ({ children }) => {

    const [mainMenu, setMainMenu] = useState({
        dashboard: true,
        nuevoProducto: false,
        productos: false
    });

    return (
        <mainContext.Provider
            value={{
                mainMenu: mainMenu,
                setMainMenu: setMainMenu
            }}
        >
            {children}
        </mainContext.Provider>
    )
}

export default MainContext;
