import React, { Component } from 'react';
import ItemList from 'components/item-list/item-list';
import PersonDetails from 'components/person-details/person-details';
import ErrorIndicator from 'components/error-indicator/error-indicator';
import SwapiService from 'services/swapi-service';
import InfoTable from 'components/info-table/info-table';

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
    const { selectedPerson, error } = this.state;

    const list = (
      <ItemList
        onSelectedItem={this.handleOnPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderLabel={renderLabel}
      />
    );

    const details = <PersonDetails personId={selectedPerson} />;

    return (
      <>
        {error && <ErrorIndicator />}
        {!error && <InfoTable list={list} details={details} />}
      </>
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
