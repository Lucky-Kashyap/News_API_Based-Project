import React, { useEffect, useState } from "react";
import "./Header.css";
import NewsCard from "./NewsCard";

const Business = () => {
  const [data, setData] = useState([]);
  // const apiKey = import.meta.env.VITE_APP_API_KEY;
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=${
          import.meta.env.VITE_APP_API_KEY
        }`
      );
      const res = await data.json();

      setData(res.sources);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="container">
      <div className="box">
        {data?.map((cat) => (
          <div key={cat.id}>
            <h2>{cat?.name}</h2>
            <p>{cat?.description}</p>
            <p>{cat?.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Business;
