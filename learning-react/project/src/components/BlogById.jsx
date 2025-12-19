//for author blogs
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { IoMdMore } from "react-icons/io";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import BForm from "./blogForm";

export const Blogsbyid = ({ limit, className }) => {
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openId, setOpenId] = useState(null);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/blog/deleteblog/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setBlog((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {
      console.error(err);
    }
  };


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
        {visibleBlogs?.map((item) => (
          <div
            key={item._id}
            onClick={() => navigate(`/blogs/${item?._id}`)}
            className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-visible border border-gray-200"
          >
            {/* <img
              src={item.coverImage}
              alt={item.title}
              className="h-35 w-full object-cover"
            /> */}

            <div className="p-4  space-y-1 ">
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
              {/* <div className="relative  place-self-end">
                <button
                  className="p-2 rounded-full hover:bg-gray-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenId(openId === item._id ? null : item._id);
                  }}
                >
                  <IoMdMore />
                </button>
                {openId === item._id && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50  ">
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                      Edit
                    </button>
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-red-600">
                      Delete
                    </button>
                  </div>
                )}

                
              </div> */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                {/* 3 dots button */}
                <button
                  onClick={() =>
                    setOpenId(openId === item._id ? null : item._id)
                  }
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <IoMdMore />
                </button>

                {/* Dropdown */}
                {openId === item._id && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
                    {/* <button
                      onClick={() => handleEdit(item._id)}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      Edit
                    </button>
                    {

                    }
                    <BForm/> */}

                    <button
                      onClick={() => navigate(`/blog/edit/${item._id}`)}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      Edit
                    </button>

                    {/* DELETE WITH CONFIRMATION */}
                    <AlertDialog.Root>
                      <AlertDialog.Trigger asChild>
                        <button className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100">
                          Delete
                        </button>
                      </AlertDialog.Trigger>

                      <AlertDialog.Portal>
                        <AlertDialog.Overlay className="fixed inset-0 bg-black/40 z-50" />

                        <AlertDialog.Content className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
                          <AlertDialog.Title className="text-lg font-semibold">
                            Delete blog?
                          </AlertDialog.Title>

                          <AlertDialog.Description className="mt-2 text-sm text-gray-600">
                            This will permanently delete your blog post.
                          </AlertDialog.Description>

                          <div className="mt-6 flex justify-end gap-3">
                            <AlertDialog.Cancel asChild>
                              <button className="px-4 py-2 rounded-md border hover:bg-gray-100">
                                Cancel
                              </button>
                            </AlertDialog.Cancel>

                            <AlertDialog.Action asChild>
                              <button
                                onClick={() => handleDelete(item._id)}
                                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
                              >
                                Delete
                              </button>
                            </AlertDialog.Action>
                          </div>
                        </AlertDialog.Content>
                      </AlertDialog.Portal>
                    </AlertDialog.Root>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
