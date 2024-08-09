'use client';

const CreatePostsButton = () => {
  const handleCreatePosts = async () => {
    const response = await fetch('/api/create-posts', {
      method: 'POST',
    });
    if (!response.ok) {
      console.error('Failed to create posts:', response.statusText);
    } else {
      const data = await response.json();
      console.log(data);
    }
  };


  return <button onClick={handleCreatePosts} className="bg-gray-500 h-10 px-2 py-3 flex items-center justify-center text-white">Create Posts</button>;
};

export default CreatePostsButton;