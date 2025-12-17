import axios from "axios";
import { useEffect, useState } from "react";
import { Blogsbyid } from "./BlogById";
 const Profile = () =>{

return (
    <>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-xl font-medium pt-5">Your Stories</h1>
      </div>
      <div >
      </div>
      <Blogsbyid className="sm:grid-cols-1 lg:grid-cols-3 mx-30 mb-20 pt-5" />
    </>
)

}
export default Profile;
