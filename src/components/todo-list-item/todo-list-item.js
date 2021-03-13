import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  render() {

		const {label, important = false} = this.props;

    const style = {
      color: important ? "tomato" : "black",
    };

    return (
      <span className="todo-list-item" style={style}>
        {label}
        <button type="button" className="btn btn-outline-success btn-sm">
          <i className="bi bi-x-square-fill" />
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm">
          <i className="bi bi-exclamation-square-fill" />
        </button>
      </span>
    );
  }
}