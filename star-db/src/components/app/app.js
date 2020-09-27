import React, { Component } from 'react';

import './app.sass';
import Header from 'components/header/header';
import ErrorIndicator from 'components/error-indicator/error-indicator';
import SwapiService from 'services/swapi-service';
import InfoTable from 'components/info-table/info-table';
import ItemDetails, { Record } from 'components/item-details/item-details';
import ItemList from 'components/item-list/item-list';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    randomPlanet: Math.floor(Math.random() * 20),
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarhipImage,
    } = this.swapiService;

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color"/>

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarhipImage}
      />
    );

    return (
      <>
        <Header />
        <InfoTable left={personDetails} right={starshipDetails} />
      </>
    );
  }
}
