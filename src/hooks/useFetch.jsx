import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetchNews();
    },[]);

    const fetchNews=async()=>{

        const data = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=98c9bb1fd0ea4e3391414166dfae5c1f');
        const res = await data.json();
        setData(res.articles);
    }
  return { data}
}

export default useFetch;