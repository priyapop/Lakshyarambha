import { useEffect, useState } from "react";
import axios from "axios";

const BlogForm = () => {
  const [add,setAdd] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
    coverImage: "",
    author: "",
  });
  const categories = [
    "Technology",
    "Lifestyle",
    "Travel",
    "Food",
    "Education",
    "Business",
    "Entertainment",
  ];
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/users/get");

        setAuthors(res.data);
      } catch {
        console.error("Error fetching authors:");
      }
    };
    fetchAuthors(), [];
  });
  const handleSubmit= async(e)=>{
    e.preventDefault()
    const payload = {
      ...formData,
      tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : []

    }
    try {
      const response = await axios.post("http://localhost:3000/blog/createblog", payload);
      console.log("Blog created:", response.data);
      
    } catch (err) {
      console.error("Error creating blog:", err);
    }

  }

  const handleChange = (e) =>{
 const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const   handleChangeAdd =(e)=>{
     setAdd(!add)
      const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }


  return (
    <>
      <form onSubmit={handleSubmit} className=" max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
        <h2 className="text-2xl font-semibold">Create a new post</h2>
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Write your blog content..."
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.content}
          onChange={handleChange}
          required
        />
        <select
          name="category"
          value={formData.category}
         onChange={handleChangeAdd}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
         <option  value="Add">Add New</option>
          
        </select>
         {/* <button onClick={handleAdd}>Add</button>
          {
            setAdd && <input type="text" />
          } */}
          {
            add && <input type="text" placeholder="add new" />
          }
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.tags}
        />
        <input
          type="text"
          name="coverImage"
          placeholder="Cover Image URL"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.coverImage}
        />

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
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default BlogForm;
