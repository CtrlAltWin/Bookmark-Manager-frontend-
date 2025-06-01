import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center mt-1 min-h-[calc(100vh-64px)] bg-gray-50 w-full">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4 py-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-center mb-1">
            Welcome to BookmarkHub
          </h1>
          <p className="text-center text-gray-700">
            Organize your web, simply and beautifully
          </p>
        </div>

        <h2 className="font-semibold text-center mb-4">Login</h2>

        <div className="mb-8">
          <label className="block mb-2 font-semibold text-sm">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-offset-4"
            required
          />
        </div>

        <div className="mb-8">
          <label className="block mb-2 font-semibold text-sm">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-offset-4"
            required
          />
        </div>

        {/* Replace the line below with conditional logic if needed */}
        <p className="px-1 text-red-600 mb-8">This is for error message</p>

        <button
          type="submit"
          className="w-full bg-black hover:bg-gray-900 font-semibold text-sm text-white py-3 rounded-lg transition"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
