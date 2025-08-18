import Blog from "../model/Blog.js"
export const createBlog = async (req,res) =>{
    try{
        const blog = await Blog.create(req.body)
        res.status(201).json(blog)
    }
    catch{
        res.status(500).json({
            error:err.message
        })
    }
}