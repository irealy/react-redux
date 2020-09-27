import React, { Component } from 'react';
import ItemList from 'components/item-list/item-list';
import ItemDetails from 'components/item-details/item-details';
import SwapiService from 'services/swapi-service';
import InfoTable from 'components/info-table/info-table';
import ErrorBoundry from 'components/error-boundry/error-boundry';
import ErrorButton from 'components/error-button/error-button';

export default class PlanetsList extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
  };

  handleOnPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const { error, selectedPerson } = this.state;

    const list = (
      <ItemList
        onSelectedItem={this.handleOnPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(item) => item.name}
      </ItemList>
    );

    const details = <ItemDetails personId={selectedPerson} />;

    return (
      <>
        <ErrorBoundry>
          <InfoTable list={list} details={details} />
        </ErrorBoundry>
      </>
    );
  }
}
