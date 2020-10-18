import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {DisplayContextProvider} from "../cards/DisplayContext";
import OneCard from "../cards/OneCard";

const Search = (props) => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState("");
    const cardsUrl = `http://localhost:5000/api/search`
    
    useEffect(() => {
        axios(cardsUrl)
    }, )

    
    
    const handleChange = (e) => {

        async function fetchData() {
            let value;
            let response;
            setLoading(true);
            if (e.target.elements.searchItem.value === "") {
                value = '';
                setCards([]);
            } else {
                value = e.target.elements.searchItem.value;
                const requestOptions ={
                    headers:{'Content-Type': 'application/json'},
                }
                let data = JSON.stringify(value);
                response = await axios.post("http://localhost:5000/api/search",data ,requestOptions);
                console.log(response.data);
                setCards(response.data);
            }
            setLoading(false);
        }
        e.preventDefault();
        fetchData();
        setInput(e.target.elements.searchItem.value);
        
    }
    
    let content=null;
    const mappedList = cards.map((card) => {
        return (<DisplayContextProvider>
            <OneCard card={card}/>
        </DisplayContextProvider>)
    })
    return  (
        <div className="search">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <form onSubmit={handleChange}>
                <input
                    type="text"
                    placeholder="Search data"
                    name="searchItem"
                />
                <button>
                    Submit
                </button>
            </form>
            <div style={containerStyle}>
                {mappedList}
            </div>
                
        </div>
    )
 
    
    
}
export default Search;

const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "20px",
    paddingTop: "20px",
};
