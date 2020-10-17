import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../images/NavBarImg.png";


export default function Navbar(){
    
    return(
        <Header>
            <li><a href="/">Home</a></li>
            <li><a href="/cards">Cards</a></li>
            <li><a href="/cards-back">Cards Back</a></li>
        </Header>
    )
}

const Header = styled.ul`
    
    position: fixed;
    height: 5%;
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;

    li {
        float: left;
      }

      li a {
        display: inline-block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      
      li a:hover {
        background-color: red;
      }
`;