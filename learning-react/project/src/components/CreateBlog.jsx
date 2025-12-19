
import { BForm } from "./blogForm";
const BlogForm = () => {

  // return (
  //   <>
  //     <form
  //       onSubmit={handleSubmit}
  //       className=" mt-6 my-5 max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
  //     >
  //       <h2 className="text-m font-medium">Create a new post</h2>
  //       <label htmlFor="title">Title</label>
  //       <input
  //         type="text"
  //         name="title"
  //         placeholder="Blog Title"
  //         className="w-full p-2 border border-gray-300 rounded"
  //         value={formData.title}
  //         onChange={handleChange}
  //         required
  //       />
  //       <label htmlFor="title">Content</label>
  //       <textarea
  //         name="content"
  //         placeholder="Write your blog content..."
  //         className="w-full p-2 border border-gray-300 rounded"
  //         value={formData.content}
  //         onChange={handleChange}
  //         required
  //       />
  //       <label htmlFor="category">Category</label>
  //       <select
  //         name="category"
  //         className="w-full p-2 border border-gray-300 rounded"
  //         value={formData.category}
  //         onChange={handleChange}
  //       >
  //         <option value="">Select Category</option>
  //         {categories?.map((cat) => (
  //           <option key={cat._id} value={cat._id}>
  //             {cat?.title}{" "}
  //           </option>
  //         ))}
  //       </select>
  //       <label htmlFor="tags">Tags</label>
  //       <input
  //         type="text"
  //         name="tags"
  //         placeholder="Tags (comma separated)"
  //         onChange={handleChange}
  //         className="w-full p-2 border border-gray-300 rounded"
  //         value={formData.tags}
  //       />
  //       <label htmlFor="image">Image</label>
  //       <input
  //         type="text"
  //         name="coverImage"
  //         placeholder="Cover Image URL"
  //         onChange={handleChange}
  //         className="w-full p-2 border border-gray-300 rounded"
  //         value={formData.coverImage}
  //       />
  //       {/* <label htmlFor="author">Author</label>
  //       <select
  //         name="author"
  //         value={formData.author}
  //         onChange={handleChange}
  //         className="w-full p-2 border border-gray-300 rounded"
  //         required
  //       >
  //         <option value="">Select Author</option>

  //         {authors.map((author) => (
  //           <option key={author._id} value={author._id}>
  //             {author.name} ({author.email})
  //           </option>
  //         ))}
  //       </select> */}
  //       <button
  //         type="submit"
  //         className="bg-black text-white py-2 px-4 rounded mx-auto block hover:bg-[#1C1B2A]"
  //       >
  //         Submit
  //       </button>
  //     </form>
  //   </>
  // );
  return(
    <>
    <BForm/>
    </>
  )
};

export default BlogForm;
