import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FaLink, FaImage, FaVideo, FaBullhorn } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const AdvertisePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    image_url: "",
    video_url: "",
    link: "",
    placement: "",
    format: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/advertisePost.json", formData);

      if (response.data.success) {
        toast.success(response.data.message);
        setFormData({
          title: "",
          image_url: "",
          video_url: "",
          link: "",
          placement: "",
          format: "",
        });
      } else {
        toast.error("Failed to create advertisement.");
      }
    } catch (error) {
      console.error("Error creating advertisement:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Create New Advertisement
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto  bg-slate-600 p-6 rounded-lg shadow-lg"
      >
        {/* Title */}
        <div className="mb-4">
          <label className="block font-bold text-white mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter ad title"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label
            className="block font-bold text-white mb-2"
            htmlFor="image_url"
          >
            Image URL (for banner)
          </label>
          <div className="flex items-center border border-gray-300 p-2 rounded-md">
            <FaImage className="mr-2 text-blue-500" />
            <input
              type="url"
              id="image_url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full p-2"
            />
          </div>
        </div>

        {/* Video URL */}
        <div className="mb-4">
          <label
            className="block font-bold text-white mb-2"
            htmlFor="video_url"
          >
            Video URL (for video ad)
          </label>
          <div className="flex items-center border border-gray-300 p-2 rounded-md">
            <FaVideo className="mr-2 text-green-500" />
            <input
              type="url"
              id="video_url"
              name="video_url"
              value={formData.video_url}
              onChange={handleChange}
              placeholder="Enter video URL"
              className="w-full p-2"
            />
          </div>
        </div>

        {/* Ad Link */}
        <div className="mb-4">
          <label className="block font-bold text-white mb-2" htmlFor="link">
            Ad Destination Link
          </label>
          <div className="flex items-center border border-gray-300 p-2 rounded-md">
            <FaLink className="mr-2 text-purple-500" />
            <input
              type="url"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              required
              placeholder="Enter destination URL"
              className="w-full p-2"
            />
          </div>
        </div>

        {/* Placement */}
        <div className="mb-4">
          <label
            className="block font-bold text-white mb-2"
            htmlFor="placement"
          >
            Ad Placement
          </label>
          <input
            type="text"
            id="placement"
            name="placement"
            value={formData.placement}
            onChange={handleChange}
            required
            placeholder="Enter ad placement (e.g., homepage, blog)"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Format */}
        <div className="mb-4">
          <label className="block font-bold text-white mb-2" htmlFor="format">
            Ad Format
          </label>
          <input
            type="text"
            id="format"
            name="format"
            value={formData.format}
            onChange={handleChange}
            required
            placeholder="Enter ad format (e.g., banner, video)"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Creating..." : "Create Advertisement"}
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default AdvertisePost;
