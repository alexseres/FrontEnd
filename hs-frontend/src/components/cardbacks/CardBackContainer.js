import React from "react";
import OneBack from "./OneBack";
import { BackContextProvider } from "./BackContext";


const CardBackContainer = (props) => {

    return props.backs.map((oneCard) => (
        <BackContextProvider>
            <OneBack card={oneCard}></OneBack>
        </BackContextProvider>
        )
    )
}

export default CardBackContainer;