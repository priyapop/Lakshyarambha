import axios from "axios";
import { useState, useEffect } from "react";

export const Random = () => {
  const [post, setPost] = useState([]);
  const [allPost, setAllPost] = useState([]);
  const [uid, setuid] = useState(1);
  const fetchPost = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await axios.get(url);
    console.log(response, "response");
    setPost(response.data);
    setAllPost(response.data)
  };

  const handleidChange = (id) => {
    setPost(allPost.filter((nid) => nid.userId === id));
    setuid(id);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <h1 className="text-2xl pb-2">POSTS</h1>
      <div>
        <div className="flex flex-row gap-8 pb-6">
          {allPost
            .filter(
              (item, index, self) =>
                index === self.findIndex((t) => t.userId === item.userId)
            )
            .map((item) => (
              <div
                className="text-black w-8 h-8 flex justify-center rounded-full bg-blue-100  "
                key={item.userId}
              >
                <h1
                  className="self-center"
                  onClick={() => handleidChange(item.userId)}
                >
                  {item.userId}
                </h1>
              </div>
            ))}
        </div>
        {post.map((item) => (
          <div  key={item.id}>
            <div className="border-y grid grid-rows-1 grid-cols-[40px_minmax(auto,auto)] gap-2 border-white-100 pt-4  pb-4">
              {item.userId === uid && (
                <>
                  <h1 className="w-6 h-6 text-black flex justify-center rounded-full bg-blue-100">
                    {item.userId}
                  </h1>
                  <h1 className="text-blue-500">{item.title}</h1>
                  <p className="col-span-2">{item.body}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
