import React, { Component } from 'react';
import SwapiService from 'services/swapi-service';

import './random-planet.sass';
import Spinner from 'components/spinner/spinner';
import ErrorIndicator from 'components/error-indicator/error-indicator';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  onError = (error) => {
    this.setState({
      error: true,
      loading: false,
    })
  };

  updatePlanet() {
    const id = 120000;

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const {
      planet: { id, population, rotationPeriod, diameter, name },
      loading,
      error,
    } = this.state;


    return (
      <div className='random-planet jumbotron rounded'>
        {error && <ErrorIndicator/>}
        {loading && <Spinner />}
        {!loading && !error && (
          <>
            <img
              className='planet-image'
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
              alt=''
            />
            <div>
              <h4>{name}</h4>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <span className='term'>Population</span>
                  <span>{population}</span>
                </li>
                <li className='list-group-item'>
                  <span className='term'>Rotation Period</span>
                  <span>{rotationPeriod}</span>
                </li>
                <li className='list-group-item'>
                  <span className='term'>Diameter</span>
                  <span>{diameter}</span>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    );
  }
}
