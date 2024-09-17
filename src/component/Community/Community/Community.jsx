import React, { useState, useEffect } from "react";
import { FaThumbsUp, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalPosts: 0,
  });
  const [loading, setLoading] = useState(true);
  const [showComments, setShowComments] = useState({});
  const [newComments, setNewComments] = useState({});

  // Fetching data from JSON file in public folder
  const fetchAllPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("/communityPost.json");
      const data = await response.json();
      const perPage = 3;

      setAllPosts(data.posts);
      setPagination({
        currentPage: 1,
        totalPages: Math.ceil(data.posts.length / perPage),
        totalPosts: data.posts.length,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  useEffect(() => {
    const perPage = 3;
    const start = (pagination.currentPage - 1) * perPage;
    const end = start + perPage;
    setPosts(allPosts.slice(start, end));
  }, [pagination.currentPage, allPosts]);

  const changePage = (pageNumber) => {
    setPagination((prev) => ({ ...prev, currentPage: pageNumber }));
  };

  const toggleComments = (postId) => {
    setShowComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleCommentChange = (e, postId) => {
    setNewComments({
      ...newComments,
      [postId]: e.target.value,
    });
  };

  const handleAddComment = async (postId) => {
    const commentText = newComments[postId]?.trim();
    if (!commentText) return;

    const newComment = {
      comment_id: Date.now().toString(),
      comment_text: commentText,
      comment_author: "You",
      created_at: new Date().toISOString(),
    };
    try {
      const response = await fetch("/comment.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId,
          comment: newComment,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Update the post list with the new comment
        const updatedPosts = allPosts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              comments: [...post.comments, newComment],
            };
          }
          return post;
        });

        setAllPosts(updatedPosts);
        setPosts(
          updatedPosts.slice(
            (pagination.currentPage - 1) * 3,
            pagination.currentPage * 3
          )
        );
        setNewComments({ ...newComments, [postId]: "" }); // Clear input field
      } else {
        console.error("Failed to add comment");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className="container mt-5 mx-auto p-4">
      <div>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-center mb-8">
            Community Posts
          </h1>
          <Link
            to="/community/post"
            className=" btn btn-outline font-bold text-center mb-8"
          >
            Add Post
          </Link>
        </div>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            <div className="space-y-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-slate-200 p-6 rounded-lg shadow-lg"
                >
                  <div className="text-2xl font-bold">{post.title}</div>
                  <p className="text-gray-700 mt-2">{post.content}</p>
                  <div className="flex items-center mt-4">
                    <FaUser className="text-gray-500 mr-2" />
                    <span className="text-gray-500 text-sm">
                      By {post.author}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="text-sm flex gap-2 items-center text-gray-500">
                      <FaThumbsUp className="text-blue-500" /> {/* Like Icon */}
                      {post.likes}
                    </span>
                  </div>
                  <div className="mt-2 space-x-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => toggleComments(post.id)}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                  >
                    {showComments[post.id] ? "Hide Comments" : "Show Comments"}
                  </button>

                  {showComments[post.id] && (
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold">Comments:</h3>
                      {post.comments.length > 0 ? (
                        post.comments.map((comment) => (
                          <div
                            key={comment.comment_id}
                            className="bg-gray-100 p-3 mt-2 rounded-md"
                          >
                            <p className="text-gray-600">
                              {comment.comment_text}
                            </p>
                            <div className="text-sm flex items-center text-gray-500 mt-1">
                              <FaUser className="text-gray-500 mr-2" />
                              {comment.comment_author}
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-600">No comments yet.</p>
                      )}

                      <div className="mt-4">
                        <input
                          type="text"
                          value={newComments[post.id] || ""}
                          onChange={(e) => handleCommentChange(e, post.id)}
                          placeholder="Add a comment..."
                          className="border border-gray-300 p-2 rounded-md w-full"
                        />
                        <button
                          onClick={() => handleAddComment(post.id)}
                          className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg"
                        >
                          Add Comment
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-8">
              <button
                disabled={pagination.currentPage === 1}
                onClick={() => changePage(pagination.currentPage - 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
              >
                Previous
              </button>

              <p>
                Page {pagination.currentPage} of {pagination.totalPages}
              </p>

              <button
                disabled={pagination.currentPage === pagination.totalPages}
                onClick={() => changePage(pagination.currentPage + 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Community;
