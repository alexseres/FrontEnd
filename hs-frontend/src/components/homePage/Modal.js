import React, {useContext} from 'react';
import styled from "styled-components";
import {HomeContext} from "./HomeContext";
import Scroll from "../images/homePageScroll.jpg";




const Modal = (props) => {

    const [toggleTheme, getTheme] = useContext(HomeContext);

    const ModalDiv = styled.div`
      display: ${getTheme ? "inherit" : "none"};
      position: inherit;
      z-index: 1;
      width: 100%;
      height: 497px;
      background-image: url(${Scroll});
      background-repeat: no-repeat;
      background-position: center;
      color: black;
      font-weight: 700;
      padding-top: 12px;
    `;

    const TextDiv = styled.div`
        height: 345px;
        padding-top: 13px;
        margin-top: 50px;
        padding-left: 8px;
        font-size: 23px;
        overflow: scroll;
        overflow-x: hidden;
        ::-webkit-scrollbar {
        display: none;
    }
    `

    const rows = props.info.map((oneRow) => (
        <p>{oneRow}</p>
    ));
  
    return (
      <ModalDiv onClick={toggleTheme}>
          <TextDiv>
            {rows}
          </TextDiv>
      </ModalDiv>
    );
}

export default Modal;