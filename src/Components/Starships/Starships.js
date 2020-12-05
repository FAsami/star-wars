import React, { useState } from "react";
import Filter from "../Common/Filter/Filter";
import { starshipFilterData } from "../Common/Filter/filterData";
import Searchbar from "../Common/Searchbar";
import StarShipsList from "./StarshipsList";

function Starships() {
  const [keyWord, setKeyWord] = useState("");
  const [orderBy, setOrderBy] = useState("id");
  const [orderFrom, setOrderFrom] = useState("ASC");

  return (
    <div>
      <Searchbar keyWord={keyWord} setKeyWord={setKeyWord} />
      <Filter
        setOrderBy={setOrderBy}
        setOrderFrom={setOrderFrom}
        filterData={starshipFilterData}
      />
      <StarShipsList
        keyWord={keyWord}
        orderBy={orderBy}
        orderFrom={orderFrom}
      />
    </div>
  );
}

export default Starships;
