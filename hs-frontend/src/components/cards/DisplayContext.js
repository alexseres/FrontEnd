import React, { useState, createContext } from "react";

export const DisplayContext = createContext();

export const DisplayContextProvider = (props) => {
    const [getTheme, setTheme] = useState(false);

    const toggleTheme = () => {
        if (getTheme) {
            setTheme(false);
        } else {
            setTheme(true);
        }
    };

    return (
        <div>
            <DisplayContext.Provider value={[toggleTheme, getTheme]}>
                {props.children}
            </DisplayContext.Provider>
        </div>
    );
};