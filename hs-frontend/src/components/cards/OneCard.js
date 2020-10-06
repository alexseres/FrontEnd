import React, { useEffect, useState } from "react"; 
import axios from "axios";

const OneCard = (props) => {

    const [getIMG, setIMG] = useState("");
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [])
    
    let content = (
        <div>
            <p>Loading</p>
        </div>
    );

    if (isLoading) {
        content = (
            <div className="card" style={cardStyle}>
                <p>Bad IMG URL</p>
            </div>
        );
    } else if (!isLoading) {
        content = (
            <div className="card" style={cardStyle}>
                <img src={props.card.img} alt="cardImage"></img>
            </div>
        );
    }

    return content;
};

export const cardStyle = {
    transition: "0.3s",
    width: "320px",
    textAlign: "center",
    marginBottom: "10px",
    marginLeft: "10px",
    marginRight: "10px",
    margin: "0 auto",
};

export default OneCard;