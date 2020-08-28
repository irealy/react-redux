import React, { Component } from 'react';

import Header from 'components/header/header';
import SearchField from 'components/search-field/search-field';
import TodoList from 'components/todo-list/todo-list';
import ItemStatusFilter from 'components/item-status-filter/item-status-filter';
import AddItemForm from 'components/add-item-form/add-item-form';

import { MODES } from 'components/application/application.constants';

import './application.sass';

export default class Application extends Component {
  state = {
    todoData: [
      this.createTodoItem('Drink coffe'),
      this.createTodoItem('Eat myaso'),
      this.createTodoItem('sleep every day'),
    ],
    searchValue: '',
    mode: MODES.all, // all | active | done
  };

  createTodoItem(label) {
    const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    return {
      label,
      important: false,
      done: false,
      id,
    };
  }

  toggleProperty(list, id, property) {
    const index = list.findIndex((item) => item.id === id);
    const done = list[index][property];
    return Object.assign([], list, (list[index][property] = !done));
  }

  handleDeleteItem = (id) => {
    this.setState(({ todoData }) => {
      const newTodos = todoData.filter((todo) => todo.id !== id);
      return {
        todoData: newTodos,
      };
    });
  };

  handleAddItem = (label) => {
    const newItem = this.createTodoItem(label);

    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, newItem],
      };
    });
  };

  handleToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      const newTodos = this.toggleProperty(todoData, id, 'important');
      return {
        todoData: newTodos,
      };
    });
  };

  handleToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const newTodos = this.toggleProperty(todoData, id, 'done');
      return {
        todoData: newTodos,
      };
    });
  };

  handleOnChangeSearch = (value) => {
    this.setState({ searchValue: value });
  };

  search(items, value) {
    if (!value.length) return items;

    return items.filter((item) => {
      const label = item.label.toLowerCase();
      const lowerValue = value.toLowerCase();

      return label.indexOf(lowerValue) > -1;
    });
  }

  changeMode(items, mode) {
    const modeRules = {
      [MODES.all]: items,
      [MODES.active]: items.filter((item) => !item.done),
      [MODES.done]: items.filter((item) => item.done),
    };

    return modeRules[mode];
  }

  handleOnModeClick = (mode) => {
    this.setState({ mode });
  };

  render() {
    const { todoData, searchValue, mode } = this.state;

    const filteredItems = this.changeMode(
      this.search(todoData, searchValue),
      mode
    );

    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className='todo-app'>
        <Header todo={todoCount} done={doneCount} />
        <div className='todo-panel d-flex'>
          <SearchField onChange={this.handleOnChangeSearch} />
          <ItemStatusFilter mode={mode} onModeClick={this.handleOnModeClick} />
        </div>
        <TodoList
          todos={filteredItems}
          onDeleted={this.handleDeleteItem}
          onToggleImportant={this.handleToggleImportant}
          onToggleDone={this.handleToggleDone}
        />

        <AddItemForm onAdded={this.handleAddItem} />
      </div>
    );
  }
}
