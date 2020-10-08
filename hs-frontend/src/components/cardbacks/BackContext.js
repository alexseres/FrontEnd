import React, { useState, createContext } from "react";

export const BackContext = createContext();

export const BackContextProvider = (props) => {
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
            <BackContext.Provider value={[toggleTheme, getTheme]}>
                {props.children}
            </BackContext.Provider>
        </div>
    );
};