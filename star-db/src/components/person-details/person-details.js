import React, { Component } from 'react';

import './person-details.sass';
import SwapiService from 'services/swapi-service';
import Spinner from 'components/spinner/spinner';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: {},
    loading: true,
  };

  componentDidMount() {
    this.updatePersonInfo();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePersonInfo();
    }
  }

  updatePersonInfo() {
    const { personId } = this.props;
    if (!personId) return;

    this.setState({ loading: true });

    this.swapiService.getPerson(personId).then((person) => {
      this.setState({
        person,
        loading: false,
      });
    });
  }

  render() {
    if (!this.state.person) return <span>Select a person from the list</span>;

    const {
      person: { id, name, gender, birthYear, eyeColor },
      loading,
    } = this.state;

    return (
      <div className='person-details card'>
        {loading && <Spinner />}
        {!loading && (
          <>
            <img
              className='person-image'
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              alt=''
            />

            <div className='card-body'>
              <h4>{name}</h4>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <span className='term'>Gender: </span>
                  <span> {gender}</span>
                </li>
                <li className='list-group-item'>
                  <span className='term'>Birth Year: </span>
                  <span> {birthYear}</span>
                </li>
                <li className='list-group-item'>
                  <span className='term'>Eye Color: </span>
                  <span> {eyeColor}</span>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    );
  }
}
