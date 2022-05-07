/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { statevalueProvider } from "../StateProvider";
import { defaultState } from "../reducer";

const PaginationComponents = () => {
  const [{ pages: pageIndex, users }, dispatch] = statevalueProvider();

  return (
    <div className="flex mr-[10%]">
      <button
        onClick={() => {
          dispatch({
            type: defaultState.STATE_PAGEINDEX,
            payload: pageIndex - 1,
          });
        }}
        disabled={pageIndex < users?.total_pages ? true : false}
        className={`px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md dark:bg-gray-900 dark:text-gray-600 ${
          pageIndex < users?.total_pages
            ? "cursor-not-allowed"
            : "cursor-pointer"
        }`}
      >
        <div
          className={`flex items-center -mx-1 ${
            pageIndex < users?.total_pages ? "opacity-50" : "opacity-100"
          }`}
        >
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
      {[...Array(users?.total_pages).keys()].map((itemCount) => {
        let item = itemCount + 1;
        return (
          <a
            onClick={() =>
              dispatch({
                type: defaultState.STATE_PAGEINDEX,
                payload: item,
              })
            }
            key={item}
            className={`cursor-pointer hidden px-4 py-2 mx-1 transition-colors duration-200 transform  rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${
              users?.page === item
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {item}
          </a>
        );
      })}
      <button
        onClick={() => {
          dispatch({
            type: defaultState.STATE_PAGEINDEX,
            payload: pageIndex + 1,
          });
        }}
        className={`px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md dark:bg-gray-900 dark:text-gray-600 ${
          pageIndex >= users?.total_pages
            ? "cursor-not-allowed"
            : "cursor-pointer"
        }`}
        disabled={pageIndex >= users?.total_pages ? true : false}
      >
        <div
          className={`flex items-center -mx-1  ${
            pageIndex >= users?.total_pages ? " opacity-50" : "opacity-100"
          }`}
        >
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
      </button>
    </div>
  );
};
export default PaginationComponents;
