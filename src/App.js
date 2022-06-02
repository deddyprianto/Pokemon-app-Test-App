import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
const HomePage = lazy(() => import("./pages/HomePage"));
const PokemonDetailPage = lazy(() => import("./pages/PokemonDetailPage"));
const MyPokemonList = lazy(() => import("./pages/MyPokemonListPage"));
const App = () => {
  return (
    <BrowserRouter>
      <div className="grid grid-rows-22 bg-[#EEF3F9] w-screen h-screen">
        <Suspense
          fallback={
            <div className="text-rose-500 bg-[#EEF3F9] h-screen w-screen font-bold flex justify-center items-center">
              Loading...
            </div>
          }
        >
          <Navbar />
          <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route
              path="/pokemondetail"
              index
              element={<PokemonDetailPage />}
            />
            <Route path="/mypokemonlist" index element={<MyPokemonList />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
