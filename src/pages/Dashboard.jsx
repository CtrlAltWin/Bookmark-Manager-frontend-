import React, { useContext, useEffect, useState } from "react";
import FilterCardA from "../components/FilterCardA";
import FilterCardB from "../components/FilterCardB";
import BookmarkContainer from "../components/BookmarkContainer";
import Modal from "../components/Modal";
import BookmarkForm from "../components/BookmarkForm";
import toast from "react-hot-toast";
import axios from "axios";
import AuthContext from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";
const baseURL = import.meta.env.VITE_API_URL;
const Dashboard = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [droppedUrl, setDroppedUrl] = useState("");
  const [filter, setFilter] = useState({
    search: "",
    tags: [],
    category: "",
  });
  const navigate = useNavigate();
  const { loggedInUser } = useContext(AuthContext);
  const getUniqueTags = () => {
    let tags = [];
    bookmarks.forEach((bookmark) => {
      tags = [...tags, ...bookmark.tags];
    });
    return [...new Set(tags)];
  };

  const handleDeleteBookmark = async () => {
    try {
      if (!toBeDeleted) return;
      await axios.delete(`${baseURL}/bookmark/${toBeDeleted}`, {
        withCredentials: true,
      });
      await fetchBookmarks();
      setToBeDeleted(null);
      toast.success("Bookmark deleted successfully!");
    } catch (err) {
      toast.error("Error deleting the bookmark");
      console.log(err.response.data.error);
    }
  };

  const handleAddBookmark = async (bookmark) => {
    try {
      await axios.post(`${baseURL}/bookmark`, bookmark, {
        withCredentials: true,
      });
      setBookmarks((bookmarks) => [...bookmarks, bookmark]);
      toast.success("Bookmark saved successfully!");
    } catch (err) {
      toast.error("Error saving the bookmark");
    }
  };

  const fetchBookmarks = async () => {
    try {
      const params = new URLSearchParams();
      if (filter.search.trim() !== "") {
        params.append("search", filter.search.trim());
      }
      if (filter.category) {
        params.append("category", filter.category.trim());
      }
      if (filter.tags.length > 0) {
        filter.tags.forEach((tag) => params.append("tags", tag.trim()));
      }
      const res = await axios.get(`${baseURL}/bookmark?${params.toString()}`, {
        withCredentials: true,
      });
      setBookmarks(res.data);
    } catch (err) {}
  };

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [loggedInUser]);

  useEffect(() => {
    handleDeleteBookmark();
  }, [toBeDeleted]);

  useEffect(() => {
    fetchBookmarks();
  }, [filter]);

  return (
    <div
      className="bg-gray-50 mt-1 min-h-[calc(100vh-64px)] px-4"
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onDragEnterCapture={() => setIsDragging(true)}
      onDrop={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
      }}
    >
      <div className="pt-9 space-y-2 max-w-[1370px] mx-auto">
        <h1 className="font-bold text-3xl">My Bookmarks</h1>
        <p className="text-gray-700">Manage and organize your favorite links</p>
      </div>

      <div className="mt-6 max-w-[1370px] grid grid-cols-1 md:grid-cols-[3fr_1fr] space-y-4 w-full mx-auto">
        <div className="max-w-md">
          <input
            type="text"
            name="search-bar"
            value={filter.search}
            placeholder="Search by title or description..."
            className="border-2 border-gray-200 bg-white h-10 w-full px-3 text-sm outline-violet-400 outline-offset-4 rounded"
            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          ></input>
        </div>
        <div className="flex justify-end pb-4">
          <button
            className="h-10 w-full md:w-40 rounded bg-violet-400 text-white"
            onClick={() => setShowModal(true)}
          >
            + Add Bookmark
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] max-w-[1370px] mx-auto py-3 lg:space-x-6 space-y-6">
        <div className="space-y-4">
          <FilterCardA
            title={"Filter by Tag"}
            tags={getUniqueTags()}
            filter={filter}
            setFilter={setFilter}
          />
          <FilterCardB
            title={"Filter by Category"}
            categories={[
              "Learning",
              "Work",
              "Personal",
              "Entertainment",
              "Other",
            ]}
            filter={filter}
            setFilter={setFilter}
          />
        </div>

        <BookmarkContainer
          showBookmarkForm={() => setShowModal(true)}
          setDroppedUrl={setDroppedUrl}
          bookmarks={bookmarks}
          setToBeDeleted={setToBeDeleted}
          isDragging={isDragging}
          setIsDragging={setIsDragging}
        />
      </div>

      {showModal && (
        <Modal
          Children={BookmarkForm}
          hideBookmarkForm={() => setShowModal(false)}
          onSave={handleAddBookmark}
          droppedUrl={droppedUrl}
          setDroppedUrl={setDroppedUrl}
        />
      )}
    </div>
  );
};

export default Dashboard;
