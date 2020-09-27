import React, { Component } from 'react';

import './item-details.sass';
import SwapiService from 'services/swapi-service';
import Spinner from 'components/spinner/spinner';


export const Record = ({ item, field, label}) => {
  return (
    <li className='list-group-item'>
      <span className='term'>{label}: </span>
      <span>{field}</span>
    </li>
  )
}


export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    loading: true,
  };

  componentDidMount() {
    this.updateItemDetails();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItemDetails();
    }
  }

  updateItemDetails() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) return;

    getData(itemId).then((item) => {
      this.setState({
        item,
        image: getImageUrl(item),
        loading: false
      });


    });
  }

  render() {
    const {
      loading,
      item,
      image,
    } = this.state;

    if (!item) return <span>Select a person from the list</span>;

    const { name } = item;
    const { children } = this.props;

    return (
      <div className='item-details card'>
        {loading && <Spinner />}
        {!loading && (
          <>
            <img
              className='item-image'
              src={image}
              alt=''
            />

            <div className='card-body'>
              <h4>{name}</h4>
              <ul className='list-group list-group-flush'>
                {
                  React.Children.map(children, (child, index) => {
                    return <li>{index}</li>
                  })
                }
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}
