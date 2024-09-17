import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const limit = 6; // Number of posts per page

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        // const response = await axios.get(`${BaseUrl}/blog-posts`);
        const response = await axios.get("/blogPosts.json");
        setPosts(response.data.posts); // Set all posts initially
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Calculate the total number of pages based on the posts length and limit
  const totalPages = Math.ceil(posts.length / limit);

  // Get the posts to display for the current page
  const startIndex = (currentPage - 1) * limit;
  const currentPosts = posts.slice(startIndex, startIndex + limit);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="blog-posts mt-16 container mx-auto">
      <h1 className="font-bold text-3xl flex justify-center my-10">
        Blog Section
      </h1>
      <div className="flex flex-wrap mt-5 gap-5 justify-center">
        {currentPosts.map((post, index) => (
          <Link to="/blog" key={index}>
            <img className="rounded-xl" src={post.thumbnail} alt="Article" />
            <div className="mt-5">
              <p className="text-orange-500 text-xs font-bold">{post.title}</p>
              <div className="font-bold text-[15px] mb-2">{post.excerpt}</div>
              <div className="flex items-center mt-4">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={post.link}
                  alt="Avatar"
                />
                <div className="text-[14px] font-semibold">
                  <p className="text-gray-900 leading-none">{post.author}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Pagination */}
      <div className="pagination mt-10 flex justify-center items-center space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 border rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
