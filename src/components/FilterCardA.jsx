import React from "react";

const FilterCardA = ({ title, tags }) => {
  return (
    <div className="bg-white min-h-40 border border-gray-200 text-sm px-2 py-4 rounded-lg">
      <h3 className="mx-2 text-gray-700 font-semibold "> {title}</h3>
      <div className="pt-2">
        {tags.length ? (
          tags.map((tag, index) => {
            return (
              <button
                key={index}
                className="px-2 py-[2px] m-1 border border-violet-500 rounded-full text-xs font-semibold bg-violet-200 hover:bg-violet-400 text-violet-500 hover:text-white duration-200 ease-in"
              >
                {tag}
              </button>
            );
          })
        ) : (
          <p className="px-2 text-gray-500">No tags found</p>
        )}
      </div>
    </div>
  );
};

export default FilterCardA;
