import express from 'express'
import { createUser,getUsers } from '../controller/userController.js'
import { register } from "../controller/authController.js"

const router = express.Router()
router.post("/create",register)
router.get("/get", getUsers);
export default router