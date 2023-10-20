import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard';
import './Home.css';

const Home = () => {
    const [news,setNews] = useState([]);

    useEffect(()=>{
        fetchNews();
    },[]);

    const fetchNews=async()=>{
        const data = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=98c9bb1fd0ea4e3391414166dfae5c1f');
        const res = await data.json();
        setNews(res.articles);
    }
  return (
    <div className='box'>
        {
            news?.map(news=>(
                <NewsCard news = {news} key={news.id} />
            ))
        }
    </div>
  )
}

export default Home