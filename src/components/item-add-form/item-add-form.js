import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onItemAdded(this.state.label);
  };

  render() {
    return (
      <form className="add-item-grid" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="typing..."
          onChange={this.onLabelChange}
        />
        <button className="btn btn-success">Add</button>
      </form>
    );
  }
}
