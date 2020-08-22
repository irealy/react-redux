import React, { Component } from 'react';
import './todo-item.sass'

const classNames = require('classnames');


export default class TodoItem extends Component {

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      }
    })
  }

  onMarkImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      }
    })
  }

  render() {

    const { label, onDeleted, onToggleDone, onToggleImportant, important, done } = this.props;

    const classes = classNames(
      'todo-item',
      {
        'done': done,
        'important': important
      }
    )

    return (
      <span className={classes}>
        <span
          className="todo-item-label"
          onClick={onToggleDone}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
