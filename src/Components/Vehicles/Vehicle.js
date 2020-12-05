import React from "react";
import { Link } from "react-router-dom";

function Vehicle({ vehicle }) {
  return (
    <div className="col-md-8 mx-auto mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{vehicle.name}</h5>
          <ul className="list-group">
            <div className="row">
              <div className="col-md-6">
                <li className="list-group-item">Model - {vehicle.model}</li>
                <li className="list-group-item">Crew - {vehicle.crew}</li>
                <li className="list-group-item">Class - {vehicle.class}</li>
                <li className="list-group-item">
                  Cost In Credit - {vehicle.costInCredits}
                </li>
                <li className="list-group-item">
                  Max Atmosphering Speed - {vehicle.maxAtmospheringSpeed}
                </li>
              </div>
              <div className="col-md-6">
                <li className="list-group-item">Length - {vehicle.length}</li>
                <li className="list-group-item">
                  Passengers - {vehicle.passengers}
                </li>
                <li className="list-group-item">
                  Manufacturer - {vehicle.manufacturer.join(", ")}
                </li>
                <li className="list-group-item">
                  CargoCapacity - {vehicle.cargoCapacity}
                </li>
                <li className="list-group-item">
                  Consumables - {vehicle.consumables}
                </li>
              </div>
            </div>
          </ul>
          <p>
            Pilots - {vehicle.pilots.length <= 0 ? "N/A" : null}
            {vehicle.pilots.map((pilot, index) => (
              <Link key={pilot.id} to={`/persons/${pilot.id}`}>
                {pilot.name}
                {index !== vehicle.pilots.length ? ", " : null}
              </Link>
            ))}
            <br />
            Related films - {vehicle.films.length <= 0 ? "N/A" : null}
            {vehicle.films.map((film, index) => (
              <Link key={film.id} to={`/persons/${film.id}`}>
                {film.title}
                {index !== vehicle.films.length ? ", " : null}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vehicle;
