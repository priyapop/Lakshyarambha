import axios from "axios";
import { useEffect, useState } from "react";
import { Blogs } from "./blog";
export const BlogPage = () => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-xl font-medium pt-5">Browse Content</h1>
        <span>Discover blogs and vlogs from our community of creators</span>
      </div>
      <div >

      </div>
      <Blogs className="sm:grid-cols-1 lg:grid-cols-3 mx-30 mb-20 pt-5" />
    </>
  );
};
export default BlogPage;
