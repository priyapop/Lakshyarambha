import { useEffect, useState } from "react";
import "./App.css";

import { Link, Route, Routes  } from "react-router-dom";
import { Blogs } from "./components/blog";
import SingleBlog from "./components/SingleBlog";
import BlogForm from "./components/CreateBlog";

function App() {


  return (
    <>
      <nav className="flex gap-4  p-4">
        <Link to="home">Home </Link>
        <Link to="users">Users </Link>
        <Link to="blogs">Blogs </Link>
        <Link to="create">Create </Link>
        <Link to="contact">Contact </Link>
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
