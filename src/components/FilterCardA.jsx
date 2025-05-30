import React from "react";

const FilterCardA = ({ title, btns }) => {
  return (
    <div className="bg-white min-h-40 border border-gray-200 font-semibold text-sm px-2 py-4 rounded-lg">
      <h3 className="mx-2 text-gray-700"> {title}</h3>
      <div className="pt-2">
        {btns.map((btn, index) => {
          return (
            <button
              key={index}
              className="px-2 py-[2px] m-1 border rounded-full bg-violet-200 border-violet-400 duration-200 ease-in"
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterCardA;
