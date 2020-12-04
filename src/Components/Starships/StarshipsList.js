import React from "react";
import { useQuery } from "@apollo/client";
import Loading from "../Common/Loading";
import { getStarShipQuery } from "../../Queries/starShipQueries";
import Starship from "./Starship";

function StarShipsList({ keyWord }) {
  const { loading, error, data } = useQuery(getStarShipQuery);

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;
  console.log(data);
  if (!loading && !error) {
    if (data.starships.length !== 0) {
      return (
        <div>
          <p className="text-center">
            Displaying {data.starships.length} starships
          </p>
          {data.starships.map((starship) => (
            <Starship key={starship.id} starship={starship} />
          ))}
        </div>
      );
    }

    return <p className="text-center">No result found</p>;
  }
}

export default StarShipsList;
