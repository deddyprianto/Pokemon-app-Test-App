import React, { useEffect, useState } from "react";
import DropDownPaginations from "./components/DropDownPaginations";
import PaginationComponents from "./components/PaginationComponents";
import Table from "./components/Table";
import { useUser } from "./useUser";
import { statevalueProvider } from "./StateProvider";
import { defaultState } from "./reducer";

const App = () => {
  const [{ pages }, dispatch] = statevalueProvider();
  const [counts, setCounts] = useState(6);
  const { users, isLoading, isError } = useUser(pages, counts);
  useEffect(() => {
    dispatch({
      type: defaultState.STATE_USERS,
      payload: users,
    });
  }, [users]);

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
              counts === 12 ? "lg:mt-[30%] 2xl:mt-[10%]" : "mt-0"
            }`}
          >
            <Table />
          </div>
          <div className="mt-5 w-full flex justify-between items-center">
            <DropDownPaginations setCount={setCounts} count={counts} />
            <PaginationComponents />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
