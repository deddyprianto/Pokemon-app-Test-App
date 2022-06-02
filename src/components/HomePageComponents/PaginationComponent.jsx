import React from "react";

const PaginationComponent = ({ setPaginatePage, prev, next }) => {
  return (
    <div className="flex">
      <button
        disabled={!prev ? true : false}
        onClick={() => setPaginatePage(prev)}
        className={`px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md dark:bg-gray-900 dark:text-gray-600 shadow-lg ${
          !prev ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
      >
        <div className="flex items-center -mx-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          <span className="mx-1">previous</span>
        </div>
      </button>
      <div
        onClick={() => setPaginatePage(next)}
        className="cursor-pointer px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 shadow-lg"
      >
        <div className="flex items-center -mx-1">
          <span className="mx-1">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PaginationComponent;
