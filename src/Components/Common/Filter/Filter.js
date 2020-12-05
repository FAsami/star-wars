import React from "react";

function Filter({ setOrderBy, setOrderFrom, filterData }) {
  return (
    <div className="col-md-8 mx-auto py-2">
      <label htmlFor="filter">Order By</label>
      <select
        id="filter"
        onChange={(e) => setOrderBy(e.target.value)}
        className="ml-2"
      >
        {filterData.map(({ id, value, label }) => (
          <option key={id} value={value}>
            {label}
          </option>
        ))}
      </select>
      <select onChange={(e) => setOrderFrom(e.target.value)}>
        <option value="ASC"> ASC</option>
        <option value="DESC"> DESC</option>
      </select>
    </div>
  );
}

export default Filter;
