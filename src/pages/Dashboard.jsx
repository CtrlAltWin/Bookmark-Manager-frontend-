import React from "react";
import FilterCardA from "../components/FilterCardA";
import FilterCardB from "../components/FilterCardB";

const Dashboard = () => {
  return (
    <div className="bg-gray-50 mt-1 min-h-[calc(100vh-64px)] px-4">
      {/* 1st section */}
      <div className="pt-9 space-y-2 max-w-[1370px] mx-auto">
        <h1 className="font-bold text-3xl">My Bookmarks</h1>
        <p className="text-gray-700">Manage and organize your favorite links</p>
      </div>
      {/* 2nd section */}
      <div className="mt-6 max-w-[1370px] grid grid-cols-1 md:grid-cols-[3fr_1fr] space-y-4 w-full mx-auto">
        <div className="max-w-md">
          <input
            type="text"
            name="search-bar"
            placeholder="Search by title or description..."
            className="border-2 border-gray-200 bg-white h-10 w-full px-3 text-sm outline-violet-400 outline-offset-4 rounded"
          ></input>
        </div>
        <div className="flex justify-end pb-4">
          <button className="h-10 w-full md:w-40 rounded bg-violet-400 text-white">
            + Add Bookmark
          </button>
        </div>
      </div>
      {/* 3rd section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] max-w-[1370px] mx-auto py-3 lg:space-x-6 space-y-6">
        <div className="space-y-4">
          <FilterCardA
            title={"Filter by Tag"}
            btns={["afaf", "afafa", "affafa", "faafaf", "learning", "skills"]}
          />
          <FilterCardB
            title={"Filter by Category"}
            btns={["Learning", "Work", "Personal", "Entertainment", "Other"]}
          />
        </div>
        {/*4th section-Bookmark holder */}
        <div className="bg-white border border-gray-200 min-h-[calc(100vh-318px)] rounded-lg"></div>
      </div>
    </div>
  );
};

export default Dashboard;
