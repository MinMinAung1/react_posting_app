import React from "react";
import Post from "./Post";

const PostList = (props) => {
  return (
    <div>
      {props.posts.map(
        //map function can change another object
        (post) => (
          <Post
            key={post.id}
            id={post.id}
            userName={post.userName}
            image={post.image}
            postTitle={post.postTitle}
            message={post.message}
            seem={post.seem}
            rate={post.rate}
          />
        )
      )}
    </div>
  );
};

export default PostList;
