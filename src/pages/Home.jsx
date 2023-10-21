import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import "./Home.css";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data: news } = useFetch();

  return (
    <div className="container">
      <div className="box">
        {news?.map((news) => (
          <NewsCard news={news} key={news.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
