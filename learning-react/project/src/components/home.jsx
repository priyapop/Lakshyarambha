import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Blogs } from "./blog";
export const Home = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const res = await axios.get("http://localhost:3000/categories/all");
    setCategories(res?.data);
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const navigate = useNavigate();

  const handleClickBlog = () => {
    navigate("/blogs");
  };
  const handleClickShare = () => {
    navigate("/create");
  };
  const handleCategory = () => {
    navigate("/create-category");
  };
  const handleSingleCategory = (e) => {
    const aa = e.target.innerText;
    navigate(`/single-category/${aa}`);
  };
  const cat = categories.length > 10 ? categories.slice(0, 10) : categories;
  return (
    <>
      <div className=" mx-30 mb-20 pt-5">
        <div className="sm:w-128 h-55 lg:w-320  mt-5 mb-8 bg-[#F3F3F4] rounded-xl px-4 py-8 flex flex-col items-center text-center">
          <h1 className=" text-3xl pb-5 ">Welcome</h1>
          <span className=" text-[#717182] ">
            A community-driven platform where creators share insights, stories,
            and expertise across diverse themes and subjects.
          </span>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleClickBlog}
              className="h-8 w-30 text-xs rounded-lg font-medium border-[#e7e7e7] border hover:bg-[#E9EBEF] text-black bg-white"
            >
              Explore Content
            </button>
            <button
              onClick={handleClickShare}
              className="h-8 w-30 text-xs rounded-lg font-medium border-[#e7e7e7] border hover:bg-[#E9EBEF] text-black bg-white"
            >
              Share your story
            </button>
          </div>
        </div>
        <h1 className="pb-5 text-sm">Featured Posts</h1>
        <Blogs className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3" limit={3} />
        <h1 className="py-5 pb-5 text-sm mt-5">Popular Categories</h1>
        <div className="grid text-xs font-medium lg:grid-cols-5 sm:grid-cols-2 gap-4  ">
          {cat?.map((cat) => (
            <button
              onClick={handleSingleCategory}
              className="border border-[#D1D3D7] px-2 py-2 text-center rounded-lg"
              key={cat._id}
              value={cat._id}
            >
              {cat?.title}{" "}
            </button>
          ))}
          <button
            onClick={handleCategory}
            className="h-8 w-35 sm:col-span-2 lg:col-span-5 text-sm justify-self-center rounded-lg font-medium border-[#e7e7e7] border hover:bg-[#1C1B2A] text-white bg-black"
          >
            Create Categorie
          </button>
        </div>

        <h1 className="py-3 pb-5 mt-5 text-sm ">Recent Post</h1>
        <Blogs className="grid gap-6 lg:grid-cols-2" limit={2} />
      </div>
    </>
  );
};
export default Home;
