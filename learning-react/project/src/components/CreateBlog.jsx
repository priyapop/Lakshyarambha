import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BlogForm = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
    coverImage: "",
    author: "",
  });

  //  const fetchCategories = async () => {
  //         const res = await axios.get('http://localhost:3000/categories/all')
  //         setCategories(res?.data)
  //     }

  const [authors, setAuthors] = useState([]);

  const fetchAuthors = async () => {
    const res = await axios.get("http://localhost:3000/api/users/get");
    setAuthors(res?.data);
  };

  const fetchCategories = async () => {
    const res = await axios.get("http://localhost:3000/categories/all");
    setCategories(res?.data);
  };

  // useEffect(() => {
  //   const fetchAuthors = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3000/api/users/get");

  //       setAuthors(res.data);
  //     } catch {
  //       console.error("Error fetching authors:");
  //     }
  //   };
  //   fetchAuthors()
  // }, []);

  useEffect(() => {
    fetchAuthors();
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      tags: formData.tags
        ? formData.tags.split(",").map((tag) => tag.trim())
        : [],
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/blog/createblog",
        payload
      );
      console.log("Blog created:", response.data);
      alert("blog created successfully");
      navigate("/blogs");
    } catch (err) {
      console.error("Error creating blog:", err);
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
        <h2 className="text-m font-medium">Create a new post</h2>
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
        <label htmlFor="author">Author</label>
        <select
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select Author</option>

          {authors.map((author) => (
            <option key={author._id} value={author._id}>
              {author.name} ({author.email})
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded mx-auto block hover:bg-[#1C1B2A]"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default BlogForm;
