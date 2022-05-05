import React, { useState } from "react";
import DropDownPaginations from "./components/DropDownPaginations";
import PaginationComponents from "./components/PaginationComponents";
import Table from "./components/Table";
import { useUser } from "./useUser";

const App = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [count, setCount] = useState(6);
  const { user, isLoading, isError } = useUser(pageIndex, count);
  return (
    <div className="bg-indigo-50">
      {isLoading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <p className="text-gray-500 text-lg">Loading...</p>
        </div>
      ) : isError ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <p className="text-red-600 text-lg">{isError.code}</p>
        </div>
      ) : (
        <div className="w-screen h-screen flex flex-col justify-center items-center overflow-y-auto">
          <div
            className={`w-4/5 bg-white rounded-lg shadow-lg ${
              count === 12 ? "lg:mt-[30%] 2xl:mt-[10%]" : "mt-0"
            }`}
          >
            <Table data={user.data} />
          </div>
          <div className="mt-5 w-full flex justify-between items-center">
            <DropDownPaginations setCounts={setCount} counts={count} />
            <PaginationComponents
              user={user}
              setPageIndex={setPageIndex}
              pageIndex={pageIndex}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
