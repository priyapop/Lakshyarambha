import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    category: {
        type: String,
        enum: ["Technology", "Lifestyle", "Travel", "Food", "Education", "Business", "Entertainment"],
        required: true,
    },
    tags: [{
        type: String,
    }],
    coverImage: {
        type: String, // URL of the image
    },
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;