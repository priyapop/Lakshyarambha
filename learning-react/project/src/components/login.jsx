import axios from "axios";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Signup from "./signup.jsx";

const Login = () => {
  const [formData, setFormData] = useState({
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
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <div>
      <Dialog.Root open={loginOpen} onOpenChange={setLoginOpen}>
        <Dialog.Trigger asChild>
          <button className="inline-flex h-[35px] items-center justify-center rounded bg-violet4 px-[15px] font-medium leading-none text-violet11 outline-none outline-offset-1 hover:bg-mauve3 focus-visible:outline-2 focus-visible:outline-violet6 select-none">
            Login
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
          <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
            <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
              Login
            </Dialog.Title>
            <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
              Welcome Back
            </Dialog.Description>
            <form onSubmit={handleSubmit}>
              <fieldset className="mb-[15px] flex items-center gap-5">
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
              </fieldset>

              <div className="mt-[25px] flex justify-end">
                <button
                  type="submit"
                  className="inline-flex h-[35px] items-center justify-center rounded bg-green4 px-[15px] font-medium leading-none text-green11 outline-none outline-offset-1 hover:bg-green5 focus-visible:outline-2 focus-visible:outline-green6 select-none"
                >
                  Login
                </button>
              </div>

              <Dialog.Close>
                <button
                  className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
                  aria-label="Close"
                >
                  x
                </button>
              </Dialog.Close>
            </form>

            <p className="mt-4 text-sm">
              Don't have an account?
              <button
                className="text-blue-500 underline"
                type="button"
                onClick={() => {
                  setSignupOpen(true);
                  setLoginOpen(false);
                }}
              >
                Register
              </button>
              
            </p>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <Dialog.Root open={signupOpen} onOpenChange={setSignupOpen}>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                  <Dialog.Content className="fixed left-1/2 top-1/2 w-96 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg">
                    <Signup />
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
    </div>
  );
};
export default Login;
