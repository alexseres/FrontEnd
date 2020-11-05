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
            url: 'https://localhost:44363/cardsAPI/search',
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