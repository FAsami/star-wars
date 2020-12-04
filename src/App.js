import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FilmsList from "./Components/Films/FilmsList";
import Searchbar from "./Components/Common/Searchbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Common/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import PlanetsList from "./Components/Planets/PlanetsList";
import PersonsList from "./Components/Persons/PersonsList";
import VehiclesList from "./Components/Vehicles/VehiclesList";
import StarShipsList from "./Components/Starships/StarshipsList";
import Filter from "./Components/Common/Filter/Filter";

export default function App() {
  const [keyWord, setKeyWord] = useState("");
  const [orderBy, setOrderBy] = useState("episodeId");
  const [orderFrom, setOrderFrom] = useState("ASC");
  console.log(orderBy, orderFrom);
  return (
    <BrowserRouter>
      <Navbar />
      <Searchbar keyWord={keyWord} setKeyWord={setKeyWord} />
      <Filter setOrderBy={setOrderBy} setOrderFrom={setOrderFrom} />
      <Switch>
        <Route exact path="/">
          <FilmsList
            orderBy={orderBy}
            orderFrom={orderFrom}
            keyWord={keyWord}
          />
        </Route>
        <Route path="/films">
          <FilmsList
            keyWord={keyWord}
            orderBy={orderBy}
            orderFrom={orderFrom}
          />
        </Route>
        <Route path="/planets">
          <PlanetsList />
        </Route>
        <Route path="/persons">
          <PersonsList />
        </Route>
        <Route path="/vehicles">
          <VehiclesList />
        </Route>
        <Route path="/starships">
          <StarShipsList />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
