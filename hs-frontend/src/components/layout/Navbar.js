import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../images/NavBarImg.png";


export default function Navbar(){
    
    return(
        <Header>
        <div className="buttons">
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
        </div>
      
    </Header>
    )
}

const Header = styled.header`
    position: fixed;
    width: 100%;
    height: 12%;
    border: 1px solid #000;
    margin-top: -23px;
    background-image: url(${img});
    background-position-y: 10%;
    text-align: center;
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