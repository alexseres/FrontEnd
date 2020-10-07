import React, { useEffect, useState, useContext } from "react"; 
import defaultImg from "../images/defaultCardIMG.png";
import Modal from "./CardDetailsModal";
import { DisplayContext } from "./DisplayContext";

const OneCard = (props) => {

    const [isLoading, setLoading] = useState(true);

    const [toggleTheme, getTheme] = useContext(DisplayContext);

    useEffect(() => {
        setLoading(false);
    }, [])

    const handleDefaultIMG = event => {
        event.target.src = defaultImg;
        event.target.style = defCardIMGStyle;
    }


    const handleCardClick = event => {
        event.target.src = props.card.imgGold;
        toggleTheme();
    }

    let content = (
        <div>
            <p>Loading</p>
        </div>
    );


    if (isLoading) {
        content = (
            <div className="card" style={cardStyle}>
                <p>Loading...</p>
            </div>
        );
    } else if (!isLoading) {
        content = (
                <div className="card" style={cardStyle} onClick={handleCardClick}>
                <img src={props.card.img} onError={handleDefaultIMG} alt="cardImage"></img>
                <Modal details={props.card} />
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