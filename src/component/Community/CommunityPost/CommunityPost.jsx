import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FaTag, FaPen, FaFileAlt } from "react-icons/fa";

const CommunityPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !tags) {
      toast.error("Please fill out all fields!");
      return;
    }

    const newPost = {
      title,
      content,
      tags: tags.split(",").map((tag) => tag.trim()), // Convert tags string to an array
    };

    try {
      setLoading(true);
      const response = await axios.post("/communityadd.json", newPost);

      if (response.data.success) {
        toast.success(response.data.message);
        setTitle("");
        setContent("");
        setTags("");
      } else {
        toast.error("Failed to add post.");
      }
    } catch (error) {
      console.error("Error adding post:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Create a New Post</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            <FaPen className="inline-block mr-2" /> Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title"
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="content"
          >
            <FaFileAlt className="inline-block mr-2" /> Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter the content"
            className="border border-gray-300 p-2 rounded-md w-full h-32 resize-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="tags">
            <FaTag className="inline-block mr-2" /> Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter tags (e.g., tech, coding, AI)"
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        <button
          type="submit"
          className={`w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Creating Post..." : "Create Post"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CommunityPost;
