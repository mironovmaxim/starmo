import React, {Component} from 'react';
import ErrIndicator from '../err-indicator';
import GoBack from '../go-back';
import Service from '../../service/service';
import DocumentTitle from 'react-document-title';

import './card-item.css';

export default class CardItem extends Component {
  service = new Service();
  state = {
    data: null,
    error: false
  }

  componentDidMount() {
    this.service.getModel(this.props.itemId)
    .then(data => this.setState({data}))
    .catch(this.onError);
  }

  onError = () => {
    this.setState({
      error: true
    })
  }

  renderItem(arr) {
    return arr.map( (item, index) => {
      return (
        <li 
          key = {index}
          className = 'block__item'>
          {item}
        </li>
      );
    });
  }

  render() {
    if(this.state.error) {
      return <ErrIndicator />;
    } else if(this.state.data) {
      const { 
        label,
        partners,
        activities,
        resources,
        offers,
        relationship,
        channels,
        consumers,
        costs,
        income
      } = this.state.data;

      return(
        <DocumentTitle title = {label}>
        <section className = 'models'>
          <GoBack />
          <h2 className = 'models__title'>{label}</h2>
          <div className = 'model'>
            <section className = 'model__partners block'>
              <h3 className = 'block__title'>Ключевые партнеры</h3>
              <ul className = 'block__list'>
                {this.renderItem(partners)}
              </ul>
            </section>
            <section className = 'model__activities block'>
              <h3 className = 'block__title'>Ключевые виды деятельности</h3>
              <ul className = 'block__list'>
              {this.renderItem(activities)}
              </ul>
            </section>
            <section className = 'model__resources block'>
              <h3 className = 'block__title'>Ключевые ресурсы</h3>
              <ul className = 'block__list'>
              {this.renderItem(resources)}
              </ul>
            </section>
            <section className = 'model__offers block'>
              <h3 className = 'block__title'>Ценностные предложения</h3>
              <ul className = 'block__list'>
                {this.renderItem(offers)}
              </ul>
            </section>
            <section className = 'model__relationship block'>
              <h3 className = 'block__title'>Взаимоотношения с клиентами</h3>
              <ul className = 'block__list'>
              {this.renderItem(relationship)}
              </ul>
            </section>
            <section className = 'model__channels block'>
              <h3 className = 'block__title'>Каналы сбыта</h3>
              <ul className = 'block__list'>
              {this.renderItem(channels)}
              </ul>
            </section>
            <section className = 'model__consumers block'>
              <h3 className = 'block__title'>Потребительские сегменты</h3>
              <ul className = 'block__list'>
              {this.renderItem(consumers)}
              </ul>
            </section>
            <section className = 'model__costs block'>
              <h3 className = 'block__title'>Структура издержек</h3>
              <ul className = 'block__list'>
              {this.renderItem(costs)}
              </ul>
            </section>
            <section className = 'model__income block'>
              <h3 className = 'block__title'>Потоки поступления доходов</h3>
              <ul className = 'block__list'>
              {this.renderItem(income)}
              </ul>
            </section>
          </div>
        </section>
        </DocumentTitle>
      );
    } else {
      return null;
    }
  }
}