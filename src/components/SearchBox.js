import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        type="text"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="type here to Search...."
      />
    </div>
  );
};

export default SearchBox;
