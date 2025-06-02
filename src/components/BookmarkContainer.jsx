import React, { useEffect, useState } from "react";
import BookmarkCard from "./BookmarkCard";

const BookmarkContainer = ({ showBookmarkForm }) => {
  const [bookmarks, setBookmarks] = useState([
    {
      title: "MDN Web Docs",
      url: "https://developer.mozilla.org/",
      description:
        "Comprehensive resource for web developers, with docs on HTML, CSS, and JavaScript.",
      category: "Learning",
      tags: ["docs", "html", "css", "javascript"],
    },
    {
      title: "GitHub",
      url: "https://github.com/",
      description:
        "Platform for hosting and collaborating on code repositories.",
      category: "Work",
      tags: ["git", "repos", "open-source"],
    },
    {
      title: "YouTube",
      url: "https://www.youtube.com/",
      description:
        "Video platform with content on everything from tutorials to entertainment.",
      category: "Entertainment",
      tags: ["video", "tutorial", "fun"],
    },
    {
      title: "LeetCode",
      url: "https://leetcode.com/",
      description:
        "Practice coding problems and prepare for technical interviews.",
      category: "Learning",
      tags: ["coding", "practice", "interview"],
    },
    {
      title: "Hacker News",
      url: "https://news.ycombinator.com/",
      description:
        "Tech news aggregator with articles on startups, programming, and more.",
      category: "Learning",
      tags: ["news", "tech", "startups"],
    },
    {
      title: "Figma",
      url: "https://figma.com/",
      description: "Collaborative interface design tool for teams.",
      category: "Work",
      tags: ["design", "ui", "collaboration"],
    },
    {
      title: "Reddit",
      url: "https://www.reddit.com/",
      description: "Online community and discussion site for countless topics.",
      category: "Entertainment",
      tags: ["community", "memes", "discussion"],
    },
    {
      title: "Notion",
      url: "https://www.notion.so/",
      description:
        "All-in-one workspace for notes, tasks, databases, and collaboration.",
      category: "Productivity",
      tags: ["notes", "tasks", "planning"],
    },
  ]);
  
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
