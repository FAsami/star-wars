import React from "react";
import "bootstrap/js/src/collapse";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Star Wars
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <NavLink
          activeClassName="text-secondary"
          className="nav-item nav-link ml-auto"
          to="/planets"
        >
          Planets
        </NavLink>
        <NavLink
          activeClassName="text-secondary"
          className="nav-item nav-link"
          to="/films"
        >
          Films
        </NavLink>
        <NavLink
          activeClassName="text-secondary"
          className="nav-item nav-link"
          to="/persons"
        >
          Persons
        </NavLink>
        <NavLink
          activeClassName="text-secondary"
          className="nav-item nav-link"
          to="/vehicles"
        >
          Vehicles
        </NavLink>
        <NavLink
          activeClassName="text-secondary"
          className="nav-item nav-link"
          to="/starships"
        >
          Starships
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
