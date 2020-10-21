import React, {useEffect, useState, useRef, useCallback} from 'react';
import axios from 'axios';
import styled from "styled-components";
import {DisplayContextProvider} from "./DisplayContext";
import OneCard from "../cards/OneCard";
import UseItemSearch from "./utils/UseItemSearch";



const Cards = (props) => {
    const [query, setQuery] = useState('');
    const[items, setItems] = useState(15);
    let count= 0;
    
    const{
        cards,
        hasMore,
        loading,
        error
    } = UseItemSearch(query, items)
    
    
    function handleScroll(e){
        
        let bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if(bottom){
            setItems(prevItems => prevItems + 25)
        }
        console.log("hm")
    }
    
    function handleSearch(e){
        setQuery(e.target.value);
        setItems(15);
    }
    

    return  (
        <div className="search" >
            <SearchFieldandButtonDiv>
                <input type="text" value={query} onChange={handleSearch}/>
            </SearchFieldandButtonDiv>
            <div style={containerStyle} onScroll={handleScroll} >
                {cards.map((card, index) => {
                    if(cards.length === index +1){
                        return (<DisplayContextProvider>
                            <OneCard card={card}/>
                        </DisplayContextProvider>)
                    }else{
                        return (<DisplayContextProvider>
                                    <OneCard card={card}/>
                                </DisplayContextProvider>)
                    }
                })}
            </div>
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </div>
    )
    
}
export default Cards;

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


const containerStyle = {
    overflowY:"scroll",
    height:"100vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "20px",
    paddingTop: "20px",
};
