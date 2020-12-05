import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  getPlanetFilterQuery,
  getPlanetSearchQuery,
} from "../../Queries/planetQueries";
import Loading from "../Common/Loading";
import Pagination from "../Common/Pagination";
import Planet from "./Planet";

function PlanetsList({ keyWord, orderBy, orderFrom }) {
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
  } = useQuery(getPlanetSearchQuery(keyWord));

  const {
    loading: filterLoading,
    error: filterError,
    data: filteredData,
  } = useQuery(getPlanetFilterQuery(orderBy, orderFrom));

  let data;
  isSearching ? (data = searchedData) : (data = filteredData);

  const getCurrentItems = () => {
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    let currentItems;
    if (data) {
      currentItems = data.planets.slice(indexOfFirstPost, indexOfLastPost);
    }
    return currentItems;
  };

  if (filterLoading || searchLoading) return <Loading />;
  if (filterError || searchError)
    return <p className="text-center">Something went wrong !</p>;

  return (
    <div>
      <p className="text-center">
        Displaying {getCurrentItems().length} of {data.planets.length} planets
      </p>
      {getCurrentItems().map((planet) => (
        <Planet key={planet.id} planet={planet} />
      ))}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.planets.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default PlanetsList;
