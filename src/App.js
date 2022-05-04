import React, { useState } from "react";
import PaginationComponents from "./components/PaginationComponents";
import Table from "./components/Table";
import { useUser } from "./useUser";

const App = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const { user, isLoading, isError } = useUser(pageIndex);

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
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <div className="w-4/5 bg-white rounded-lg shadow-lg">
            <Table data={user.data} />
          </div>
          <div className="mt-5 w-full">
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
