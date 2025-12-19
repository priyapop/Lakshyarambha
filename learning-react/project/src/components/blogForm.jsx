import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const BForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [blog, setBlog] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
    coverImage: "",
    // author: "",
  });
  const fetchBlogById = async () => {
    if (!id) return;

    try {
      const res = await axios.get(`http://localhost:3000/blog/${id}`);
      setBlog(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategories();
    if (id) {
      fetchBlogById();
    }
  }, [id]);

  const fetchCategories = async () => {
    const res = await axios.get("http://localhost:3000/categories/all");
    setCategories(res?.data);
  };

  useEffect(() => {
    if (blog && id) {
      setFormData({
        title: blog.title || "",
        content: blog.content || "",
        category: blog.category?._id || "",
        tags: blog.tags?.join(", ") || "",
        coverImage: blog.coverImage || "",
      });
    }
  }, [blog, id]);

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        tags: formData.tags
          ? formData.tags.split(",").map((tag) => tag.trim())
          : [],
      };

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (id) {
        // EDIT
        await axios.patch(
          `http://localhost:3000/blog/updateblog/${id}`,
          payload,
          config
        );
      } else {
        // CREATE
        await axios.post(
          "http://localhost:3000/blog/create",
          payload,
          config
        );
      }

      navigate("/blogs");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" mt-6 my-5 max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
      >
        <h2 className="text-m font-medium">
          {id ? "Edit post" : "Create a new post"}
        </h2>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="title">Content</label>
        <textarea
          name="content"
          placeholder="Write your blog content..."
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.content}
          onChange={handleChange}
          required
        />
        <label htmlFor="category">Category</label>
        <select
          name="category"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          {categories?.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat?.title}{" "}
            </option>
          ))}
        </select>
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.tags}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="coverImage"
          placeholder="Cover Image URL"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.coverImage}
        />
        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded mx-auto block hover:bg-[#1C1B2A]"
        >
         {id ? "Update" : "Submit"}
        </button>
      </form>
    </>
  );
};

export default BForm;
