import React, { useState } from "react";

const DropDownPaginations = ({ setCount, count }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative ml-[10%]">
      <div
        className="bg-white dark:bg-gray-800 flex items-center justify-between border rounded border-gray-300 dark:border-gray-700 w-40 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <p className="pl-3 py-3 text-gray-600 dark:text-gray-4000 text-sm leading-3 tracking-normal font-normal">
          Select
        </p>
        <div className="cursor-pointer text-gray-600 dark:text-gray-400 mr-3">
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-up"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="6 15 12 9 18 15" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-up"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="6 9 12 15 18 9" />
            </svg>
          )}
        </div>
      </div>
      {show && (
        <ul className="visible transition duration-300 opacity-100 bg-indigo-50 dark:bg-gray-800 shadow rounded  pb-1 w-48 absolute -top-20">
          <li
            onClick={() => {
              setCount(6);
              setShow(!show);
            }}
            className={`cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal ${
              count === 6 && "bg-indigo-700 text-white"
            } `}
          >
            6
          </li>
          <li
            onClick={() => {
              setCount(12);
              setShow(!show);
            }}
            className={`cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal ${
              count === 12 && "bg-indigo-700 text-white"
            } `}
          >
            12
          </li>
        </ul>
      )}
    </div>
  );
};
export default DropDownPaginations;
