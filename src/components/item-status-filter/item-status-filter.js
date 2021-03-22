import React from "react";

import "./item-status-filter";

const ItemStatusFilter = ({ showDone }) => {
  return (
    <div>
      <button type="button" className="btn btn-info">
        All
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Active
      </button>
      <button 
				type="button" 
				className="btn btn-outline-secondary"
				onClick={showDone}>
        Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;
