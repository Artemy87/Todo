import React from "react";

import "./add-item.css";

const AddItem = ({ onAddItem }) => {
	return (
		<div className="add-item-grid">
			<input placeholder="add task..." className="placeholder" />
			<button type="button" className="btn btn-success btn-sm"
			onClick={() => onAddItem('Added task')}>
				Add
			</button>
		</div>
	);
}

export default AddItem;