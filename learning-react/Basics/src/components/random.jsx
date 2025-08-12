import axios from "axios";
import { useState, useEffect } from "react";

export const Random =() =>{
const [post, setPost] = useState([])


const fetchPost = async () =>{
const url = "https://jsonplaceholder.typicode.com/posts"
const response = await axios.get(url)
console.log(response, "response")
setPost(response.data)
}

  useEffect(() => {
    fetchPost();
  }, []);

 return (
    <>
    <div>
     {post.map((item)=>(
    <div className="grid grid-rows-3 gap-2"key={item.id }>
        <h1 className=" text-blue-500">{item.title}</h1>
        <p>{item.body}</p>
    </div> 
     )
    )}
    </div>
    </>
 )
}