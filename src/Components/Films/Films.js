import React, { useState } from "react";
import Filter from "../Common/Filter/Filter";
import { filmFilterData } from "../Common/Filter/filterData";
import Searchbar from "../Common/Searchbar";
import FilmsList from "./FilmsList";

function Films() {
  const [keyWord, setKeyWord] = useState("");
  const [orderBy, setOrderBy] = useState("id");
  const [orderFrom, setOrderFrom] = useState("ASC");

  return (
    <div>
      <Searchbar keyWord={keyWord} setKeyWord={setKeyWord} />
      <Filter
        setOrderBy={setOrderBy}
        setOrderFrom={setOrderFrom}
        filterData={filmFilterData}
      />
      <FilmsList keyWord={keyWord} orderBy={orderBy} orderFrom={orderFrom} />
    </div>
  );
}

export default Films;
