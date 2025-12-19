import "./App.css";
import CreateCategories from "./components/CreateCategories";
import { NavLink, useLocation, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Blogs } from "./components/blog";
import SingleBlog from "./components/SingleBlog";
import BlogForm from "./components/CreateBlog";
import Home from "./components/home";
import BlogPage from "./components/BlogPage";
import SingleCategory from "./components/SingleCategory";
import Login from "./components/login";
import Signup from "./components/signup";
import BlogsIcon from "./assets/Blogs (6).svg";
import Landing from "./components/landing";
import Profile from "./components/profile";
import EditBlog from "./components/editBlog";
import * as Dialog from "@radix-ui/react-dialog";
function App() {
  const location = useLocation();
  const landingLinks = [{ action: <Login />, label: "Get Started" }];
  const [loginOpen, setloginOpen] = useState(false);
  const appLinks = [
    { to: "/home", label: "Home" },
    // { to: "/blogs", label: "Browse" },
    { to: "/create", label: "Create" },
    { to: "/profile", label: "Profile" },
    // {to:"/create-category",label:"Create Category"}
    // { to: "/login", label: "Login" },
    // { to: "/signup", label: "Signup" },
  ];
  const links = location.pathname === "/" ? landingLinks : appLinks;
  return (
    <>
      <nav className="sticky top-0 border-y-2 bg-white border-gray-300 flex items-center justify-between pl-25 pr-25 p-3 text-sm font-mono ">
        <img src={BlogsIcon} alt="Blogs" className="h-9" />
        <div className="flex items-center gap-4">
          {links.map(({ to, label, action }) =>
            to ? (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-2 py-1 rounded-md  ${
                    isActive
                      ? "bg-[#000000] hover:bg-[#1C1B2A] font-normal text-white"
                      : "hover:bg-[#D3D3D3]"
                  }`
                }
              >
                {label}
              </NavLink>
            ) : action ? (
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setloginOpen(true);
                    setLoginOpen(false);
                  }}
                  className="rounded-lg bg-black px-5 py-2 text-white font-medium shadow hover:bg-[#1C1B2A]  transition"
                >
                  Login
                </button>
                <Dialog.Root open={loginOpen} onOpenChange={setloginOpen}>
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                    <Dialog.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-xl">
                      <Dialog.Title className="text-xl font-semibold text-gray-900">
                        Login
                      </Dialog.Title>
                      <Dialog.Description className="mb-6 mt-2 text-gray-500">
                        Welcome back! Please enter your details.
                      </Dialog.Description>
                      <Login />
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
            ) : null
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/create" element={<BlogForm />}></Route>
        <Route path="/blogs" element={<BlogPage />}></Route>
        <Route path="/blogs/:id" element={<SingleBlog />}></Route>
        <Route path="/create-category" element={<CreateCategories />}></Route>
        <Route path="/single-category/:aa" element={<SingleCategory />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog/edit/:id" element={<EditBlog />} />
      </Routes>
    </>
  );
}

export default App;
