import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Loading from "../Common/Loading";
import Pagination from "../Common/Pagination";
import {
  getVehicleFilterQuery,
  getVehicleSearchQuery,
} from "../../Queries/vehicleQueries";
import Vehicle from "./Vehicle";

function VehiclesList({ keyWord, orderBy, orderFrom }) {
  const [isSearching, setIsSearching] = useState(false);
  const [itemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (keyWord.length > 0) {
      setIsSearching(true);
      setCurrentPage(1);
    } else {
      setIsSearching(false);
    }
  }, [keyWord]);

  const {
    loading: searchLoading,
    error: searchError,
    data: searchedData,
  } = useQuery(getVehicleSearchQuery(keyWord));

  const {
    loading: filterLoading,
    error: filterError,
    data: filteredData,
  } = useQuery(getVehicleFilterQuery(orderBy, orderFrom));

  let data;
  isSearching ? (data = searchedData) : (data = filteredData);

  const getCurrentItems = () => {
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    let currentItems;
    if (data) {
      currentItems = data.vehicles.slice(indexOfFirstPost, indexOfLastPost);
    }
    return currentItems;
  };

  if (filterLoading || searchLoading) return <Loading />;
  if (filterError || searchError)
    return <p className="text-center">Something went wrong !</p>;

  return (
    <div>
      <p className="text-center">
        Displaying {getCurrentItems().length} of {data.vehicles.length} vehilces
      </p>
      {getCurrentItems().map((vehicle) => (
        <Vehicle key={vehicle.id} vehicle={vehicle} />
      ))}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.vehicles.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default VehiclesList;
