import React, { useState } from "react";

const BookmarkForm = ({ hideBookmarkForm, onSave }) => {
  const [formData, setFormData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, url });
    onClose();
  };



  

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Add New Bookmark</h2>
      <div className="mb-2">
        <label htmlFor="title" className="font-semibold text-sm">
          Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Bookmark title"
          required
          className="w-full border border-gray-300 my-2 px-4 py-2 rounded-lg outline-offset-4 text-sm"
        />
      </div>

      <div className="mb-2">
        <label htmlFor="url" className="font-semibold text-sm">
          URL
        </label>
        <input
          type="url"
          id="url"
          placeholder="https://example.com"
          required
          className="w-full border border-gray-300 my-2 px-4 py-2 rounded-lg outline-offset-4 text-sm"
        />
      </div>

      <div className="mb-2">
        <label htmlFor="description" className="font-semibold text-sm">
          Description
        </label>
        <textarea
          type="text"
          id="description"
          placeholder="Add a short description (optional)"
          required
          className="w-full border border-gray-300 my-2 px-4 py-2 rounded-lg outline-offset-4 text-sm"
        />
      </div>

      <div className="mb-2">
        <label htmlFor="tags" className="font-semibold text-sm">
          Tags
        </label>{" "}
        <div className="grid grid-cols-[10fr_2fr] gap-2 my-2">
          <input
            id="tags"
            placeholder="Add a tag"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-lg outline-offset-4 text-sm"
          />
          <button className="rounded-lg text-white text-sm bg-gray-900 hover:bg-gray-800 duration-200 ease-in">
            Add
          </button>
        </div>
      </div>

      <div className="mb-2">
        <label htmlFor="Category" className="font-semibold text-sm">
          Category
        </label>
        <select
          id="category"
          // value={formData.category}
          // onChange={(e) =>
          //   setFormData({ ...formData, category: e.target.value })
          // }
          required
          className="w-full border border-gray-300 my-2 px-4 py-2 rounded-lg outline-offset-4 text-sm"
        >
          <option value="">Select a category</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Learning">Learning</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="flex justify-end gap-3 text-sm pt-2 my-2">
        <button
          type="button"
          onClick={hideBookmarkForm}
          className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 rounded-lg text-white bg-gray-900 hover:bg-gray-800 duration-200 ease-in"
        >
          Save
        </button>
      </div>
    </form>
  );
};
export default BookmarkForm;
