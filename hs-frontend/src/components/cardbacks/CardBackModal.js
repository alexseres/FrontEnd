import React, { useContext } from "react";
import { BackContext } from "./BackContext";
import Scroll from "../images/ScrollModal.png";
import styled from "styled-components";

const CardBackModal = (props) => {
  const [toggleTheme, getTheme] = useContext(BackContext);

  const Modal = styled.div`
    display: ${getTheme ? "inherit" : "none"};
    position: inherit;
    z-index: 1;
    width: 100%;
    height: 202px;
    background-image: url(${Scroll});
    background-size: 318px 201px;
    background-repeat: no-repeat;
    color: black;
    font-weight: 700;
    padding-top: 12px;
  `;
  const StyledP = styled.p`
    width: 280px;
    margin-left: 15px;
  `;
  const DetailsDiv = styled.div`
    height: 162px;
    padding-top: 10px;
    width: 293px;
    padding-left: 8px;
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <Modal className="modal-content" onClick={toggleTheme}>
      <DetailsDiv className="infos">
        <StyledP>Name: {props.details.name}</StyledP>
        <StyledP>Description: {props.details.description}</StyledP>
        <StyledP>Source: {props.details.source}</StyledP>
        <StyledP>How to get: {props.details.howToGet}</StyledP>
      </DetailsDiv>
    </Modal>
  );
};

export default CardBackModal;
