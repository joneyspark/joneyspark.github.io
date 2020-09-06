import React, { useEffect, useState } from 'react';
import Headnews from '../Headnews/Headnews';

const Topheadline = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=d61aedc441c8460fa24c4d991de470b3')
        .then(res => res.json())
        .then(data => {
            setArticles(data.articles);
            console.log(data);
        })
    }, [])
    return (
        <div>
            <h1>Topheadline: {articles.length}</h1>
            {
                articles.map(artt => <Headnews key={artt.url} article={artt}></Headnews>)
            }
        </div>
    );
};

export default Topheadline;