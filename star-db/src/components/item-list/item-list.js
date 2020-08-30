import React, { Component } from 'react';

import './item-list.sass';
import SwapiService from 'services/swapi-service';
import Spinner from 'components/spinner/spinner';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({ peopleList })
      });
  }

  renderList(array) {
    if (array) {
      return array.map(({ id, name }) => {
        return (
          <li
            className='list-group-item'
            key={id}
            onClick={() => this.props.onSelectedItem(id)}
          >
            {name}
          </li>
        );
      });
    }
  }

  render() {
    const { peopleList } = this.state;
    const items = this.renderList(peopleList);

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
