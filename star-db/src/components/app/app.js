import React, { Component } from 'react';

import './app.sass';
import Header from 'components/header/header';
import RandomPlanet from 'components/random-planet/random-planet';
import ErrorButton from 'components/error-button/error-button';
import ErrorIndicator from 'components/error-indicator/error-indicator';
import PeoplePage from 'components/people-page/people-page';
import SwapiService from 'services/swapi-service';
import PlanetsList from 'components/planets-list/planets-list';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    randomPlanet: Math.floor(Math.random() * 20),
    hasError: false,
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    const { randomPlanet } = this.state;

    return (
      <div>
        <Header />
        <RandomPlanet id={randomPlanet}/>
        <PeoplePage />

      </div>
    );
  }
};
