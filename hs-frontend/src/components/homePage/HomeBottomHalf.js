import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from "axios";
import Container from "./BottomContainer";

const HomeBottomHalf = (props) => {

// <<<<<<< HEAD
//     const url = "https://localhost:5001/api/info"
// =======
    const url = process.env.REACT_APP_API_HOME_URL;
//>>>>>>> cd98f36d81980b27bdd8137dcecef648de7c97bb
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
    width: 78%;
    margin-left: 215px;
    margin-bottom: 100px;
`

export default HomeBottomHalf;