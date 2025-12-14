import axios from "axios";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        formData
      );
      console.log(response, "done posting");
      localStorage.setItem("token", response.data.token);
      
      alert("user created successfully");
      response.status === 200 ? navigate("/home") : ""
    } catch (error) {
      console.log(error);
      alert("user not created");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">Create User</h2>

        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          value={formData.name}
           className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm  "
          onChange={handleChange}
          required
        />

        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          value={formData.email}
          onChange={handleChange}
           className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm"
          required
        />

        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          value={formData.password}
          onChange={handleChange}
           className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm"
          required
        />

        <button type="submit" className="w-full rounded-lg bg-black px-4 py-2 text-white font-medium shadow hover:bg-[#1C1B2A] focus:outline-none focus:ring-2  transition">
          Signup
        </button>
        
      </form>
      
    </div>
  );
};

export default Signup;
