import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Loading from "../Common/Loading";
import Pagination from "../Common/Pagination";
import {
  getPersonFilterQuery,
  getPersonSearchQuery,
} from "../../Queries/personQueries";
import Person from "./Person";

function PersonsList({ keyWord, orderBy, orderFrom }) {
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
  } = useQuery(getPersonSearchQuery(keyWord));

  const {
    loading: filterLoading,
    error: filterError,
    data: filteredData,
  } = useQuery(getPersonFilterQuery(orderBy, orderFrom));

  let data;
  isSearching ? (data = searchedData) : (data = filteredData);

  const getCurrentItems = () => {
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    let currentItems;
    if (data) {
      currentItems = data.persons.slice(indexOfFirstPost, indexOfLastPost);
    }
    return currentItems;
  };

  if (filterLoading || searchLoading) return <Loading />;
  if (filterError || searchError)
    return <p className="text-center">Something went wrong !</p>;

  return (
    <div>
      <p className="text-center">
        Displaying {getCurrentItems().length} of {data.persons.length} persons
      </p>
      {getCurrentItems().map((person) => (
        <Person key={person.id} person={person} />
      ))}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.persons.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default PersonsList;
