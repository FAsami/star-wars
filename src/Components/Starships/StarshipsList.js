import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Loading from "../Common/Loading";
import Pagination from "../Common/Pagination";
import {
  getStarShipFilterQuery,
  getStarShipSearchQuery,
} from "../../Queries/starShipQueries";
import Starship from "./Starship";

function StarShipsList({ keyWord, orderBy, orderFrom }) {
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
  } = useQuery(getStarShipSearchQuery(keyWord));

  const {
    loading: filterLoading,
    error: filterError,
    data: filteredData,
  } = useQuery(getStarShipFilterQuery(orderBy, orderFrom));

  let data;
  isSearching ? (data = searchedData) : (data = filteredData);

  const getCurrentItems = () => {
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    let currentItems;
    if (data) {
      currentItems = data.starships.slice(indexOfFirstPost, indexOfLastPost);
    }
    return currentItems;
  };

  if (filterLoading || searchLoading) return <Loading />;
  if (filterError || searchError)
    return <p className="text-center">Something went wrong !</p>;

  return (
    <div>
      <p className="text-center">
        Displaying {getCurrentItems().length} of {data.starships.length}{" "}
        starships
      </p>
      {getCurrentItems().map((starship) => (
        <Starship key={starship.id} starship={starship} />
      ))}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.starships.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default StarShipsList;
