import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from "axios";
import Container from "./BottomContainer";

const HomeBottomHalf = (props) => {

    const url = "http://localhost:5000/api/info"
    const [getResult, setResult] = useState([]);
    
    useEffect(() => {
        axios(url)
            .then(res => setResult(res.data))
    }, [])

    let content = (
        <div>
          <p>Loading...</p>
        </div>
      );


    if (getResult["classes"]) {

        console.log(getResult["classes"]);

        var apiContent = {datas: [
            {
                name: "Classes",
                data: getResult["classes"],
            },
            {
                name: "Sets",
                data: getResult["sets"],
            },
            {
                name: "Card Types",
                data: getResult["types"],
            },
            {
                name: "Factions",
                data: getResult["factions"],
            },
            {
                name: "Rarities",
                data: getResult["qualities"],
            },
            {
                name: "Races",
                data: getResult["races"],
            },
        ]}

        content = (
                <ContainerDiv>
                    <Container infos={apiContent}>{props.children}</Container>
                </ContainerDiv>
        )

    }

    return content;
}


const ContainerDiv = styled.div`
    

`

export default HomeBottomHalf;