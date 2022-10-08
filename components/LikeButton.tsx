import axios from "axios";
import React, { useState } from "react";
import { MdFavorite } from "react-icons/md";
import useAuthStore from "../store/authStore";
import { BASE_URL } from "../utils";

interface IProps {
  handleLike: () => void;
  handleDislike: () => void;
}

const LikeButton = ( handleLike, handleDislike ) => {
  const [alreadyLiked, setAlreadyLiked] = useState(true);
  const { userProfile }: any = useAuthStore();

  const handleLike = async(like: boolean) => {
    if(userProfile) {
      const response = await axios.put(`${BASE_URL}/api/like`, {
        userId: userProfile._id,
        postId: post._id,
        like
      })
    }
  }

  return (
    <div className={`${flex} gap-6`}>
      <div className='mt-4 flex flex-col justify-center items-center cursor-pointer'>
        {alreadyLiked ? (
          <div className='bg-primary rounded-full p-2 md:p-4 text-[#F51997] ' onClick={handleDislike} >
            <MdFavorite className='text-lg md:text-2xl' />
          </div>
        ) : (
          <div className='bg-primary rounded-full p-2 md:p-4 ' onClick={handleLike} >
            <MdFavorite className='text-lg md:text-2xl' />
          </div>
        )}
        <p className='text-md font-semibold '>{likes?.length || 0}</p>
      </div>
    </div>
  );
};

export default LikeButton;
