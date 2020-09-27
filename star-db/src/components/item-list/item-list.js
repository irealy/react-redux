import React, { Component } from 'react';

import './item-list.sass';
import SwapiService from 'services/swapi-service';
import Spinner from 'components/spinner/spinner';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    list: null,
  };

  componentDidMount() {

    const { getData } = this.props;

    getData()
      .then((list) => {
        this.setState({ list })
      });
  }

  renderList(array) {
    const { children, onSelectedItem } = this.props;
    if (array) {
      return array.map((item) => {
        const id = item.id;
        const label = children(item);
        return (
          <li
            className='list-group-item'
            key={id}
            onClick={() => onSelectedItem(id)}
          >
            {label}
          </li>
        );
      });
    }
  }

  render() {
    const { list } = this.state;
    const items = this.renderList(list);

    return (
      <>
        {!items && <Spinner />}
        {items && (
          <ul className='item-list list-group'>
            {items}
          </ul>
        )}
      </>
    );
  }
}
