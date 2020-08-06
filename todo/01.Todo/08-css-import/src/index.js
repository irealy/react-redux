import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import SearchField from './components/search-field';
import TodoList from './components/todo-list';

import './styles.css'

const todoData = [
  { label: 'Drink coffe', important: false },
  { label: 'Eat myaso', important: true },
  { label: 'sleep every day', important: false },
]

const App = () => {
  return (
    <div className={'todo-app'}>
      <Header todo={1} done={3} />
      <div className={'todo-panel d-flex'}>
        <SearchField/>
        <TodoList todos={todoData} />
      </div>
    </div>
  )
};


ReactDOM.render(<App />, document.getElementById('root'));
