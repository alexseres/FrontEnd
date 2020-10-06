import React, { useEffect, useState } from "react";
import CardsContainer from "./CardsContainer";
import axios from "axios"


const Cards = (props) =>{
    const [getCards, setCards] = useState([]);
    const cardsUrl = `http://localhost:5555/api/list`
    
    useEffect(() => {
        axios(cardsUrl)
            .then(response => setCards(response.data));
        console.log("ok");
    }, [cardsUrl])


    console.log(getCards);
    return (
        <div className="cards-container">
            <CardsContainer cards={getCards}>{props.children}</CardsContainer>
        </div>
    )
}

export default Cards;