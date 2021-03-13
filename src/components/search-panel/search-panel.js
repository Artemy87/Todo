import React from "react";
import ItemStatusFilter from '../item-status-filter';

import "./search-panel.css";

const SearchPanel = () => {
  return (
    <div className="search-panel">
      <input placeholder="search" className="placeholder me-md-2"/>
			<ItemStatusFilter />
    </div>
  );
};

export default SearchPanel;
