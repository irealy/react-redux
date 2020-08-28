import React, { Component } from 'react';

import { MODES } from 'components/application/application.constants';

import './item-status-filter.sass';

export default class ItemStatusFilter extends Component {
  state = {
    mode: MODES.all,
  };

  onButtonClick = (mode) => {
    this.setState({ mode });
    this.props.onModeClick(mode);
  };

  render() {
    const { mode } = this.props;
    const availableModes = Object.keys(MODES);

    const buttons = availableModes.map((button) => {
      const classes = button === mode ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          type='button'
          key={button}
          className={'btn ' + classes}
          onClick={() => this.onButtonClick(button)}
        >
          {button}
        </button>
      );
    });

    return <div className='btn-group'>{buttons}</div>;
  }
}
