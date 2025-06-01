import React, { useState } from "react";

const BookmarkContainer = ({ showBookmarkForm }) => {
  const [bookmarks, setBookmarks] = useState([]);
  return (
    <div className="bg-white border border-gray-200 rounded-lg px-4 p-4">
      {!bookmarks.length && (
        <div className="flex flex-col h-full justify-center items-center space-y-2">
          <h3 className="font-semibold text-lg">No bookmarks found</h3>
          <p className="text-gray-700">
            Add your first bookmark to get started!
          </p>
          <button
            className="mt-4 px-5 py-3 font-semibold text-sm bg-gray-900 hover:bg-gray-800 duration-200 ease-in text-white rounded-md"
            onClick={showBookmarkForm}
          >
            Add Your First Bookmark
          </button>
        </div>
      )}
    </div>
  );
};

export default BookmarkContainer;
