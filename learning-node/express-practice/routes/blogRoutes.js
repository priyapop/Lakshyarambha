import express from "express";
import {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogs,
  getBlogById,
  getBlogsByCategory,
  getBlogByAuthor,
} from "../controller/blogController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = express.Router();
// router.post("/createblog", createBlog);
router.patch("/updateblog/:id", updateBlog);
router.delete("/deleteblog/:id", deleteBlog);
router.get("/all", getBlogs); // all blogs
router.get("/:id", getBlogById); // single blog
router.get("/category/:aa", getBlogsByCategory);
router.post("/create", authMiddleware, createBlog);
router.get("/user/:id/blogs", getBlogByAuthor);
export default router;
