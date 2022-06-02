import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTrackedSelector } from "react-tracked";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, TrashIcon } from "@heroicons/react/solid";
import Banner from "../Banner";
import { actionAddPokemonToList } from "../../features/rootSlice/appSlice";

const useTrackedSelector = createTrackedSelector(useSelector);

const MyListPokemon = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const state = useTrackedSelector();
  const { list } = state.sliceApp.myPokemonList;

  return (
    <div className="py-8 w-full h-full overflow-y-auto">
      <div className="w-full">
        <Banner
          backgroundBanner="bg-indigo-100"
          information="My Pokemon List"
          detailInformation="List all My catch Pokemon"
        />
      </div>
      <div className="w-full ">
        <button
          onClick={() => navigate("/", { replace: true })}
          className="mt-5 ml-2 flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span className="mx-1">Back</span>
        </button>
      </div>
      <div className="lg:flex items-center justify-center w-full flex-wrap">
        {list.length === 0 ? (
          <p>List of captured pokemon not found, Catch Pokemon now!</p>
        ) : (
          list.map((item, i) => (
            <div
              key={i}
              className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded mt-3 m-2"
            >
              <div className="flex items-center border-b border-gray-200 pb-6">
                <img
                  src={item.img}
                  alt="logo"
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex items-start justify-between w-full">
                  <div className="pl-3 w-full">
                    <p className="text-xl font-medium leading-5 text-gray-800">
                      {item.pokemonName}
                    </p>
                    <p className="text-sm leading-normal pt-2 text-gray-500">
                      Weight: {item.weight}
                    </p>
                    <p className="text-sm leading-normal pt-2 text-gray-500">
                      Height: {item.height}
                    </p>
                  </div>
                  <div>
                    <TrashIcon
                      onClick={() =>
                        dispatch(
                          actionAddPokemonToList({
                            list: list.filter(
                              (listData) => listData.id !== item.id
                            ),
                          })
                        )
                      }
                      className="w-5 h-5 text-red-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="px-2">
                <p className="text-sm leading-5 py-4 text-gray-600">
                  A group of people interested in dogecoin, the currency and a
                  bit of side for the meme and dof that we all know and love.
                  These cases are perfectly simple and easy to distinguish.
                </p>
                <div className="flex">
                  <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">
                    #pokeapi.co
                  </div>
                  <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">
                    #pokemonGoo
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default MyListPokemon;
