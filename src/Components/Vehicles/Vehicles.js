import React, { useState } from "react";
import Filter from "../Common/Filter/Filter";
import { vehicleFilterData } from "../Common/Filter/filterData";
import Searchbar from "../Common/Searchbar";
import VehiclesList from "./VehiclesList";

function Vehicles() {
  const [keyWord, setKeyWord] = useState("");
  const [orderBy, setOrderBy] = useState("id");
  const [orderFrom, setOrderFrom] = useState("ASC");

  return (
    <div>
      <Searchbar keyWord={keyWord} setKeyWord={setKeyWord} />
      <Filter
        setOrderBy={setOrderBy}
        setOrderFrom={setOrderFrom}
        filterData={vehicleFilterData}
      />
      <VehiclesList keyWord={keyWord} orderBy={orderBy} orderFrom={orderFrom} />
    </div>
  );
}

export default Vehicles;
