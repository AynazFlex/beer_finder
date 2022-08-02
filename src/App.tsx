import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Beers from "./components/BeersContainer/Beers";
import OpenBeer from "./components/OpenBeerContainer/OpenBeer";
import Search from "./components/SearchContainer/Search";
import { RootState } from "./store/store";
import Error from "./components/ErrorContainer/Error"

const App: React.FC = () => {
  const error = useSelector((state: RootState) => state.beers.error);

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <div className="app-title">Search for beers</div>
        <Search />
      </header>
      <Routes>
        <Route path="/" element={<Beers />} />
        <Route path="beer/:id" element={<OpenBeer />} />
      </Routes>
      {error.length > 0 && <Error error={error} />}
      <footer></footer>
    </div>
  );
};

export default App;
