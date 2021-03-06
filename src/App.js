import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Common/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Films from "./Components/Films/Films";
import Planets from "./Components/Planets/Planets";
import Persons from "./Components/Persons/Persons";
import Vehicles from "./Components/Vehicles/Vehicles";
import Starships from "./Components/Starships/Starships";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Films />
        </Route>
        <Route path="/films">
          <Films />
        </Route>
        <Route path="/planets">
          <Planets />
        </Route>
        <Route path="/persons">
          <Persons />
        </Route>
        <Route path="/vehicles">
          <Vehicles />
        </Route>
        <Route path="/starships">
          <Starships />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
