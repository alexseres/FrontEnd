import React, { useEffect, useState, useContext } from "react";
import { BackContext } from "./BackContext";
import Modal from "./CardBackModal";

const OneBack = (props) => {

    const [isLoading, setLoading] = useState(true);

    const [toggleTheme, getTheme] = useContext(BackContext);

    useEffect(() => {
        setLoading(false);
    }, [])


    const handleCardClick = event => {
        toggleTheme();
    }



    let content = (
        <div>
            <p>Loading</p>
        </div>
    );

    if (isLoading) {
        content = (
            <div className="card">
                <p>Loading...</p>
            </div>
        );
    } else if (!isLoading) {
        content = (
                <div className="card" style={cardStyle} onClick={handleCardClick}>
                <img src={props.card.imgAnimated} onError={props.card.img} alt="Card Back"></img>
                <Modal details={props.card} />
                </div>
        );
    }


    return content;
}



const cardStyle = {
    transition: "0.3s",
    width: "320px",
    textAlign: "center",
    marginBottom: "10px",
    marginLeft: "10px",
    marginRight: "10px",
    margin: "0 auto",
};


export default OneBack;