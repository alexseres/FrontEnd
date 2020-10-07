import React, { useState, createContext } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = (props) => {
    const [getTheme, setTheme] = useState(false);

    const toggleTheme = () => {
        if (getTheme) {
            setTheme(false);
            console.log("working")
        } else {
            setTheme(true);
        }
    };

    return (
       <div>
            <ModalContext.Provider value={[toggleTheme, getTheme]}>
                {props.children}
            </ModalContext.Provider>
       </div>    

    );
};