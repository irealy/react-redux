import React, { Component } from 'react';
import './todo-item.sass'

const classNames = require('classnames');


export default class TodoItem extends Component {

  state = {
    done: false,
    important: false,
  }

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
  
    const { label } = this.props;

    const { done, important } = this.state;

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
          onClick={this.onLabelClick}
        >
          {label}
        </span>

        <button type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
