import React from 'react';

import './todo-list.sass'
import TodoItem from 'components/todo-item/todo-item';

const TodoList = ({ todos }) => {
  const todoList = todos.map((item) => {
    const { id, ...itemProps } = item; 
  
    return (
      <li key={id} className="list-group-item todo-list__item">
        <TodoItem {...itemProps} />
      </li>
    )
  });
  return (
    <ul className="list-group todo-list">
      {todoList}
    </ul>
  )
};

export default TodoList;
