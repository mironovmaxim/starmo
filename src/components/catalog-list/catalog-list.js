import React, { Component } from 'react';
import ErrIndicator from '../err-indicator';
import Service from '../../service/service';
import DocumentTitle from 'react-document-title';

import './catalog.css';

export default class CatalogList extends Component {
  service = new Service();
  state = {
    data: [],
    error: false
  }

  onError = () => {
    this.setState({
      error: true
    })
  }

  componentDidMount() {
    this.service.getAllModels()
      .then(data => this.setState({data}))
      .catch(this.onError);
  }

  renderItem(arr) {
    return arr.map( ({ id, label, url_img }) => {
      return (
        <li 
          key = {id}
          className = 'cards__item'
          onClick = {() => this.props.onItemSelected(id)}>
            <img className = 'cards__image' src = {url_img} alt = 'Изображение тематики модели'></img>
            <p className = 'cards__title'>{label}</p>
        </li>
      )
    })
  }

  render() {
    const { data, error } = this.state;
    if(error) {
      return <ErrIndicator />
    } else {
      const item = this.renderItem(data);
      return (
        <DocumentTitle title='Каталог бизнес-моделей'>
        <div>
          <h2 className = 'title'>Каталог</h2>
          <ul className = 'cards'>
            {item}
          </ul>
        </div>
        </DocumentTitle>
      );
    }
  }
}
