import React from "react";
import BookmarkCard from "./BookmarkCard";

const BookmarkContainer = ({ showBookmarkForm, bookmarks }) => {
  return (
    <div className="lg:px-4">
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
        <div className="h-full grid grid-cols-1 md:grid-cols-2 space-x-4 space-y-4">
          {bookmarks.map((bookmark, index) => {
            return <BookmarkCard key={index} bookmark={bookmark} />;
          })}
        </div>
      )}
    </div>
  );
};

export default BookmarkContainer;
