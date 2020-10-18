import React, {useContext} from 'react';
import Modal from "./Modal";
import {HomeContext} from "./HomeContext";
import styled from 'styled-components';
import ToggleArrowPng from "../images/toggleArrow.png"

const OneInfo = (props) => {

    const [toggleTheme, getTheme] = useContext(HomeContext);

    const handleClick = (event) => {
        toggleTheme();
    }

    const StyledIMG = styled.img`
        height: 30px;
        width: 40px;
        transform: ${getTheme ? "rotateX(180deg)" : "none"}
        `

    const OuterDiv = styled.div`
        background: black;
        opacity: ${getTheme ? "85%" : "75%"};
    
        `

    const StyledP = styled.h2`
        font-weight: bold;
        width: 111px;
        margin: 20px;
        margin-top: 35px;
        border-bottom: ${getTheme ? "2px solid wheat" : "none"};
        `
    const ContainerDiv = styled.div`
        display: flex;
        background-color: black;
        opacity: ${getTheme ? "85%" : "75%"};
        color: white;
        margin-bottom: 20px;
        margin-top: 20px;
        `


    return (
        <OuterDiv className="InfoWithModal-Div">
            <ContainerDiv className="InfoHeader-H2 and Span" onClick={handleClick}>
            <StyledP>{props.info.name}</StyledP>
            <ToggleArrowDiv><StyledIMG src={ToggleArrowPng} alt="toggleArrow"></StyledIMG></ToggleArrowDiv>
            </ContainerDiv>
            <Modal info={props.info.data}></Modal>
        </OuterDiv>
    )
}


const ToggleArrowDiv = styled.div`
    width: 105px;
    height: 50px;
    float: right;
    position: relative;
    display: inline-block;
    margin: 25px;
    margin-left: 1200px;
    margin-top: 30px;
    padding-top: 6px;
`

 export default OneInfo;