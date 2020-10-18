import React from 'react';
import styled from "styled-components";
import BottomHalf from "./HomeBottomHalf";


const Home = (props) => {


    return (
        <WholePage>
        <VideoBackgroundDiv className="Video-Div">
            <IFrame src="https://www.youtube.com/embed/QdXl3QtutQI?autoplay=1&mute=1&loop=1&controls=0&playlist=QdXl3QtutQI"/>
        </VideoBackgroundDiv>
        <VideoContentDiv className="Video Content">
        <p>Hearthstone is a free-to-play online digital collectible card game.</p>
        <p>Hearthstone builds upon the existing lore of the Warcraft series.</p>
        <p>Developed and published by Blizzard Entertainment.</p>
        </VideoContentDiv>
        <BottomHalf>
        </BottomHalf>
        </WholePage>
    )
}


const VideoContentDiv = styled.div`
    position: relative;
    text-align: left;
    bottom: 134px;
    background: rgba(0,0,0,0.5);
    color: #f1f1f1;
    font-weight: bold;
    width: 78%;
    padding-top: 1px;
    margin-left: 210px;
    p {
        padding-left: 5px;
        font-size: 18px;
    }
`

const VideoBackgroundDiv = styled.div`
    
`


const IFrame = styled.iframe`
    position: relative;
    opacity: 70%;
    z-index: -99;
    width: 100%;
    height: 835px;
    border: 1px solid black;
    margin-top: 46px;
`



const WholePage = styled.div`
    justify-content: center;
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        display: none;
      }
`

export default Home;