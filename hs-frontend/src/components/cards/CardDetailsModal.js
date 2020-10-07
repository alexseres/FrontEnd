import React, { useContext } from "react"
import { DisplayContext } from "./DisplayContext";
import Scroll from "../images/ScrollModal.png";
import styled from "styled-components";


const CardDetailsModal = props => {

    const [toggleTheme, getTheme] = useContext(DisplayContext);

    const HiddenModal = styled.div`
        display: ${getTheme ? "inherit" : "none"};
        position: inherit;
        z-index: 1;
        width: 100%;
        height: 21%;
        overflow: auto;
        background-image: url(${Scroll});
        background-size: 318px 201px;
        background-repeat: no-repeat;
        color: black;
        font-weight: 700;
    `


    return (
        <HiddenModal className="modal-content" onClick={toggleTheme}>
            <div className="details">
                <p>Card Set: {props.details.cardSet}</p>
                <p>Type: {props.details.type}</p>
                <p>Rarity: {props.details.rarity ? props.details.rarity : "Free"}</p>
                <p>Cost: {props.details.cost}</p>
                <p>Artist: {props.details.artist ? props.details.artist : " Who knows :("}</p>
                <p>Cost: {props.details.cost}</p>
                <p>Cost: {props.details.cost}</p>
                <p>Cost: {props.details.cost}</p>
            </div>
        </HiddenModal>

    );
}


export default CardDetailsModal;