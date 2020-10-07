import React,{useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import InfoPageContext from "./InfoContext";
import {ModalContextProvider} from "./ModalContext";
import InfoCard from "./InfoCard"



const InfoFetcher = () => {
    // const [show, setShow] = useState(false);
    const url = "http://localhost:5000/api/info"
    const [results, setResults] = useState([]);
    //const [toggleTheme, getTheme] = useContext(ModalContext);
    
    useEffect(() => {
        axios(url)
            .then(res => setResults(res.data))
    })

    const mappedList = Object.keys(results).map(function(key){
        return(
            <ModalContextProvider>
                <InfoCard value={results[key]}/>
            </ModalContextProvider>
            
        )
    });
    
    return mappedList;
    

}

const minImage = styled.img`
    margin-left:auto;
`






export default InfoFetcher; 