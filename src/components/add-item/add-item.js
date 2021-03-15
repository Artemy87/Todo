import React, { Component } from "react";

import "./add-item.css";

export default class AddItem extends Component {
  render() {

		const { onAddItem } = this.props;

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
}
