import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetchNews();
    },[]);

    const fetchNews=async()=>{
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}}`);
        const res = await data.json();
        setData(res.articles);
    }
  return { data}
}

export default useFetch;