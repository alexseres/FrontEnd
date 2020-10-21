import React, { useState, useEffect } from "react";
import CardBackContainer from "./CardBackContainer";
import { BackContextProvider } from "./BackContext";
import axios from "axios";

const BackCards = (props) => {

    const [getBacks, setBacks] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const cardsUrl = `http://localhost:5000/cardbackAPI/backs`

    useEffect(() => {
        axios(cardsUrl)
            .then(response => setBacks(response.data.slice(0, 53)));
        console.log("ok");
        setLoading(false);
    }, [cardsUrl])


    let content = (
        <div>
            <p>Loading...</p>
        </div>
    );

    if (!isLoading && getBacks) {
        content = (
            <div className="rootOfBacks" style={containerStyle}>
                <CardBackContainer backs={getBacks}>
                    {props.children}
                </CardBackContainer>
            </div>
            );
    }

    return content;
}

const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "7px",
    paddingTop: "58px",
};

export default BackCards;