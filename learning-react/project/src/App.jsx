import { useEffect, useState } from "react";
import "./App.css";

import { NavLink, Route, Routes } from "react-router-dom";
import { Blogs } from "./components/blog";
import SingleBlog from "./components/SingleBlog";
import BlogForm from "./components/CreateBlog";

function App() {
  const links = [
    { to: "/home", label: "Home" },
    { to: "/blogs", label: "Blogs" },
    { to: "/create", label: "Create" },
  ];

  return (
    <>
   
      <nav className="mt-5 border-y-2  border-gray-300 flex justify-end pl-25 pr-25  gap-4 p-3 text-sm font-mono ">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `px-2 py-1 rounded-md  ${
                isActive ? "bg-[#000000] hover:bg-[#1C1B2A] font-normal text-white" : "hover:bg-[#D3D3D3]"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>



      <Routes>
        <Route path="/create" element={<BlogForm />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blogs/:id" element={<SingleBlog />}></Route>
      </Routes>
    </>
  );
}

export default App;
