import React from "react";

const FilterCardB = ({ title, categories }) => {
  return (
    <div className="bg-white border border-gray-200 font-semibold text-sm px-2 py-4 rounded-lg">
      <h3 className="mx-2 text-gray-700"> {title}</h3>
      <div className="pt-2">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className="p-2 m-1 border border-gray-200 rounded-lg hover:bg-violet-200 hover:border-violet-300 duration-200 ease-in"
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterCardB;
