import React from "react";

import "./search-panel.css";

const SearchPanel = () => {
  return (
    <div className="search-panel">
      <input placeholder="search" />
      <button type="button" className="btn btn-secondary">All</button>
      <button type="button" className="btn btn-light">Active</button>
      <button type="button" className="btn btn-light">Done</button>
    </div>
  );
};

export default SearchPanel;
