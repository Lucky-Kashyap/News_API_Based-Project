import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import "./Home.css";

const Search = () => {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();

  const queryData = searchParams.get("q");

  // const {data : news}= useFetch();
  const fetchData = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/everything?q=${queryData}&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const res = await data.json();
    setData(res.articles);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="box">
        {data?.map((news) => (
          <NewsCard news={news} key={news.id} />
        ))}
      </div>
    </div>
  );
};

export default Search;
