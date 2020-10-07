import React, { useEffect, useState } from "react"; 
import defaultImg from "../images/defaultCardIMG.png";

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


    const handleDefaultIMG = event => {
        event.target.src = defaultImg;
        event.target.style = defCardIMGStyle;
    }

    if (isLoading) {
        content = (
            <div className="card" style={cardStyle}>
                <p>Bad IMG URL</p>
            </div>
        );
    } else if (!isLoading) {
        content = (
            <div className="card" style={cardStyle}>
                <img src={props.card.img} onError={handleDefaultIMG} alt="cardImage"></img>
            </div>
        );
    }

    return content;
};

const cardStyle = {
    transition: "0.3s",
    width: "320px",
    textAlign: "center",
    marginBottom: "10px",
    marginLeft: "10px",
    marginRight: "10px",
    margin: "0 auto",
};

const defCardIMGStyle = `
    width: 280px;
    height: 392px;
    padding-top: 50px;
`

export default OneCard;