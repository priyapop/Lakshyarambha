import axios from "axios";
import { useEffect, useState } from "react";

import { Blogs } from "./blog";
export const Home = () => {
  const [categories, setCategories] = useState([])
    const fetchCategories = async () => {
    const res = await axios.get("http://localhost:3000/categories/all");
    setCategories(res?.data);
  };
  useEffect(() => {
    fetchCategories()
  }, []);

  return (
    <>
      <div className="text-sm px-20 pt-5">
        <h1 >Featured Posts</h1>
        <Blogs limit={3} />
        <h1 className="py-3">Popular Themes</h1>
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-4  "> 
          {categories?.map((cat) => (
            <span className="border-2 px-2 py-2 text-center font-medium rounded-lg" key={cat._id} value={cat._id}>
              {cat?.title}{" "}
            </span>
          ))}
        </div>

          <h1 className="py-3">Recent Post</h1>
          <Blogs limit={2} />
      </div>
    </>
  );
};
export default Home;
