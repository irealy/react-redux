import React, { Component } from 'react';

import './add-item-form.sass';

export default class AddItemForm extends Component {
  render() {
    const { onAdded } = this.props;

    return (
      <div className="add-item-form" onClick={() => onAdded('loh')}>
        <button>Add Item</button>
      </div>
    )
  }
}