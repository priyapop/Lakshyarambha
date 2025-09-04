
import "./App.css"
import CreateCategories from './components/CreateCategories'
import { NavLink,useLocation, Route, Routes } from "react-router-dom";
import { Blogs } from "./components/blog";
import SingleBlog from "./components/SingleBlog";
import BlogForm from "./components/CreateBlog";
import Home from "./components/home";
import BlogPage from "./components/BlogPage"
import SingleCategory from "./components/SingleCategory";
import Login from "./components/login";
import Signup from "./components/signup";
import BlogsIcon from "./assets/Blogs (6).svg"; 
import Landing from "./components/landing"; 
function App() {
  const location = useLocation()
  const landingLinks = [
    { action:<Login/>, label: "Get Started" },
   
  ]
  const appLinks = [
    { to: "/home", label: "Home" },
    { to: "/blogs", label: "Browse" },
    { to: "/create", label: "Create" },
    // {to:"/create-category",label:"Create Category"}
    // { to: "/login", label: "Login" },
    // { to: "/signup", label: "Signup" },
  ];
const links = location.pathname === "/" ? landingLinks : appLinks
  return (
    <>
   
      <nav className="sticky top-0 border-y-2 bg-white border-gray-300 flex items-center justify-between pl-25 pr-25 p-3 text-sm font-mono ">
        <img src={BlogsIcon} alt="Blogs" className="h-9" />
        <div className="flex items-center gap-4">
        {links.map(({ to, label,action }) => (
          to ? (
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
          ) : action ? (
            <span >{action}</span>
          ): null
          
          
        ))}
        </div>

      </nav>



      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/create" element={<BlogForm />}></Route>
        <Route path="/blogs" element={<BlogPage />}></Route>
        <Route path="/blogs/:id" element={<SingleBlog />}></Route>
        <Route path='/create-category' element={<CreateCategories/>}></Route>
        <Route path='/single-category/:aa' element={<SingleCategory/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </>
  );
}

export default App;
