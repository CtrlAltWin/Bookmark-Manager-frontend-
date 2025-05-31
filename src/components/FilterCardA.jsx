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
                className="px-2 py-[2px] m-1 border rounded-full font-semibold bg-violet-200 border-violet-400 duration-200 ease-in"
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
