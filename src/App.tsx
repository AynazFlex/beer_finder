import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Beers from "./components/BeersContainer/Beers";
import OpenBeer from "./components/OpenBeerContainer/OpenBeer";
import Search from "./components/SearchContainer/Search";

const App: React.FC = () => {
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
      <footer></footer>
    </div>
  );
};

export default App;
