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
    const user = await Blog.find().populate('author')
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
    const category = req.params.category;

    const blogs = await Blog.find({ category }).populate("author", "name email");

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs by category" });
  }
};