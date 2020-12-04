import React from "react";

function Filter({ setOrderBy, setOrderFrom }) {
  return (
    <div className="col-md-8 mx-auto">
      <label htmlFor="filter">Order By</label>
      <select
        id="filter"
        onChange={(e) => setOrderBy(e.target.value)}
        className="ml-2"
      >
        <option value="episodeId">Episode ID</option>
        <option value="title"> Title</option>
        <option value="director"> Director</option>
      </select>
      <select onChange={(e) => setOrderFrom(e.target.value)}>
        <option value="ASC"> ASC</option>
        <option value="DESC"> DESC</option>
      </select>
    </div>
  );
}

export default Filter;
