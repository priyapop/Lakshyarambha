import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
        "http://localhost:3000/auth/login",
        formData
      );
      console.log(response, "done posting");
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.log(error);
      alert("user not logged in");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
        <h2 className="text-3xl font-bold text-center">Login User</h2>

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
          submit
        </button>
      </form>
    </div>
  );
};

export default Login;
