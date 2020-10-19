import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../images/HSLogo.png";


export default function Navbar(){
    
    return(
        <Header>
          <a href="/">
            <img src={Logo} alt="HS Logo for Navbar"></img>
          </a>
          <div className="menu-items">
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cards">Cards</a></li>
            <li><a href="/cards-back">Cards Back</a></li>
            </ul>
          </div>
        </Header>
    )
}

const Header = styled.div`
    
    position: fixed;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    height: 56px;
    z-index: 99;

    img {
      width: 66px;
      height: 61px;
      float: left;
      margin-left: 222px;
      margin-top: -3px;
    }

    .menu-items {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    ul {
      float: right;
      list-style-type: none;
      margin-right: 190px;
      font-size: 17px;
      font-weight: bold;
    }

    li {
        height: 56px;
        float: left;
        margin-top: -16px;
      }
    
    

      li a {
        display: inline-block;
        color: white;
        text-align: center;
        padding: 0px 16px;
        text-decoration: none;
        height:100%;
        padding-top: 15px;
      }
      
      li a:hover {
        background-color: #949494;
      }
`;