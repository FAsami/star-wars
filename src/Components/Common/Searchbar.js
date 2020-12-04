import React from "react";

function Searchbar({ keyWord, setKeyWord }) {
  return (
    <div className="col-md-8 m-auto  mt-5" style={{ paddingTop: "70px" }}>
      <input
        className="form-control rounded-0"
        type="text"
        value={keyWord}
        placeholder="What are you looking for ?"
        onChange={(e) => setKeyWord(e.target.value)}
      />
    </div>
  );
}

export default Searchbar;
