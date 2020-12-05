import React, { useState } from "react";
import Filter from "../Common/Filter/Filter";
import { planetFilterData } from "../Common/Filter/filterData";
import Searchbar from "../Common/Searchbar";
import PlanetsList from "./PlanetsList";

function Planets() {
  const [keyWord, setKeyWord] = useState("");
  const [orderBy, setOrderBy] = useState("id");
  const [orderFrom, setOrderFrom] = useState("ASC");

  return (
    <div>
      <Searchbar keyWord={keyWord} setKeyWord={setKeyWord} />
      <Filter
        setOrderBy={setOrderBy}
        setOrderFrom={setOrderFrom}
        filterData={planetFilterData}
      />
      <PlanetsList keyWord={keyWord} orderBy={orderBy} orderFrom={orderFrom} />
    </div>
  );
}

export default Planets;
