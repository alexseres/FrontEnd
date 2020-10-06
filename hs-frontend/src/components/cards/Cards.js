import React, { useEffect, useState } from "react";
import CardsContainer from "./CardsContainer";
import axios from "axios"


const Cards = (props) =>{
    const [getCards, setCards] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const cardsUrl = `http://localhost:5000/api/list`
    
    useEffect(() => {
        axios(cardsUrl)
            .then(response => setCards(response.data));
        console.log("ok");
        setLoading(false);
    }, [cardsUrl])

    let content = (
        <div>
            <p>Loading</p>
        </div>
    );

    if (isLoading) {
        content = <div>Loading...</div>;
    } else if (!isLoading && getCards) {
        content = (
            <div className="cards-container">
                <CardsContainer cards={getCards}>{props.children}</CardsContainer>
            </div>
        );
    }

    return content;
    
}

export default Cards;