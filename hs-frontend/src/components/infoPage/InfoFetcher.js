import React,{useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import InfoPageContext from "./InfoContext";


const InfoFetcher = () => {
    const url = "http://localhost:5000/api/info"
    const [results, setResults] = useState([]);

    
    useEffect(() => {
        axios(url)
            .then(res => setResults(res.data))
    })
    
    const mappedList = Object.keys(results).map(function(key){
        return <StyledCard value={key}>{key} <br/></StyledCard>
    });

    return(
        <InfoPageContext.Provider value={results}>
            <div>
                {mappedList}
            </div>    
        </InfoPageContext.Provider>
    )
}

const StyledCard = styled.div`
    background-size:cover;
    box-shadow: 0 4px 8px 0 rgba(3,3,3,3.2);
    transition: 0.3s;
    width: 90%;
    border-radius:5px;
    &hover{
        box-shadow: 0 9px 16px 0 rgba(2,2,2,2)
    };
    font-size:100%;
    

`


export default InfoFetcher; 