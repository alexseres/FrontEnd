import React, {useContext} from 'react'
import styled from "styled-components";
import CardDetailsModal from "./Modal"
import {ModalContext} from "./ModalContext";

let a = 0;
const InfoCard = (props) => {
    const [toggleTheme,getTheme] = useContext(ModalContext)
    
    return (
        <StyledCard>
            <CardDetailsModal values={Object.values(props)[0]}/>
            <p>{props.name}</p>
            <button onClick={toggleTheme}>push</button>
        </StyledCard>
    )
}



export default  InfoCard;



const StyledCard = styled.div`
    height:50px;
    position: static;
    padding: 3%;
    border: solid;
    margin: 1% auto;
    background-color:aqua;
    // background-size:cover;
    box-shadow: 0 4px 8px 0 rgba(3,3,3,3.2);
    // transition: 0.3s;
    width: 40%;
    border-radius:5px;
    &hover{
            box-shadow: 0 9px 16px 0 rgba(0,0,0,0.2);
        };
    font-size: 100%;
`
