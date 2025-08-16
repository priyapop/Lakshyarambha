import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import connectDB from './config/db.js'
import User from './model/User.js'
import userRoutes from './routes/userRoutes.js'
 
const app = express();

app.use(express.json())

connectDB()

app.get("/", (req, res) => {
  res.send("Hello from the server");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use("/api/users", userRoutes);