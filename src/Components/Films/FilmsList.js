import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import {
  getFilmFilterQuery,
  getFilmSearchQuery,
} from "../../Queries/filmQueries";
import Loading from "../Common/Loading";
import Film from "./Film";

function FilmsList({ keyWord, orderBy, orderFrom }) {
  const [isSearching, setIsSearching] = useState(false);
  useEffect(() => {
    if (keyWord.length > 0) {
      setIsSearching(true);
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
  if (isSearching) {
    data = searchedData;
  } else {
    data = filteredData;
  }

  if (filterLoading || searchLoading) return <Loading />;
  if (filterError || searchError)
    return <p className="text-center">Something went wrong !</p>;

  return (
    <div>
      <p className="text-center">Displaying {data.films.length} films</p>
      {data.films.map((film) => (
        <Film key={film.id} film={film} />
      ))}
    </div>
  );
}

export default FilmsList;
