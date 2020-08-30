import React, { Component } from 'react'
import ItemList from 'components/item-list/item-list'
import PersonDetails from 'components/person-details/person-details'
import ErrorIndicator from 'components/error-indicator/error-indicator'
import ErrorButton from 'components/error-button/error-button'

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 3,
    error: false,
  }

  componentDidCatch() {
    this.setState({ error: true })
  }

  handleOnPersonSelected = (id) => {
    this.setState({ selectedPerson: id })
  }

  render() {
    const { selectedPerson, error } = this.state;

    return (
      <>
        { error && <ErrorIndicator />}
        {!error && (
          <div className="row mb2">
            <div className="col-md-6">
              <ItemList onSelectedItem={this.handleOnPersonSelected} />
            </div>
            <div className="col-md-6">
              <PersonDetails personId={selectedPerson} />
              <ErrorButton/>
            </div>
          </div>
        )}
      </>
    )
  }
}
