import React, { useState } from "react";
import Filter from "../Common/Filter/Filter";
import { personFilterData } from "../Common/Filter/filterData";
import Searchbar from "../Common/Searchbar";
import PersonsList from "./PersonsList";

function Persons() {
  const [keyWord, setKeyWord] = useState("");
  const [orderBy, setOrderBy] = useState("id");
  const [orderFrom, setOrderFrom] = useState("ASC");

  return (
    <div>
      <Searchbar keyWord={keyWord} setKeyWord={setKeyWord} />
      <Filter
        setOrderBy={setOrderBy}
        setOrderFrom={setOrderFrom}
        filterData={personFilterData}
      />
      <PersonsList keyWord={keyWord} orderBy={orderBy} orderFrom={orderFrom} />
    </div>
  );
}

export default Persons;
