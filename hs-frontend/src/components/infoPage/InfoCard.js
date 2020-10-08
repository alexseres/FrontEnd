import React, {useContext} from 'react'
import styled from "styled-components";
import CardDetailsModal from "./Modal"
import {ModalContext} from "./ModalContext";
import 'react-morphing-modal/dist/ReactMorphingModal.css';
import {Modal, useModal} from "react-morphing-modal";
import img from "../images/HearthStoneWallpaper.png"
import crystalImage from "../images/crystal.png"


const StyledImageDiv = styled.div`
    width:100%;
    height:100vh;
    margin:0px;
    content: url(${img});
    
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
    position:fixed;


`
const StyledTextDiv = styled.div`
      z-index:10;
      position: sticky;
      font-family: luminari;
      background-color:back;
      opacity:0.8;
      background-color: #2e2300;
      background-image: url(${"https://www.transparenttextures.com/patterns/wood-pattern.png"});
      
      padding: 3px;
      box-shadow: 0 4px 9px 0 rgba(5,5,5,5.2);
      border-radius: 4px;
      border: solid;
      margin: 2% 0% 0% 0%;
      
  
`

const StyledContainer = styled.div`
    position:static;
`

const StyledButton = styled.button`
    background: url(${crystalImage}); 
    display: block;
    margin: 0 auto;
    position: static;
    width:70px;
    height:70px;
    background-size: cover; 
 
`

const InfoCard = (props) => {
    // const [toggleTheme,getTheme] = useContext(ModalContext)
    const {modalProps, getTriggerProps} = useModal();
    const lines = Object.values(props)[0].map(
        value => (<p>{value}</p>));
    const name = (<p>{props.name} contains: </p>);
    const textDiv= (<StyledTextDiv>{name}{lines}</StyledTextDiv>)
    const wallpaper = (<StyledImageDiv/>)
    const container = (<StyledContainer >{textDiv}{wallpaper}</StyledContainer>)
    const Button = props => (
        <StyledButton {...props.getTriggerProps()}></StyledButton>
    )
    
    const handleTrigger = () => {
        getTriggerProps();
    }
    
    const content = (
        <StyledCard >
            <CardDetailsModal values={Object.values(props)[0]}/>
            <StyledText>{props.name}</StyledText>
            <div>
                <Button getTriggerProps={getTriggerProps}/>
                <Modal {...modalProps}>{container}</Modal>
            </div>
        </StyledCard>
    )
    
    return content;
}

export default  InfoCard;

const StyledText = styled.h2`
    color: gold;
    text-align:center;
    
`

const StyledCard = styled.div`
    align-content:left;
    position: static;
    padding: 2%;
    border: solid gold;
    margin: 20px;
    text-align: left;
    background-color: #2e2300;
    background-image: url(${"https://www.transparenttextures.com/patterns/wood-pattern.png"});
    box-shadow: 0 4px 8px 0 rgba(3,3,3,3.2);
    font-family: luminari;
    
    width: 60%;
    border-radius:5px;
    &hover{
            box-shadow: 0 9px 16px 0 rgba(0,0,0,0.2);
        };
    font-size: 150%;
`
