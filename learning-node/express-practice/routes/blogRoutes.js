import express from 'express'
import {createBlog,updateBlog,deleteBlog,getBlogs,getBlogById} from '../controller/blogController.js'

 const router = express.Router()
 router.post("/createblog",createBlog)
 router.put("/updateblog/:id", updateBlog)
router.delete("/deleteblog/:id", deleteBlog);
router.get("/all", getBlogs);       // all blogs
router.get("/blogs/:id", getBlogById); // single blog
 export default router