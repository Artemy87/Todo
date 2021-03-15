import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "..//search-panel";
import TodoList from "../todo-list";
import AddItem from "../add-item";

import "./app.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch"),
    ],
  };

  createTodoItem(label) {
    return {
      label: label,
      important: false,
      id: this.maxId++,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  onToggleImportant = (id) => {
    console.log(`Toggle important ${id}`);
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newArray,
      };
    });
  };

  render() {
    const { todoData } = this.state;

    const doneCount = todoData.filter((el) => el.done).length;

    const todoCount = todoData.length - doneCount;

    return (
      <div className="app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <SearchPanel />
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItem onAddItem={this.addItem} />
      </div>
    );
  }
}
