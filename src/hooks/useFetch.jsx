import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const [data,setData] = useState([]);

    const apiey = import.meta.env.VITE_APP_API_KEY;

    useEffect(()=>{
        fetchNews();
    },[]);

    const fetchNews=async()=>{

        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiey}`);
        const res = await data.json();
        setData(res.articles);
    }
  return { data}
}

export default useFetch;