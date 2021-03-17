import React from "react";
import ItemStatusFilter from '../item-status-filter';

import "./search-panel.css";

const SearchPanel = () => {
  return (
    <form className="search-panel">
      <input
					type="text"
					placeholder="search"
					className="form-search"/>
			<ItemStatusFilter />
    </form>
  );
};

export default SearchPanel;
