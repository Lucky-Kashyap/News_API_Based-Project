import React, { useEffect, useState } from 'react'
import './Header.css';
import NewsCard from './NewsCard';

const Business = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetchData();
    });

    const fetchData= async()=>{
        const data = await fetch('https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=98c9bb1fd0ea4e3391414166dfae5c1f');
        const res  = await data.json();

        setData(res.sources);
    };
  return (
    <div className='container'>
<div className='box'>
    {
        data?.map(cat=>(
            <div key={cat.id}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
                <p>{cat.country}</p>
            </div>
        ))
    }
</div>
    </div>
  )
}

export default Business