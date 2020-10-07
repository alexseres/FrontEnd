import React, { useState, createContext } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = (props) => {
    const [getTheme, setTheme] = useState(false);

    const toggleTheme = (event) => {
        if (getTheme) {
            setTheme(false);

            //event.target.parentNode.parentNode.style.display="initial"
            console.log("1happenning")
        } else {
            setTheme(true);
            //event.target.parentNode.parentNode.style.display = "none";
            console.log("2happenning")
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