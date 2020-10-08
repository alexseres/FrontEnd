
import React, {useContext} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import img from "../images/infoPageMainPicture.png";
import firstImg from "../images/Hearthstone-PNG-High-Quality-Image.png"
import SecondImg from "../images/HeartStoneSecondpicture.png"
import infoPageContext from "./InfoContext";
import InfoFetcher from "./InfoFetcher";

const Info = () => {
    const [infos, setInfos] = useContext(infoPageContext);
    
    return (
        <Container>
        <FirstImage src={firstImg}/>
            <Header>
                Introduce to our world 
            </Header>
            <div className="iframe-content" >
                <Iframe src="https://www.youtube.com/embed/QdXl3QtutQI"/>
                    <StyledTextDiv className="iframe-text">
                        <WelcomingText>Hearthstone is a free-to-play online digital collectible card game</WelcomingText>
                        <WelcomingText>developed and published by Blizzard Entertainment.</WelcomingText>
                        <WelcomingText>Originally subtitled Heroes of Warcraft,</WelcomingText>
                        <WelcomingText>Hearthstone builds upon the existing lore of the Warcraft series</WelcomingText>
                    </StyledTextDiv>
            </div>
            <SecondPicture src={SecondImg}/>
            <StyledTextDiv>
                <StyledText>
                    Whether you are a card game veteran or a brand new 
                    player eager to learn, There is a place at the, there is a place at the Hearth for everyone.
                    Look at many group we have divided our
                    HearthStone cards:
                </StyledText>
            </StyledTextDiv>
            <CardContainer>
                <InfoFetcher/>
            </CardContainer>
            
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Container>
    )
}



const CardContainer = styled.div`
    display:grid;
    grid-template-columns: auto auto auto;
        
`


const SecondPicture = styled.img`
    width: 94%;
    height:70%;
    padding: 3px;
    box-shadow: 0 4px 9px 0 rgba(5,5,5,5.2);
    border-radius: 4px;
    border: solid;
    margin: 2% 0% 0% 0%;
    background:aqua;
`

const WelcomingText = styled.h3`
<<<<<<< HEAD:hs-frontend/src/components/Info.js
    font-family: Luminari;
    font-size: 150%
=======
    font-family:luminari;
    font-size: 150%;
`
const StyledText = styled.h4`
    font-family:luminari;
    font-size: 170%;
    margin:5%;

>>>>>>> main_page_feature:hs-frontend/src/components/infoPage/Info.js
`


const StyledTextDiv = styled.div`
    text-align:left;
    margin: 0% 0% 0% 2%
`

const FirstImage = styled.img`
    width: 20%;
    height:20%;
    margin: 5%
`

const Header = styled.h1`
    text-align: left;
    font-family: luminari;
    font-size: 300%;
    margin: 0% 0% 0% 2%
`

const Container = styled.div`
    padding: 5px;
    box-shadow: 0 4px 9px 0 rgba(5,5,5,5.2);
    border-radius: 4px;
    border: solid;
    margin: 0% 5% 0% 5%;
    background-color: #C0C0C0;
`

const Iframe = styled.iframe`
    height: 550px;
    width: 95%;
    padding: 2px;
    background:aqua;
    border:solid;
    margin 0% 2% 0% 2%;
    box-shadow: 1px 1px 5px 5px rgba(0.3,0.3,0.3,0.2);
    frameborder="0"
    allow="accelerometer;
    autoplay;
    clipboard-write;
    encrypted-media;
    gyroscope; picture-in-picture" allowfullscreen
    
    

`


export default Info;
        