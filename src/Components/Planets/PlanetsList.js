import React from "react";
import { useQuery } from "@apollo/client";
import { getPlanetsQuery } from "../../Queries/planetQueries";
import Loading from "../Common/Loading";
import Planet from "./Planet";

function PlanetsList({ keyWord }) {
  const { loading, error, data } = useQuery(getPlanetsQuery);

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  if (!loading && !error) {
    if (data.planets.length !== 0) {
      return (
        <div>
          <p className="text-center">
            Displaying {data.planets.length} plannets
          </p>
          {data.planets.map((planet) => (
            <Planet key={planet.id} planet={planet} />
          ))}
        </div>
      );
    }

    return <p className="text-center">No result found</p>;
  }
}

export default PlanetsList;
