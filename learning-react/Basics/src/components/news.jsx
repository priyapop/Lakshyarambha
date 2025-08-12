import axios from "axios";
import { useEffect, useState } from "react";

export const News = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("apple");

  const fetchNews = async (query) => {
    const url = `https://newsapi.org/v2/everything?q=${query}&from=2025-07-12&sortBy=publishedAt&apiKey=a19ccd4d6d564169b478dde51113e2f5`;

    const response = await axios.get(url);
    console.log(response, "response");
    setNews(response?.data?.articles);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchNews(query);
  };

  useEffect(() => {
    fetchNews(query);
  }, []);

  return (
    <div className="p-16">
      <h1 className="text-3xl text-white-500 text mb-6">NEWS</h1>
      <form className="py-4" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="enter any query "
          className=" border-black  border-2"
        />
        <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 rounded-xs">
          Search
        </button>
      </form>

      <div className="grid grid-cols-3 gap-8">
        {news.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col gap-2 border-2  p-4">
              <img src={item?.urlToImage} className="h-[400px] w-full" />

              <h2 className="font-bold">{item?.title}</h2>
              <h4 className="font-normal">{item?.description}</h4>
              <h4>{item?.author}</h4>
              <h4>{item?.publishedAt}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
