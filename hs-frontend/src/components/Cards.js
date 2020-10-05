import React,{UseEffect, useState} from "react";
import axios from "axios"


const Cards = () =>{
    const [cards, setCards] = useState([]);
    const cardsUrl = `http://localhost:5000/api/cards`
    
    UseEffect(() => {
        axios(cardsUrl)
            .then(respond => setCards(respond)); 
        console.log("ok");
    })
    
    
    
    
    return (
        <h2>Cards</h2>
    )
}

export default Cards;