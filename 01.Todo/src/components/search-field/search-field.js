import React, { Component } from 'react';

import './search-field.sass';

export default class SearchField extends Component {
  state = {
    value: '',
  };

  onSearchChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
    this.props.onChange(value);
  };

  render() {
    const { value } = this.state.value;

    return (
      <input
        className='form-control search-field'
        placeholder='Search todo'
        value={value}
        onChange={this.onSearchChange}
      />
    );
  }
}
