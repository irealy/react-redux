import React, { Component } from 'react';

import './add-item-form.sass';

export default class AddItemForm extends Component {
  state = {
    value: '',
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onAdded(this.state.value);

    this.setState({ value: ' ' });
  };

  render() {
    return (
      <form className='add-item-form' onSubmit={this.onSubmit}>
        <input
          type='text'
          className='form-control'
          value={this.state.value}
          onChange={this.onChange}
          placeholder='Add new todo'
        />
        <button>Add Item</button>
      </form>
    );
  }
}
