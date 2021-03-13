import React from "react";

import "./search-panel.css";

const SearchPanel = () => {
  return (
    <div className="search-panel">
      <input placeholder="search" className="placeholder me-md-2"/>
      <button type="button" className="btn btn-info">All</button>
      <button type="button" className="btn btn-outline-secondary">Active</button>
      <button type="button" className="btn btn-outline-secondary">Done</button>
    </div>
  );
};

export default SearchPanel;
