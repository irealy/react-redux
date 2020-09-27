import React, { Component } from 'react';
import ItemList from 'components/item-list/item-list';
import ItemDetails from 'components/item-details/item-details';
import SwapiService from 'services/swapi-service';
import InfoTable from 'components/info-table/info-table';
import ErrorBoundry from 'components/error-boundry/error-boundry';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  handleOnPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const { selectedPerson } = this.state;

    const list = (
      <ItemList
        onSelectedItem={this.handleOnPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {renderLabel}
      </ItemList>
    );

    const details = <ItemDetails personId={selectedPerson} />;

    return (
      <ErrorBoundry>
        <InfoTable list={list} details={details} />
      </ErrorBoundry>
    );
  }
}

const renderLabel = ({ name, gender, birthYear }) => {
  return (
    <div>
      {name} (<i>{gender}</i>, <b>{birthYear}</b>)
    </div>
  );
};
