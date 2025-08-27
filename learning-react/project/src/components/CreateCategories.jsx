import axios from "axios";
import  { useState } from "react";

const CreateCategories = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/categories/create",
        formData
      );
      console.log(response, "done posting");
      alert("category created successfully");
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  return (
    <>
      <div className="space-y-4 flex py-4 justify-center  px-8 w-full">
        <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-bold text-center">Create Category</h2>

          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="enter any title"
            value={formData.title}
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleChange}
            required
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            placeholder="enter any description"
            value={formData.description}
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleChange}
            required
          />

          <button type="submit" className="bg-blue-400 p-4 rounded-2xl w-full">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateCategories;
