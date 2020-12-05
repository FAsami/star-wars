import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import {
  getFilmFilterQuery,
  getFilmSearchQuery,
} from "../../Queries/filmQueries";
import Loading from "../Common/Loading";
import Pagination from "../Common/Pagination";
import Film from "./Film";

function FilmsList({ keyWord, orderBy, orderFrom }) {
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
  } = useQuery(getFilmSearchQuery(keyWord));

  const {
    loading: filterLoading,
    error: filterError,
    data: filteredData,
  } = useQuery(getFilmFilterQuery(orderBy, orderFrom));

  let data;
  isSearching ? (data = searchedData) : (data = filteredData);

  const getCurrentItems = () => {
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    let currentItems;
    if (data) {
      currentItems = data.films.slice(indexOfFirstPost, indexOfLastPost);
    }
    return currentItems;
  };

  if (filterLoading || searchLoading) return <Loading />;
  if (filterError || searchError)
    return <p className="text-center">Something went wrong !</p>;

  return (
    <div>
      <p className="text-center">
        Displaying {getCurrentItems().length} of {data.films.length} films
      </p>
      {getCurrentItems().map((film) => (
        <Film key={film.id} film={film} />
      ))}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.films.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default FilmsList;
