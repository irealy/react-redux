import React from 'react';

import './header.sass'

const Header = ({ todo, done }) => {
  return (
    <div className="header d-flex">
      <h1>Todo List</h1>
      <h2>{todo} more to do, {done} done</h2>
    </div>
  )
};

export default Header;