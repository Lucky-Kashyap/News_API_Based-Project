import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);

//   const apiey = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const data = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_APP_API_KEY}`
      );
      const res = await data.json();
      setData(res.articles);
    } catch (e) {
      console.log(e.message);
    }
  };
  return { data };
};

export default useFetch;
