/* eslint-disable jsx-a11y/anchor-is-valid */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function PaginationComponents({
  setPageIndex,
  pageIndex,
  user,
}) {
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
            <a
              onClick={() => setPageIndex(pageIndex - 1)}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {[...Array(user.total_pages).keys()].map((itemCount) => {
              let item = itemCount + 1;
              return (
                <a
                  onClick={() => setPageIndex(item)}
                  key={item}
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer"
                >
                  {item}
                </a>
              );
            })}
            <a
              onClick={() => setPageIndex(pageIndex + 1)}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
