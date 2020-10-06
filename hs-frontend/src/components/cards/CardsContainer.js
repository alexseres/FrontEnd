import React, { useEffect, useState } from "react";

const CardsContainer = (props) => {

    const [isLoading, setLoading] = useState(true);

    const [getClassic, setClassic] = useState([]);
    const [getHallOfFame, setHallOfFame] = useState([]);
    const [getNaxx, setNaxx] = useState([]);
    const [getDragons, setDragons] = useState([]);
    const [getGalakrond, setGalakrond] = useState([]);
    const [getAshes, setAshes] = useState([]);
    const [getAcademy, setAcademy] = useState([]);

    useEffect(() => {
        setClassic(props.cards.Classic);
        setNaxx(props.cards.Naxxramas);
        setLoading(false);
    }, [props.cards.Classic, props.cards.Naxxramas])

    let content = (
        <div>
            <p>Loading</p>
        </div>
    );

    if (isLoading) {
        content = <div>Loading...</div>;
    } else if (!isLoading && getClassic) {
        content = (
            <div>Not Loading</div>
        );
        var properties = { Classic: getClassic, Naxx: getNaxx }

        console.log(props.cards.Classic[2]);
    }

    return content;
};

export default CardsContainer;