import React, { Component } from 'react';
import Modal from '../modal';
import Service from '../../service/service';

import './feedback.css';

export default class FeedBack extends Component {
  service = new Service();
  state = {
    review: {
      name: '',
      email: '',
      text: ''
    },
    modal: false,
    error: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.service.postReview(this.state.review)
    .then(() => {
      this.setState({
        modal: true
      });
    })
    .then(() => {
      this.setState({
        review: {
          name: '',
          email: '',
          text: ''
        }
      });
    })
    .catch(this.onError);
  }

  onError = () => {
    this.setState({
      error: true
    });
  }

  onHandleChangeName = (event) => {
    let value = event.target.value;
    this.setState( prevState => ({ 
      review : {...prevState.review, name: value}
       }));
   }

  onHandleChangeEmail = (event) => {
    let value = event.target.value;
    this.setState( prevState => ({ 
      review : {...prevState.review, email: value}
       }));
  }

  onHandleChangeText = (event) => {
    let value = event.target.value;
    this.setState( prevState => ({ 
      review : {...prevState.review, text: value}
       }));
  }

  onHandleHideSuccess = () => {
    this.setState({
      modal: false
    });
  }

  onHandleHideFail = () => {
    this.setState({
      error: false
    });
  }

  render() {
    const modal = this.state.modal ? (
      <Modal>
        <div className = 'modal-win' onClick={this.onHandleHideSuccess}>
          <div className = 'modal__window'>
            <h3 className = 'modal-win__title'>Успешно отправлено</h3>
            <p className = 'modal-win__text'>Спасибо за Ваше обращение.</p>
            <button className = 'modal-win__close' onClick={this.onHandleHideSuccess}>Закрыть</button>
          </div>
        </div>
      </Modal>
    ) : null;
    const error = this.state.error ? (
      <Modal>
        <div className = 'modal-win'>
          <div className = 'modal__window'>
            <h3 className = 'modal-win__title'>Упс, ошибочка вышла</h3>
            <p className = 'modal-win__text'>Кажется у нас что-то сломалось.</p>
            <button className = 'modal-win__close' onClick={this.onHandleHideFail}>Закрыть</button>
          </div>
        </div>
      </Modal>
    ) : null;
    return(
      <form className = 'contact__form feedback' onSubmit = {this.handleSubmit}>
        <h3 className = 'feedback__title'>Обратная связь</h3>
        <input 
              type = 'text'
              value = {this.state.review.name}
              onChange = {this.onHandleChangeName}
              placeholder = 'Имя' 
              required/>
        <input 
              type = 'email'
              value = {this.state.review.email}
              onChange = {this.onHandleChangeEmail}
              placeholder = 'E-mail куда ответить'
              required/>
        <textarea
              value = {this.state.review.text} 
              onChange = {this.onHandleChangeText} 
              placeholder = 'Вопрос/Предложение' 
              required/>
        <button  
              type = 'submit'>
              Отправить
        </button>
        <p>Все поля обязательны для заполнения</p>
        {modal}
        {error}
      </form>
    );
  }
}