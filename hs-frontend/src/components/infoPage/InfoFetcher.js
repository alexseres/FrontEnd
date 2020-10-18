import React,{useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import InfoPageContext from "./InfoContext";
import {ModalContextProvider} from "./ModalContext";
import InfoCard from "./InfoCard"



const InfoFetcher = () => {
    
    const url = "http://localhost:5000/api/info"
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        axios(url)
            .then(res => setResults(res.data))
    })
    

    const mappedList = Object.keys(results).map(function(key){
        const name = key;
        if(results[key] instanceof Array){
            return(
                <ModalContextProvider>
                    <InfoCard value={results[key]} name={name}/>
                </ModalContextProvider>
            )
        }
    });
    
    return mappedList;
    

}

const minImage = styled.img`
    margin-left:auto;
`






export default InfoFetcher; 