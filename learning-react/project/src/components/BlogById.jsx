//for author blogs
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { IoMdMore } from "react-icons/io";
export const Blogsbyid = ({ limit, className }) => {
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    const decoded = jwtDecode(token);
    const userId = decoded.id || decoded._id;

    const fetchAuthorBlogs = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/blog/user/${userId}/blogs`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBlog(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAuthorBlogs();
  }, [navigate]);

  useEffect(() => {
    const closeMenu = () => setOpen(false);
    if (open) document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [open]);

  const sortedBlogs = [...blog].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const visibleBlogs = limit ? sortedBlogs.slice(0, limit) : sortedBlogs;
  return (
    <>
      <div className={`grid gap-6 ${className} `}>
        {/*//sm:grid-cols-1 lg:grid-cols-3 gap-6 */}
        {visibleBlogs?.map((item) => (
          <div
            key={item._id}
            onClick={() => navigate(`/blogs/${item?._id}`)}
            className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
          >
            {/* <img
              src={item.coverImage}
              alt={item.title}
              className="h-35 w-full object-cover"
            /> */}

            <div className="p-4  space-y-1">
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

              {/* <button
                className="place-self-end"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((prev) => !prev);
                }}
              >
                {open && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-3 top-12 w-40 bg-white border rounded-lg shadow-lg z-50"
                  >
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                      Edit
                    </button>
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-red-600">
                      Delete
                    </button>
                  </div>
                )}

                <IoMdMore />
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
