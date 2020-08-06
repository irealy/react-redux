import React from 'react';

import TodoItem from './todo-item';

import './todo-list.css'

const TodoList = ({ todos }) => {


  const todoList = todos.map((item) => {
    const { id, ...itemProps } = item; 
  
    return (
      <li key={id}>
        <TodoItem {...itemProps} />
      </li>
    )
  });
  return (
    <ul className={'todo-list'}>
      {todoList}
    </ul>
  )
};

export default TodoList;
