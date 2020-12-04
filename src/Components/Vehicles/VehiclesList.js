import React from "react";
import { useQuery } from "@apollo/client";
import Loading from "../Common/Loading";
import { getVehiclesQuery } from "../../Queries/vehicleQueries";
import Vehicle from "./Vehicle";

function VehiclesList({ keyWord }) {
  const { loading, error, data } = useQuery(getVehiclesQuery);

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  if (!loading && !error) {
    if (data.vehicles.length !== 0) {
      return (
        <div>
          <p className="text-center">
            Displaying {data.vehicles.length} vehicles
          </p>
          {data.vehicles.map((vehicle) => (
            <Vehicle key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      );
    }

    return <p className="text-center">No result found</p>;
  }
}

export default VehiclesList;
