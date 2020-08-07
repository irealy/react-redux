import React from 'react';
import ReactDOM from 'react-dom';

import './styles.sass'

import Header from 'components/header/header';
import SearchField from 'components/search-field/search-field';
import TodoList from 'components/todo-list/todo-list';
import ItemStatusFilter from 'components/item-status-filter/item-status-filter';

const todoData = [
  { label: 'Drink coffe', important: false },
  { label: 'Eat myaso', important: true },
  { label: 'sleep every day', important: false },
]

const App = () => {
  return (
    <div className="todo-app">
      <Header todo={1} done={3} />
      <div className="todo-panel d-flex">
        <SearchField />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  )
};


ReactDOM.render(<App />, document.getElementById('root'));
