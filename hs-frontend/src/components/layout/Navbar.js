import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import img from "./StoneHEarthHeader.png";


export default function Navbar(){
    
    return(
        <Header style={{color: "red"}}>
        <Title primary>HearthSTORM</Title>
        <Link style={linkStyle} to="/">
            Info{" "}
        </Link>
        <Link style={linkStyle} to={"/cards"}>
            Cards
        </Link>
        <Link style={linkStyle} to={"/cards-back"}>
            Cards Back
        </Link>
        <Link style={linkStyle} to={"/favourite-cards"}>
            Favourite Cards
        </Link>
      
    </Header>
    )
}

const Header = styled.header`
    border: 1px solid #000;
    background-image: url(${img});
    text-align: center;
    padding: 15px;
    font-family: "Comic Sans MS";
    img{
        max-width: 100%;
        height: auto;
    }
`;

const linkStyle = {
    color: "white",
    textDecoration: "none"
};

const Title = styled.h1`
    font-family: "Comic Sans MS";
    font-szie: 1em;
    text-align: center;
    color: blue;
`