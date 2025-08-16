import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import connectDB from './config/db.js'
import User from './model/User.js'

 
const app = express();

app.use(express.json())

connectDB()
app.post('/api/users',async(req,res)=>{
    // try{
    //     const user =await 
    //     User.create(req.body)
    //     res.status(201).json(user)
    // }
    // catch(err){
    //     res.status(500).json({
    //         error: err.message
    //     })
    // }
})
app.get("/", (req, res) => {
  res.send("Hello from the server");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/use',async(req,res)=>{
    const user =await User.find()
    res.json(user).status(201)
})