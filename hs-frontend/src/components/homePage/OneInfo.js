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

        animation: ${getTheme ? "rotate-keyframes 0.3s linear 0s 1 forwards" : "rotate-back 0.3s linear 0s 1 forwards"};

        @keyframes rotate-keyframes {
            from {
             transform: rotate(0deg);
            }
           
            to {
             transform: rotate(180deg);
            }
        }

        @keyframes rotate-back {
            from {
                transform: rotate(180deg);
               }
              
               to {
                transform: rotate(360deg);
               }
        }

        `

    const OuterDiv = styled.div`
        background: black;
        border: 2px solid black;
        border-radius: 3px;
        margin-bottom: 20px;
        opacity: ${getTheme ? "95%" : "75%"};
        :hover {
            opacity: 100%;
        }
        `

    const StyledH2 = styled.h2`
        font-weight: bold;
        width: 111px;
        margin: 20px;
        margin-top: 35px;
        border-bottom: ${getTheme ? "3px solid wheat" : "none"};
        `
    const ContainerDiv = styled.div`
        display: flex;
        background-color: black;
        color: white;
        margin-bottom: 20px;
        margin-top: 20px;
        `


    return (
        <OuterDiv className="InfoWithModal-Div">
            <ContainerDiv className="headerWithArrow" onClick={handleClick}>
            <StyledH2>{props.info.name}</StyledH2>
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
    left: 75%;
    margin-top: 30px;
    padding-top: 6px;
`

 export default OneInfo;