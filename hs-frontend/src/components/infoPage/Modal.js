import {ModalContext} from "./ModalContext";
import React,{useContext} from "react";
import styled from 'styled-components';
import img from "../images/Hearthstone-PNG-High-Quality-Image.png"

const CardDetailsModal= props => {
    const [toggleTheme, getTheme] = useContext(ModalContext);
    

    return (
        <HiddenModal className="modal-content" onClick={toggleTheme}>
            <p>a</p>
            <p>b</p>
            <p>c</p>
        </HiddenModal>
    );
    
const HiddenModal = styled.div`
        display: ${getTheme? "inherit" : "none"};
        position: inherit;
        z-index: 1;
        width: 100%;
        height: 21%;
        overflow: auto;
        background-image: ${img};
        background-size: 320px 270px;
        color: grey;
        font-weight:700;
    `
    
}


export default CardDetailsModal;

