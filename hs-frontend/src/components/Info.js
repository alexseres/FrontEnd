import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import img from "./images/infoPageMainPicture.png";

const Info = () => {
    return (
        <Container>
            <div className="content" >
                <Iframe src="https://www.youtube.com/embed/E7wJTI-1dvQ" />
                    <div className="text">
                        <h3>Los Angeles</h3>
                        <p><b>We had the best time playing at Venice Beach!</b></p>
                    </div>
            </div>
        </Container>
    )
}


const Container = styled.div`
    padding: 2px 16px;
    
    border: solid;
    background: #5F9EA0;
    margin: 0% 5% 10% 5%;
`

const Iframe = styled.iframe`
    height: 550px;
    width: 85%;
    border-radius: 4px;
    padding: 5px;
    box-shadow: 0 4px 9px 0 rgba(5,5,5,5.2);
    frameborder= 0;
    allow: autoplay;
    title=video;
    allowfullscreen;
`


export default Info;
        