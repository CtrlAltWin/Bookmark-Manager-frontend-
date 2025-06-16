import React, { useState } from "react";
import BookmarkCard from "./BookmarkCard";

const BookmarkContainer = ({
  showBookmarkForm,
  bookmarks,
  setToBeDeleted,
  setDroppedUrl,
  isDragging,
  setIsDragging,
}) => {
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const url = e.dataTransfer.getData("text/plain");
    if (url && url.startsWith("http")) {
      setDroppedUrl(url);
      showBookmarkForm();
    }
  };
  return (
    <div
      className={`lg:px-4 h-auto ${
        isDragging && "py-4 border border-dashed border-gray-300 duration-300"
      }`}
      onDrop={handleDrop}
    >
      <p className="p-2 bg-white text-gray-700 text-sm text-center border border-gray-200 rounded-lg mb-2">
        Drag and drop the URL here
      </p>

      {!bookmarks.length ? (
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
      ) : (
        <div className="min-h-72 grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookmarks.map((bookmark, index) => {
            return (
              <BookmarkCard
                key={index}
                bookmark={bookmark}
                setToBeDeleted={setToBeDeleted}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BookmarkContainer;
