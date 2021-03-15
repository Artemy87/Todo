import React, { Component } from "react";

import "./add-item.css";

export default class AddItem extends Component {
  render() {
    return (
      <div className="add-item-grid">
				<span></span>
        <button type="button" className="add-item btn btn-success">
          Add element
        </button>
      </div>
    );
  }
}
