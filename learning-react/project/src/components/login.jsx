import axios from "axios";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Signup from "./signup.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const navigate = useNavigate()
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
      // localStorage.setItem("user", JSON.stringify(res.data.user))
      response.status === 200 ? navigate("/home") : ""
    } catch (error) {
      console.log(error);
      alert("User not logged in");
    }
  };


  // const handleLog = () => {
  //   response.status === 200 ? navigate("/home") : "";
  // }
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm  "
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm"
            required
          />
        </div>

        <button
          type="submit"
          // onClick={handleLog()}
          className="w-full rounded-lg bg-black px-4 py-2 text-white font-medium shadow hover:bg-[#1C1B2A] focus:outline-none focus:ring-2  transition"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-600">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={() => {
            setSignupOpen(true);
            setLoginOpen(false);
          }}
          className="text-blue-600 font-medium hover:underline"
        >
          Register
        </button>
      </p>

      {/* Signup Modal */}
      <Dialog.Root open={signupOpen} onOpenChange={setSignupOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-xl">
            <Signup />
            <Dialog.Close asChild>
              <button
                className="absolute right-3 top-3 rounded-full p-1 text-gray-500 hover:bg-gray-100 focus:outline-none"
                aria-label="Close"
              >
                ✕
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default Login;
