import Blog from "../model/Blog.js"
import Category from "../model/category.js"
export const createBlog = async (req,res) =>{
    try{
        const blogData = {
      ...req.body,
      author: req.user.id,
    }
     const blog = await Blog.create(blogData)
    res.status(201).json(blog)}
    catch(err){
        res.status(500).json({
            error:err.message
        })
    }
}
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params; // blog id from URL
    const blog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true, // return the updated doc
      runValidators: true, // validate before saving
    });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params; // blog id from URL
    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
export const getBlogs = async (req, res) => {
  try {
    const user = await Blog.find().populate('author').populate('category') 
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export const getBlogsByCategory = async (req, res) => {
  try {
    const {aa} = req.params;

    const category = await Category.findOne({ title:aa })
    if (!category) {
      return res.status(404).json({ message: "category not found" });
    }
    const blogs = await Blog.find({category:category._id}).populate("author", "name email")
      .populate("category", "name")
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs by category" });
  }
};