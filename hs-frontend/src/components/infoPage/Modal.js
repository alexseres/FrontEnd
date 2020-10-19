import {ModalContext} from "./ModalContext";
import React,{useContext} from "react";
import styled from 'styled-components';
import 'react-morphing-modal/dist/ReactMorphingModal.css';
import {useModal} from "react-morphing-modal";


let HiddenModal = styled.div`
    display: ${props => props.status ? "inherit" : "none"};
    position: inherit;
    z-index: 1;
    height: 250px;
    width: 150%;
    overflow: auto;
    margin auto;
    color: grey;
    padding-top:100px;
    overflow: auto;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`



const CardDetailsModal = props => {
    const {modalProps, getTriggerProps} = useModal();
    const [toggleTheme, getTheme] = useContext(ModalContext);
    const a = () => {
        console.log(HiddenModal.componentStyle.rules[1])
    }
   
    const handleChange = () => {
        toggleTheme();
    }
    
    return (
        <HiddenModal className="my-modal" status={getTheme} onClick={handleChange}>
            <div className="modal-content">
                <Close className="close">&times;</Close>
                {props["values"].map(value => (<p>{value}</p>))}
            </div>
        </HiddenModal>
    );
    
    
}

const Close = styled.span`
    color: #aaaaaa;
    float: left;
    font-size: 28px;
    font-weight:bold;
    &click{
          color: #000;
          text-decoration: none;
          cursor: pointer;
    }
`


export default CardDetailsModal;
