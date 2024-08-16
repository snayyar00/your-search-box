"use client";

import { useEffect } from "react";

const CreatePostsButton = () => {
  // trigger post request, every time you refresh the page

  // doesn't work in production, need to manually click button
  // useEffect(() => {
  //   handleCreatePosts();
  // }, []);

  const handleCreatePosts = async () => {
    const response = await fetch("/api/create-posts", {
      method: "POST",
    });
    if (!response.ok) {
      console.error("Failed to create posts:", response.statusText);
    } else {
      const data = await response.json();
      console.log(data);
    }
  };

  return (
    <button
      onClick={handleCreatePosts}
      className="bg-gray-500 h-10 px-3 py-2  items-center justify-center text-white  rounded-lg text-start hover:bg-[#f2f9]"
    >
      Update Data
    </button>
  );
};

export default CreatePostsButton;
