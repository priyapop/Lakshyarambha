
import { Blogsbyid } from "./BlogById";
import { useParams } from "react-router-dom";
const Profile = () => {
  const { authorId } = useParams();

  // router.get("/user/:id/blogs", getBlogByAuthor);
  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-xl font-medium pt-5">Your Stories</h1>
      </div>
      <Blogsbyid
        authorId={authorId}
        editable={!authorId}
        className="sm:grid-cols-1 lg:grid-cols-3 mx-30 mb-20 pt-5"
      />
    </>
  );
};
export default Profile;
