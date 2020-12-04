import React from "react";
import { Link } from "react-router-dom";

function Person({ person }) {
  console.log(person.homeworld);
  return (
    <div className="col-md-8 mx-auto mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{person.name}</h5>
          <ul className="list-group">
            <div className="row">
              <div className="col-md-6">
                <li className="list-group-item">Height - {person.height}</li>
                <li className="list-group-item">
                  Birthday - {person.birthDay ? person.birthDay : "N/A"}
                </li>
                <li className="list-group-item">
                  Mass- {person.mass ? person.mass : "N/A"}
                </li>
                <li className="list-group-item">
                  Skin Color - {person.skinColor.join(", ")}
                </li>
              </div>
              <div className="col-md-6">
                <li className="list-group-item">Gender - {person.gender}</li>
                <li className="list-group-item">
                  Eye Color - {person.eyeColor.join(", ")}
                </li>
                <li className="list-group-item">
                  Hair Color -{" "}
                  {person.hairColor.length > 0
                    ? person.hairColor.join(", ")
                    : "N/A"}
                </li>
              </div>
            </div>
          </ul>
          {person.homeworld && (
            <p className="pt-3">
              Home World -
              <Link
                key={person.homeworld.id}
                to={`/planets/${person.homeworld.id}`}
              >
                {person.homeworld.name}
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Person;
