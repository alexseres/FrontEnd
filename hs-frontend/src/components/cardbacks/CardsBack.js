import React, { useState, useEffect } from "react";
import CardBackContainer from "./CardBackContainer";
import styled from "styled-components"; 
import axios from "axios";

const BackCards = (props) => {

    const [getBacks, setBacks] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const cardsUrl = `http://localhost:5000/cardbackAPI/backs`

    useEffect(() => {
        axios(cardsUrl)
            .then(response => setBacks(response.data));
        setLoading(false);
    }, [])


    let content = (
        <div>
            <p>Loading...</p>
        </div>
    );

    if (!isLoading && getBacks) {
        content = (
            <WholePage>
            <StyledDiv className="rootOfBacks">
                <CardBackContainer backs={getBacks}>
                    {props.children}
                </CardBackContainer>
            </StyledDiv>
            </WholePage>
            );
    }

    return content;
}

const WholePage = styled.div`
`

const SearchFieldandButtonDiv = styled.div`
    padding-top: 70px;
    position: relative;
    min-width: 100px;
    max-width: 160px;
    left: 45%;

    .search-icon {
        position: absolute;
        top: 76px;
        left: 6px;
        width: 14px;
      }

      .searchItem {
        border: 1px solid grey;
        border-radius: 5px;
        height: 20px;
        width: 100%;
        padding: 2px 23px 2px 30px;
        outline: 0;
        background-color: #f5f5f5;
      }

`

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 88px;
`

export default BackCards;