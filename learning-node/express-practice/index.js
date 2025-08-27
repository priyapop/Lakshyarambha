import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import connectDB from './config/db.js'
import User from './model/User.js'
import userRoutes from './routes/userRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import movieRoutes from './routes/movieRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import cors from "cors"



const app = express();

app.use(express.json())
app.use(cors());

connectDB()

app.get("/", (req, res) => {
  res.send("Hello from the server");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use("/api/users", userRoutes);
app.use("/blog", blogRoutes);
app.use("/movie", movieRoutes);
app.use("/categories", categoryRoutes);