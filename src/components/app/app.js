import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "..//search-panel";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";

import "./app.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch"),
    ],
    term: "",
  };

  // f, создает элемент массива todoData.
  createTodoItem(label) {
    return {
      label: label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  // f, удаляет элемент из массива todoData.
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  // f, добавляет элемент в массив todoData.
  itemAdd = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  // f, изменяет свойство элемента done или important на true/false. Используется в f: onToggleDone, onToggleImportant
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
    };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  // f, визуально помечает элемент, как важный(синим цветом).
  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };

  // f, визуально помечает элемент, как выполненный(зачеркивает).
  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  search = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  render() {
    const { todoData, term } = this.state;

    const visibleItems = this.search(todoData, term);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <SearchPanel onSearchChange={this.onSearchChange} />
        <TodoList
          todos={visibleItems}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          onDeleted={this.deleteItem}
        />
        <ItemAddForm onItemAdded={this.itemAdd} />
      </div>
    );
  }
}
