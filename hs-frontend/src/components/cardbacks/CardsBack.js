import React, { useState, useEffect } from "react";
import CardBackContainer from "./CardBackContainer";
import styled from "styled-components"; 
import axios from "axios";

const BackCards = (props) => {

    const [getBacks, setBacks] = useState([]);
    const [isLoading, setLoading] = useState(true);

// <<<<<<< HEAD
//     const cardsUrl = `https://localhost:5001/cardbackAPI/backs`
// =======
    const cardsUrl = process.env.REACT_APP_API_CARDBACKS_URL;
    const cardsSearchURL = process.env.REACT_APP_API_CARDBACKS_SEARCH_URL;
//>>>>>>> cd98f36d81980b27bdd8137dcecef648de7c97bb

    useEffect(() => {
        axios(cardsUrl)
            .then(response => setBacks(response.data));
        setLoading(false);
    }, [])

    const submitFormHandler = async (ev) => {
        ev.preventDefault();
        const requestOptions = {
            headers:{'Content-Type': 'application/json'},
            crossorigin: true,
            withCredentials: true
        }

        let data = JSON.stringify(ev.target.value);
// <<<<<<< HEAD
//         let response = await axios.post("https://localhost:5001/cardbackAPI/search",data , requestOptions);
// =======
        let response = await axios.post(cardsSearchURL, data, requestOptions);
//>>>>>>> cd98f36d81980b27bdd8137dcecef648de7c97bb

        setBacks(response.data);
    }


    let content = (
        <div>
            <p>Loading...</p>
        </div>
    );

    if (!isLoading && getBacks) {
        content = (
            <WholePage>
            <SearchFieldandButtonDiv className="wrapper">
                <form onSubmit={submitFormHandler}>                
                <img className="search-icon" onClick={submitFormHandler} alt="searchIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
                <input className="searchItem" placeholder="Search.." type="text" onChange={submitFormHandler} />
                </form>
            </SearchFieldandButtonDiv>
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
    max-width: 200px;
    left: 42%;

.search-icon {
    position: absolute;
    top: 78px;
    left: 6px;
    width: 19px;
  }

  .searchItem {
    border: 2px solid grey;
    border-radius: 5px;
    height: 30px;
    width: 100%;
    padding: 2px 23px 2px 30px;
    outline: 0;
    background-color: #f5f5f5;
  }

  .searchItem:hover {
      border: 2px solid black;
  }

`

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 88px;
`

export default BackCards;