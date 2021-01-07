import React,{useEffect, useState} from "react";
import axios from "axios";

export default function UseItemSearch(query, itemNumbers) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [cards, setCards] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setCards([]);
    }, [query])

    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel;
        
        axios({
            method: 'GET',
<<<<<<< HEAD
            url: 'https://localhost:5001/cardsAPI/search',
=======
            url: process.env.REACT_APP_API_CARD_SEARCH_URL,
>>>>>>> cd98f36d81980b27bdd8137dcecef648de7c97bb
            params: {query: query, itemNumber: itemNumbers},
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(response => {
            setCards(response.data)
            
            setHasMore(response.data.length > 0);
            setLoading(false);
        }).catch(e => {
            if (axios.isCancel(e)) return;
            setError(true);
        })
        return () => cancel();
    }, [query, itemNumbers]);
    
    return {cards,hasMore,loading, error}
}