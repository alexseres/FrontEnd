import React, { useState, createContext } from "react";


export const HomeContext = createContext();

export const HomeContextProvider = (props) => {
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
            <HomeContext.Provider value={[toggleTheme, getTheme]}>
                {props.children}
            </HomeContext.Provider>
        </div>
    );
};