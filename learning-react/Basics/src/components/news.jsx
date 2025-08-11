import { useEffect, useState } from "react";
import axios from "axios";
export const News = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('nepal');
  const url =
    `https://newsapi.org/v2/everything?q=${query}&from=2025-07-11&sortBy=publishedAt&apiKey=72d5890d607444bf9e24ec39703044ae`
  const fetchNews = async () => {
    const response = await axios.get(url);
    console.log(response, "response");
    setNews(response?.data?.articles);
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-red-500">News</h1>
      {/* <input type="text" value={query} onChange={()=>setQuery(e.target.value)} placeholder="enter value"}></input> */}
      {news.map((item, index) => {
        <div key={index}>
          <div></div>
          <div className="flex felx-col gap-2">
            <h2>{item.title}</h2>
            <h2>{item.description}</h2>
            <h2>{item.author}</h2>
            <h2>{item.publishedAt}</h2>
          </div>
        </div>;
      })}
    </div>
  );
};
