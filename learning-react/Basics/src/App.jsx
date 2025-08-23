import "./App.css";
import { useState } from "react";
import Card from "./components/card";
import Form from "./components/form";
import List from "./components/arrays";
import Quiz from "./components/quiz";
import { News } from "./components/news";
import { Random } from "./components/random";
import { Blogs } from "./components/Blogs";
import { Link, Route, Routes } from "react-router-dom";

import { SingleBlog } from "./components/SingleBlog";
import { BlogForm } from "./components/CreateBlogs";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className="font-serif text-xl ">Menu</h1>
      <Card
        foodType={{ name: "Drinks", id: 1, type: ["Tea", "Coffee", "Water"] }} //props
        count={count}
        setCount={setCount}
        
      />
      <Card
        foodType={{
          name: "Pizza",
          id: 2,
          type: ["Margerita", "Fungi", "Chicken"],
        }}
        count={count}
        setCount={setCount}
        
      />
      <Card
        foodType={{
          name: "Pasta",
          id: 3,
          type: ["Macaroni", "Spaghetti Bolognese", "Chicken parmesan"],
        }}
        count={count}
        setCount={setCount}
        
      /> */}
      {/* <Form /> */}
      {/* <List/> */}
      <Blogs />
      <nav className="flex gap-4  p-4">
        <Link to="home">Home </Link>
        <Link to="users">Users </Link>
        <Link to="blogs">Blogs </Link>
        <Link to="create">Create </Link>
        {/* <Link to ="blogs/:id">Blogs </Link>  */}
        <Link to="contact">Contact </Link>
      </nav>
      <Route path="/home" element={<Children />}></Route>
      <Route path="/users" element={<News />}></Route>
      <Route path="/contact" element={<Children />}></Route>
      <Route path="/create" element={<BlogForm />}></Route>
      <Route path="/blogs" element={<Blogs />}></Route>
      <Route path="/blogs/:id" element={<SingleBlog />}></Route>
    </>
  );
}

export default App;
