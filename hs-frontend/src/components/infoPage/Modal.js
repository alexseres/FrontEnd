import {ModalContext} from "./ModalContext";
import React,{useContext} from "react";
import styled from 'styled-components';
import img from "../images/Hearthstone-PNG-High-Quality-Image.png"
import Modal from "styled-react-modal"


        
// let getTheme;
// let toggleTheme;

//display: ${props => props.status ? "inherit" : "none"};
//display: ${props => props.status ? "initial" : "none"};

//  display: ${props => props.status} ? "initial" : "none"};
const aaa = () => {
    alert("aaaa")
}



let HiddenModal = styled.div`
    display: ${props => props.status ? "inherit" : "none"};
    position: inherit;
    z-index: 1;
    width: 100%;
    height: 21%;
    overflow: auto;
    width: 100%;
    height:100%;
    background-image: ${img};
    background-size: 320px 270px;
    background: green;
    color: grey;
    font-weight:700;
`


const CardDetailsModal = props => {

    const [toggleTheme, getTheme] = useContext(ModalContext);
    const a = () => {
        console.log(HiddenModal.componentStyle.rules[1])
    }
   
    const handleChange = () => {
        a();
        toggleTheme();
    }
    
    return (
        <HiddenModal className="modal-content" status={getTheme} onClick={handleChange}>
           
            <div className="details">
                {props["values"].map(value => (<p>{value}</p>))}
            </div>    
            <div>
                
            </div>
        </HiddenModal>
    );
    
    
}


export default CardDetailsModal;
