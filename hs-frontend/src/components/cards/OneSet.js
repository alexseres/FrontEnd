import React from "react";
import OneCard from "./OneCard";

const OneSet = (props) => {
    return props.cardsOfTheDLC.map((oneCard) => (
        <OneCard card={oneCard} />   
        )
    )
};

export default OneSet;