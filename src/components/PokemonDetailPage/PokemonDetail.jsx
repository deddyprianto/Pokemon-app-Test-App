/* This example requires Tailwind CSS v2.0+ */
import { ChartSquareBarIcon, HandIcon } from "@heroicons/react/solid";
import { createTrackedSelector } from "react-tracked";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFetchDataDetail } from "../../customhooks/useFetchData";
import { actionAddPokemonToList } from "../../features/rootSlice/appSlice";
import Banner from "../Banner";
const useTrackedSelector = createTrackedSelector(useSelector);
const DetailPokemonComponent = ({
  navigate,
  pokemonDetail,
  dispatch,
  list,
}) => (
  <div className="border-t border-gray-200">
    <dl>
      <div className="bg-gray-50 w-full py-5 px-5">
        <button
          onClick={() => {
            dispatch(
              actionAddPokemonToList({
                list: [
                  ...list,
                  {
                    id: pokemonDetail.id,
                    pokemonName: pokemonDetail.name,
                    img: pokemonDetail.sprites.front_default,
                    height: pokemonDetail.height,
                    weight: pokemonDetail.weight,
                  },
                ],
              })
            );
            navigate("/mypokemonlist");
          }}
          className="px-2 py-2 font-medium trackinig-wde text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 flex items-center justify-evenly"
        >
          <p>Catch Pokemon</p>
          <HandIcon className="w-5 h-5 text-gray-100" />
        </button>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Full Name</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 uppercase">
          {pokemonDetail.name}
        </dd>
      </div>
      <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Types</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <ul>
            {pokemonDetail.types.map((item, i) => (
              <li className="flex flex-col" key={i}>
                <p>Slot: {item.slot}</p>
                <p>type: {item.type.name}</p>
                <hr className="w-full h-[1px] text-gray-900" />
              </li>
            ))}
          </ul>
        </dd>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Img Pokemon</dt>

        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-col">
          <div className="w-full ">
            <img src={pokemonDetail.sprites.front_default} width={200} alt="" />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-5 w-full lg:w-1/2">
            <div className="flex flex-col justify-center items-center">
              <img src={pokemonDetail.sprites.back_default} alt="logo" />
              <p>Image Back Default</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={pokemonDetail.sprites.back_shiny} alt="logo" />
              <p>Image Back Shinny</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={pokemonDetail.sprites.front_default} alt="logo" />
              <p>Image Front Default</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={pokemonDetail.sprites.front_shiny} alt="logo" />
              <p>Image Front Shiny</p>
            </div>
          </div>
        </dd>
      </div>
      <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Abilities</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <ul>
            {pokemonDetail?.abilities.map((item, i) => (
              <li key={i}>{item.ability.name}</li>
            ))}
          </ul>
        </dd>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Base Experience</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {pokemonDetail.base_experience}
        </dd>
      </div>
      <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Location Area Encounters
        </dt>
        <dd className="mt-1 text-sm text-blue-500 cursor-pointer sm:mt-0 sm:col-span-2">
          {pokemonDetail.location_area_encounters}
        </dd>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Stats</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
            {pokemonDetail.stats.map((item, i) => (
              <li
                key={i}
                className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
              >
                <div className="w-0 flex-1 flex items-center">
                  <ChartSquareBarIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2 flex-1 w-0 truncate">
                    Base Stats: {item.base_stat}
                  </span>
                  <span className="ml-2 flex-1 w-0 truncate">
                    Effort: {item.effort}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </dd>
      </div>
    </dl>
  </div>
);
// base component
const PokemonDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useTrackedSelector();
  const { urlDataDetail } = state.sliceApp.url;
  const { list } = state.sliceApp.myPokemonList;
  const { pokemonDetail, isLoading, isError } = useFetchDataDetail({
    url: urlDataDetail,
  });

  return (
    <div className="shadow overflow-y-auto sm:rounded-lg ">
      <Banner
        backgroundBanner="bg-indigo-100"
        information="Information Pokemon"
        detailInformation="Detail Personal Pokemon"
      />
      {isLoading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : isError ? (
        <p className="text-center text-red-500">Error {isError.message}</p>
      ) : (
        <DetailPokemonComponent
          navigate={navigate}
          dispatch={dispatch}
          pokemonDetail={pokemonDetail}
          list={list}
        />
      )}
    </div>
  );
};
export default PokemonDetail;
