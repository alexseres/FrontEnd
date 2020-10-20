import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { BackContext } from "./BackContext";
import defaultImg from "../images/defaultCardIMG.png";
import Modal from "./CardBackModal";

const OneBack = (props) => {
  const [isLoading, setLoading] = useState(true);

  const [toggleTheme, getTheme] = useContext(BackContext);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleCardClick = (event) => {
    toggleTheme();
  };

  const handleError = (event) => {
    event.target.src = defaultImg;
  };

  let content = (
    <div>
      <p>Loading</p>
    </div>
  );

  if (isLoading) {
    content = (
      <div className="card">
        <p>Loading...</p>
      </div>
    );
  } else if (!isLoading) {
    content = (
      <CardDivStyle className="card" onClick={handleCardClick}>
        <StyledIMG
          src={props.card.imgAnimated}
          onError={handleError}
          alt="Card Back"
        />
        <Modal details={props.card} />
      </CardDivStyle>
    );
  }

  return content;
};


const StyledIMG = styled.img`
  width: 300px;
  height: 350px;
`

const CardDivStyle = styled.div`
  transition: 0.3s ease;
  width: 320px;
  min-height: 360px;
  text-Align: center;
  margin-Bottom: 10px;
  margin-Left: 10px;
  margin-Right: 10px;

`
export default OneBack;
