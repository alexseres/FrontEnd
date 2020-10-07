import React, { useContext } from "react"
import { BackContext } from "./BackContext";
import Scroll from "../images/ScrollModal.png";
import styled from "styled-components";


const CardBackModal = props => {

    const [toggleTheme, getTheme] = useContext(BackContext);

    const HiddenModal = styled.div`
        display: ${getTheme ? "inherit" : "none"};
        position: inherit;
        z-index: 1;
        width: 100%;
        height: 202px;
        overflow: auto;
        background-image: url(${Scroll});
        background-size: 318px 201px;
        background-repeat: no-repeat;
        color: black;
        font-weight: 700;
    `
    const StyledP = styled.p`
        width: 280px;
        margin-left: 15px;

`
    const detailsDivStyle = styled.div`
        height: 187px;
        position: inherit;
        overflow: auto;

`


    return (
        <HiddenModal className="modal-content" onClick={toggleTheme}>
            <div className="background-div">
                <div className="details">
                <StyledP>Name: {props.details.name}</StyledP>
                <StyledP>Description: {props.details.description}</StyledP>
                <StyledP>Source: {props.details.source}</StyledP>
                <StyledP>How to get: {props.details.howToGet}</StyledP>
                </div>
            </div>
        </HiddenModal>
    );
}


export default CardBackModal;