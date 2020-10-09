import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <a
        href="https://www.facebook.com/Hearthstone.en/?brand_redir=498467596862680"
        className="fa fa-facebook"
      >
        {" "}
      </a>
      <a
        href="https://www.instagram.com/playhearthstone/"
        className="fa fa-instagram"
      >
        {" "}
      </a>
      © Designed by Alex and Ádám
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  left: 0%;
  bottom: 0%;
  width: 100%;
  background-color: black;
  color: white;
  text-align: right;

  .fa {
    padding: 12px;
    font-size: 30px;
    width: 27px;
    height: 27px;
    text-align: center;
    border-radius: 50%;
    margin: 4px;
  }

  .fa:hover {
    opacity: 0.7;
  }

  .fa-facebook {
    background: #3b5998;
    color: white;
  }

  .fa-instagram {
    background: #55acee;
    color: white;
  }
`;
