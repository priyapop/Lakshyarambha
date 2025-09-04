import axios from "axios";
import  { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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
        "http://localhost:3000/auth/register",
        formData
      );
      console.log(response, "done posting");
      alert("user created successfully");
    } catch (error) {
      console.log(error);
      alert("user not created");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
        <h2 className="text-3xl font-bold text-center">Create User</h2>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          value={formData.name}
          className="w-full p-2 border border-gray-300 rounded"
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <button type="submit" className="bg-blue-400 p-4 rounded-sm ">
          Signup
        </button>
      </form>
      
    </div>
  );
};

export default Signup;
