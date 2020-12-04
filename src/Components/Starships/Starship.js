import React from "react";
import { Link } from "react-router-dom";

function Starship({ starship }) {
  console.log(starship);
  return (
    <div className="col-md-8 mx-auto mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{starship.name}</h5>
          <ul className="list-group">
            <div className="row">
              <div className="col-md-6">
                <li className="list-group-item">
                  Hyper Drive Rating - {starship.hyperdriveRating}
                </li>
                <li className="list-group-item">Crew - {starship.crew}</li>
                <li className="list-group-item">Class - {starship.class}</li>
                <li className="list-group-item">Mglt - {starship.mglt}</li>
                <li className="list-group-item">
                  Cost In Credit - {starship.costInCredits}
                </li>
                <li className="list-group-item">
                  Max Atmosphering Speed - {starship.maxAtmospheringSpeed}
                </li>
              </div>
              <div className="col-md-6">
                <li className="list-group-item">Length - {starship.length}</li>
                <li className="list-group-item">
                  Passengers - {starship.passengers}
                </li>
                <li className="list-group-item">
                  Manufacturer - {starship.manufacturer.join(", ")}
                </li>
                <li className="list-group-item">
                  CargoCapacity - {starship.cargoCapacity}
                </li>
                <li className="list-group-item">
                  Consumables - {starship.consumables}
                </li>
              </div>
            </div>
          </ul>
          <p>
            Pilots - {starship.pilots.length <= 0 ? "N/A" : null}
            {starship.pilots.map((pilot, index) => (
              <Link key={pilot.id} to={`/persons/${pilot.id}`}>
                {pilot.name}
                {index !== starship.pilots.length ? ", " : null}
              </Link>
            ))}
            <br />
            Related films - {starship.films.length <= 0 ? "N/A" : null}
            {starship.films.map((film, index) => (
              <Link key={film.id} to={`/films/${film.id}`}>
                {film.title}
                {index !== starship.films.length ? ", " : null}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Starship;
