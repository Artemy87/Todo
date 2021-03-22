import React, { Component } from "react";
import ItemStatusFilter from "../item-status-filter";

import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  onSearchChange = (event) => {
    const term = event.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <form className="search-panel">
        <input
          type="text"
          placeholder="search"
          className="form-search"
          onChange={this.onSearchChange}
          value={this.state.term}
        />
        <ItemStatusFilter />
      </form>
    );
  }
}
