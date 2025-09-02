import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Blogs = ({ limit, className }) => {
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem('token')
  if(!token) {
    alert ('invalid route')
    navigate('/')}

  const fetchBlog = async () => {
    try {
      const url = "http://localhost:3000/blog/all";
      const response = await axios.get(url);
      console.log(response, "response");
      setBlog(response.data);
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  // useEffect(() => {
  //   fetchBlog();
  // }, []);

 useEffect(() => {
    const token = localStorage.getItem('token')
  if(!token) {
    
    navigate('/')}
    fetchBlog();
  }, []);


  const sortedBlogs = [...blog].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const visibleBlogs = limit ? sortedBlogs.slice(0, limit) : sortedBlogs;
  return (
    <>
      <div className={`grid gap-6 ${className} `}>
        {/*//sm:grid-cols-1 lg:grid-cols-3 gap-6 */}
        {visibleBlogs?.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`${item?._id}`)}
            className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
          >
            <img
              src={item.coverImage}
              alt={item.title}
              className="h-35 w-full object-cover"
            />

            <div className="p-4 space-y-1">
              <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
              <p className="text-sm text-gray-600">
                {item.content.slice(0, 100)}...
              </p>

              <div className="flex flex-wrap gap-2 text-sm text-blue-600">
                {item?.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 px-2 py-0.5 rounded-full text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="text-sm text-gray-500">
                Category:{" "}
                <span className="font-medium">{item?.category?.title}</span>
              </div>
              <div className="text-sm text-gray-500">
                Author:{" "}
                <span className="font-medium text-gray-700">
                  {item?.author?.name}
                </span>
              </div>

              <div className="text-xs text-gray-400">
                Posted on: {new Date(item?.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
