/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function PaginationComponents({
  setPageIndex,
  pageIndex,
  user,
}) {
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  return (
    <div className="bg-indigo-50 flex justify-center sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
        <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
      </div>
      <div className="flex justify-end items-center w-[90%] ">
        <div className="">
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={() => {
                if (pageIndex < user.total_pages) {
                  setPrev(!prev);
                } else {
                  setPageIndex(pageIndex - 1);
                  setNext(false);
                }
              }}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50 cursor-pointer"
              disabled={prev}
            >
              <span className="sr-only">Prev</span>
              <ChevronLeftIcon
                className={`h-5 w-5 ${
                  prev ? "text-gray-300" : "text-gray-500"
                }`}
                aria-hidden="true"
              />
            </button>
            {[...Array(user.total_pages).keys()].map((itemCount) => {
              let item = itemCount + 1;
              return (
                <a
                  onClick={() => setPageIndex(item)}
                  key={item}
                  className={`bg-white  hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer ${
                    user.page === item
                      ? "border-indigo-500 text-indigo-600"
                      : "border-gray-300 text-gray-500 "
                  }`}
                >
                  {item}
                </a>
              );
            })}
            <button
              onClick={() => {
                if (pageIndex > user.total_pages) {
                  setNext(!next);
                } else {
                  setPageIndex(pageIndex + 1);
                  setPrev(false);
                }
              }}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50 cursor-pointer"
              disabled={next}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon
                className={`h-5 w-5 ${
                  next ? "text-gray-300" : "text-gray-500"
                }`}
                aria-hidden="true"
              />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
