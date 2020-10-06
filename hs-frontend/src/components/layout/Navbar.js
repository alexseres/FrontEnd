import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../images/NavBarImg.png";


export default function Navbar(){
    
    return(
        <Header>
        <Link style={linkStyle} to="/">
        <Button>Home</Button>
        </Link>
        <Link style={linkStyle} to={"/cards"}>
        <Button>Cards Collection</Button>
        </Link>
        <Link style={linkStyle} to={"/cards-back"}>
        <Button>Card Backs</Button>
        </Link>
        <Link style={linkStyle} to={"/favourite-cards"}>
        <Button>Favourite Cards</Button>
        </Link>
      
    </Header>
    )
}

const Header = styled.header`
    border: 1px solid #000;
    margin-top: -5px;
    background-image: url(${img});
    text-align: center;
    padding: 60px;
    font-family: "Comic Sans MS";
    img{
        max-width: 100%;
        height: auto;
    }
`;

const Button = styled.button`
    background: palevioletred;
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;

`

const linkStyle = {
    color: "white",
    textDecoration: "none"
};