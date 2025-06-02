import React from "react";
import Tag from "./Tag";
const BookmarkCard = ({ bookmark }) => {
  return (
    <div className="bg-white p-6 border border-gray-200 rounded-lg space-y-3 hover:shadow-lg duration-200 ease-in">
      <h2 className="font-semibold overflow-clip">{bookmark.title}</h2>
      <p className="font-sm text-gray-500 overflow-clip">{bookmark.url}</p>
      <p className="text-sm text-gray-700 overflow-clip">
        {bookmark.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {bookmark.tags.map((tag) => (
          <div className="px-2 py-[2px] text-xs font-semibold border rounded-full text-violet-500 bg-violet-200">
            {tag}
          </div>
        ))}
      </div>
      <div className="flex justify-between py-2 items-center border-t border-gray-200">
        <p className="px-2 py-[3px] text-xs text-gray-500 font-semibold rounded-full bg-gray-100 border border-gray-200">
          {bookmark.category}
        </p>
        <div className="flex gap-4">
          <button className="text-gray-500 text-sm px-2 py-1 font-bold border border-gray-300 rounded-md">
            visit
          </button>
          <button className="text-gray-500 text-sm px-2 py-1 font-bold border border-gray-300 rounded-md">
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookmarkCard;
