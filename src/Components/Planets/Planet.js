import React from "react";
import { Link } from "react-router-dom";

function Planet({ planet }) {
  console.log(planet);
  return (
    <div className="col-md-8 mx-auto mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{planet.name}</h5>
          <ul className="list-group">
            <div className="row">
              <div className="col-md-6">
                <li className="list-group-item">Gravity - {planet.gravity}</li>
                <li className="list-group-item">
                  Population - {planet.population}
                </li>
                <li className="list-group-item">
                  Rotational period - {planet.rotationPeriod}
                </li>
                <li className="list-group-item">
                  Surface water - {planet.surfaceWater}
                </li>
              </div>
              <div className="col-md-6">
                <li className="list-group-item">
                  Terrain - {planet.terrain.join(", ")}
                </li>
                <li className="list-group-item">
                  Diameter - {planet.diameter}
                </li>
                <li className="list-group-item">
                  Orbital Period - {planet.orbitalPeriod}
                </li>
                <li className="list-group-item">
                  Climate - {planet.climate.join(", ")}
                </li>
              </div>
            </div>
          </ul>
          <p>
            Residents - {planet.residents.length <= 0 ? "N/A" : null}
            {planet.residents.map((resident, index) => (
              <Link key={resident.id} to={`/persons/${resident.id}`}>
                {resident.name}
                {index !== planet.residents.length ? ", " : null}
              </Link>
            ))}
          </p>
          <p className="py-2">
            <small>
              Last updated : {new Date(planet.updatedAt).toDateString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Planet;
