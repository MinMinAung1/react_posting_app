import React, { useRef } from "react";

const CreatePostForm = (props) => {
  const userNameRef = useRef();
  const postTitleRef = useRef();
  const messageRef = useRef();
  const imageRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const userName = userNameRef.current.value;
    const postTitle = postTitleRef.current.value;
    const message = messageRef.current.value;
    const image = imageRef.current.value;

    const post = {
      userName,
      postTitle,
      message,
      image,
    };
    props.onCreate(post);
    console.log(post);
  }

  return (
    <>
      <div className="max-w-2xl mx-auto pt-16">
        <form onSubmit={submitHandler}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-lg font-medium text-gray-800 mb-1"
            >
              User Name
            </label>
            <input
              type="text"
              id="title"
              name="title"
              ref={userNameRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            ></input>
            <label
              htmlFor="posttitle"
              className="block text-lg font-medium text-gray-800 mb-1 mt-3"
            >
              Post Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              ref={postTitleRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            ></input>
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-800 mb-1"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              ref={messageRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              rows="6"
              required
            ></textarea>
          </div>

          <div class="mb-6">
            <label
              htmlFor="image"
              className="block text-lg font-medium text-gray-800 mb-1"
            >
              Image
            </label>
            <input
              type="url"
              id="image"
              name="image"
              ref={imageRef}
              placeholder="Please image url"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            ></input>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePostForm;
