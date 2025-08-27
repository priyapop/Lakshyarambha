import express from 'express'
import {createCategory,getAllCategories,getCategoriesById} from '../controller/categoryController.js'

 const router = express.Router()
 router.post("/create",createCategory)
router.get("/all", getAllCategories);       // all blogs
router.get("/:id", getCategoriesById); // single blog
 export default router