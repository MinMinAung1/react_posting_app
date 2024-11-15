import React, { useContext } from "react";
import { CiHeart, CiUser } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineSaveAlt } from "react-icons/md";
import { RateContext } from "../store/rateContext";

const Post = (props) => {
  const { userName, postTitle, seem, message, image } = props;

  console.log(image);

  const rateContext = useContext(RateContext);
  const rating = rateContext.isRate(props.id);

  function RateHandler() {
    if (rating) {
      rateContext.removeRate(props.id);
    } else {
      rateContext.addRate({
        id: props.id,
        userName: props.userName,
        postTitle: props.postTitle,
        message: props.message,
        seem: props.seem,
        rate: props.rate,
        image: props.image,
      });
    }
  }

  return (
    <div className="flex px-3 py-16 justify-center transition delay-700 duration-300 ease-in-out">
      <div className="max-w-sm lg:w-1/2 md:w-1/2 min-h-5 w-full rounded overflow-hidden shadow-lg">
        {image && <img className="w-full max-h-72" src={image} alt="postiamge"></img>}
        <div className="px-6 py-4 h-56 overflow-auto">
          <div className="font-bold text-xl mb-2 flex">
            <CiUser className="mt-1 mr-1" /> {userName}
          </div>
          <div className="font-bold text-sm mb-2">{postTitle}</div>
          <div className="">
            <p className="text-gray-700 text-base text-justify">{message}</p>
          </div>
        </div>
        <div className="px-6 py-4 flex justify-center">
          <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 cursor-pointer bg-green-100">
            <IoEyeOutline />
          </span>
          <p className="mr-5">{seem}1k</p>
          {rating ? (
            <span
              className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer bg-red-400"
              onClick={RateHandler}
            >
              <CiHeart />
            </span>
          ) : (
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer"
              onClick={RateHandler}
            >
              <CiHeart />
            </span>
          )}
          <p className="mr-5">{rating ? 1 : 0}</p>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">
            <MdOutlineSaveAlt />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
