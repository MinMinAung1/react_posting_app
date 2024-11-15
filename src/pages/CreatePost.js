import React from "react";
import CreatePostForm from "../components/CreatePostForm";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  function onCreate(post) {
    fetch(
      "https://react-be3c7-default-rtdb.asia-southeast1.firebasedatabase.app/post.json",
      {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      if (response.status === 200) {
        navigate("/");
      } else {
        console.log("post creation is failed!");
      }
    });
  }

  return (
      <CreatePostForm onCreate={onCreate} />
  );
};

export default CreatePost;
