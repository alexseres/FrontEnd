import React, { useContext } from "react";
import { DisplayContext } from "./DisplayContext";
import Scroll from "../images/ScrollModal.png";
import styled from "styled-components";

const CardDetailsModal = (props) => {
  const [toggleTheme, getTheme] = useContext(DisplayContext);

  const HiddenModal = styled.div`
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
    <HiddenModal className="modal-content" onClick={toggleTheme}>
      <DetailsDiv className="details">
        <StyledP>Card Set: {props.details.cardSet}</StyledP>
        <StyledP>Type: {props.details.type}</StyledP>
        <StyledP>
          Rarity: {props.details.rarity ? props.details.rarity : "Free"}
        </StyledP>
        <StyledP>Class: {props.details.playerClass}</StyledP>
        <StyledP>Cost: {props.details.cost}</StyledP>
        <StyledP>Text: {props.details.text}</StyledP>
        <StyledP>Extra: {props.details.flavor}</StyledP>
        <StyledP>Collectible: {props.details.cost ? "Yes" : "No"}</StyledP>
        <StyledP>
          Artist:
          {props.details.artist ? props.details.artist : " Who knows :("}
        </StyledP>
      </DetailsDiv>
    </HiddenModal>
  );
};

export default CardDetailsModal;
