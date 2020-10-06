import React, { useEffect, useState } from "react";
import OneSet from "./OneSet";

const CardsContainer = (props) => {

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        var test = props.cards["Classic"];
    }, [props.cards])

    let content = (
        <div>
            <p>Loading...</p>
        </div>
    );

    if (!isLoading && props.cards["Classic"]) {
        var cardSets = {
            "datas": [
                { name: "Classic", data: props.cards["Classic"] },
                { name: "Naxxramas", data: props.cards["Naxxramas"] },
                { name: "Hall of Fame", data: props.cards["Hall of Fame"] },
                { name: "Descent of Dragons", data: props.cards["Descent of Dragons"] },
                { name: "Galakrond's Awakening", data: props.cards["Galakrond's Awakening"] },
                { name: "Ashes of Outland", data: props.cards["Ashes of Outland"] },
                { name: "Scholomance Academy", data: props.cards["Scholomance Academy"]}
            ]
        }

        console.log(cardSets.datas[2][8]);

        content = (
            cardSets.datas.map((oneDLC) => (
                <div key={oneDLC.name} className="oneSetOfCards" style={containerStyle}>
                    <h1>{oneDLC.name}</h1>
                    <OneSet cardsOfTheDLC={oneDLC.data}></OneSet>
                </div>
                ))
        );

    }

    return content;
};

const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "20px",
};

export default CardsContainer;