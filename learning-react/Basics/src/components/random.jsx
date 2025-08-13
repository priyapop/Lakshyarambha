import axios from "axios";
import { useState, useEffect } from "react";

export const Random = () => {
  const [post, setPost] = useState([]);
  const [uid, setuid] = useState(1);
  const fetchPost = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await axios.get(url);
    console.log(response, "response");
    setPost(response.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <h1 className="text-2xl pb-2">POSTS</h1>
      <div>
        {/* {post.map((item) => (
          <div className="grid grid-flow-rows gap-2 " key={item.id}>
            
          </div>
        ))} */}
        <div className="flex flex-row gap-8 pb-6">
          {post
            .filter(
              (item, index, self) =>
                index === self.findIndex((t) => t.userId === item.userId)
            )
            .map((item) => (
              <div className="text-black w-8 h-8  rounded-full bg-blue-100  " key={item.userId}>
                <h1 className="self-center">
                  {item.userId}
                </h1>
              </div>
            ))}
        </div>

        {post.map((item, uid) => (
          <div className="grid grid-flow-rows gap-2 " key={item.id}>
            <div className="border-y border-white-100 pt-4  pb-4">
              {/* <h1 className=" text-blue-500  ">{item.userId === 1 && item.title}</h1>
              <p>{item.userId === 1 && item.body}</p> */}
              {item.userId === 1 && (
                <>
                  <h1 className="w-5 h-5 rounded-full bg-blue-100">
                    {item.userId}
                  </h1>
                  <h1 className="text-blue-500">{item.title}</h1>
                  <p>{item.body}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
