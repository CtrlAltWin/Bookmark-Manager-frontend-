import axios from "axios";
import React, { useState } from "react";
const baseURL = import.meta.env.VITE_API_URL;
const Signup = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = await axios.post(`${baseURL}/auth/signup`, formData, {
        withCredentials: true,
      });
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-1 min-h-[calc(100vh-64px)] bg-gray-50 w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="mb-4 py-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-center mb-1">
            Welcome to BookmarkHub
          </h1>
          <p className="text-center text-gray-700">
            Organize your web, simply and beautifully
          </p>
        </div>

        <h2 className="font-semibold text-center mb-4">Sign Up</h2>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-sm">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-offset-4"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-sm">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-offset-4"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-sm">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-offset-4"
            required
          />
        </div>

        {error && <p className="px-1 text-red-600 mb-6">{error}</p>}

        <button
          type="submit"
          className="w-full bg-violet-500 hover:bg-violet-400 font-semibold text-sm text-white py-3 rounded-lg transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
