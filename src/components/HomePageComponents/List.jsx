import React, { useState } from "react";
import PaginationComponent from "./PaginationComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFetchData } from "../../customhooks/useFetchData";
import { actionSaveUrlDetail } from "../../features/rootSlice/appSlice";

const RowTable = ({ item, navigate, dispatch }) => (
  <tr className="h-14 border-gray-300 dark:border-gray-200 border-b">
    <td className="pl-8  pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
      <input
        type="checkbox"
        className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none"
        onClick="tableInteract(this)"
      />
    </td>
    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
      {item.name}
    </td>
    <td
      onClick={() => {
        dispatch(actionSaveUrlDetail({ urlDataDetail: item.url }));
        navigate("/pokemondetail");
      }}
      className="cursor-pointer text-sm pr-6 whitespace-no-wrap text-blue-500 dark:text-gray-100 tracking-normal leading-4"
    >
      See Detail
    </td>
  </tr>
);
const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paginatePage, setPaginatePage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const { pokemon, isLoading, isError } = useFetchData({
    paginate: paginatePage,
  });

  return (
    <div className="py-5 h-full overflow-y-auto">
      <div className="mx-auto container dark:bg-gray-800 shadow rounded ">
        <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
          <div className="text-gray-500 flex items-center w-full text-xl">
            <p className="text-sm lg:text-lg mb-2">List Pokemon</p>
          </div>
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-end">
            <PaginationComponent
              setPaginatePage={setPaginatePage}
              prev={pokemon?.previous}
              next={pokemon?.next}
            />
          </div>
        </div>
        <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
          <table className="min-w-full bg-white dark:bg-gray-800">
            <thead>
              <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                  <input
                    type="checkbox"
                    className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none"
                    onClick="checkAll(this)"
                  />
                </th>
                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left  tracking-normal leading-4 text-lg">
                  Name Pokemon
                </th>
                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-lg tracking-normal leading-4">
                  See Detail
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                  <td className="text-center">Get Data...</td>
                </tr>
              ) : isError ? (
                <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                  <td className="text-center text-red-500">
                    Error {isError.message}
                  </td>
                </tr>
              ) : (
                pokemon?.results?.map((item, i) => (
                  <RowTable
                    dispatch={dispatch}
                    key={i}
                    item={item}
                    navigate={navigate}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default List;
