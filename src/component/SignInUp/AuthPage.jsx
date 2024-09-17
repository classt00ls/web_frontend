import React, { useState } from "react";
import {
  FaUserAlt,
  FaLock,
  FaEnvelope,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const endpoint = isSignUp ? "/signup" : "/signin"; // Adjust API endpoint based on sign-up or sign-in
    const payload = isSignUp
      ? { username, email, password }
      : { email, password };

    try {
      // const response = await fetch(`https://your-api-endpoint.com${endpoint}`, {
      const response = await fetch(`/signin.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success(data.message || "Sign-in successful!");
        // Store token in localStorage for future authenticated requests
        localStorage.setItem("token", data.token);
        // Optionally redirect or update UI state
      } else {
        toast.error(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to sign in. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform rotate-6 sm:rotate-0 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-center">
                {isSignUp ? "Sign Up" : "Sign In"}
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                onSubmit={handleSubmit}
              >
                {isSignUp && (
                  <div className="relative">
                    <FaUserAlt className="absolute left-3 top-4 text-gray-400" />
                    <input
                      type="text"
                      className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                )}
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
                  <input
                    type="email"
                    className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="relative">
                  <FaLock className="absolute left-3 top-4 text-gray-400" />
                  <input
                    type="password"
                    className="w-full px-10 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    {isSignUp ? "Sign Up" : "Sign In"}
                  </button>
                </div>
              </form>
              <div className="relative flex items-center justify-center py-4">
                <hr className="w-full border-gray-300" />
                <span className="absolute bg-white px-4 text-gray-500">or</span>
              </div>
              <div className="flex flex-col space-y-4">
                <button className="flex items-center justify-center w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300">
                  <FaGoogle className="mr-2" /> Sign in with Google
                </button>
                <button className="flex items-center justify-center w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition duration-300">
                  <FaFacebook className="mr-2" /> Sign in with Facebook
                </button>
              </div>
              <div className="text-center text-sm mt-4">
                {isSignUp ? (
                  <span>
                    Already have an account?{" "}
                    <button
                      onClick={toggleSignUp}
                      className="text-blue-500 hover:underline"
                    >
                      Sign In
                    </button>
                  </span>
                ) : (
                  <span>
                    Don't have an account?{" "}
                    <button
                      onClick={toggleSignUp}
                      className="text-blue-500 hover:underline"
                    >
                      Sign Up
                    </button>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default AuthPage;
