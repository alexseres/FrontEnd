import React from "react";
import OneCard from "./OneCard";
import { DisplayContextProvider } from "./DisplayContext";


const OneSet = (props) => {
    return props.cardsOfTheDLC.map((oneCard) => (
        <DisplayContextProvider>
            <OneCard card={oneCard} />   
            </DisplayContextProvider>
        )
    )
};

export default OneSet;