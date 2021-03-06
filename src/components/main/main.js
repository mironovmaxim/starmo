import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

function Main() {
  return(
    <div className = 'main'>
      <section className = 'main-page'>
        <div className = 'main-page__wrap'>
          <h2 className = 'main-page__title'>Инструмент визуализации Вашего будущего бизнеса</h2>
        </div>
      </section>
      <section className = 'main-page__description'>
        <div className = 'description'>
          <h2 className = 'description__title'>Что такое бизнес-модель?</h2>
          <div className = 'description__wrap-text'>
            <p className = 'description__text'>
              Предположим, что Вы решили создать свое дело и у Вас есть идея.
              Бизнес-модель представляет собой схематическое изображение бизнеса, которое позволит Вам понять ключевые элементы идеи еще до начала работы и направить свои усилия в нужном направлении.
            </p>
            <svg className = 'description__icon' viewBox="0 0 512 512">
              <g>
                <g>
                  <path d="m338.6,136.1c-23.6-22.7-54.6-34.4-87.4-33.2-62.9,2.5-114.2,55.7-114.4,118.7-0.1,27.9 9.7,55.1 27.6,76.5 25.8,31 40,70.1 40,110.2 0,0-2.7,18.4 10.4,18.4h82.4c13.4,0 10.4-18.4 10.4-18.4 0-39.2 14.4-78 41.7-112.2 16.9-21.3 25.9-46.9 25.9-74.1 0-32.7-13-63.3-36.6-85.9zm-5.6,147c-29.7,37.2-45.6,79.6-46.2,122.8h-61.6c-0.6-44.1-16.4-87-44.8-121.1-14.7-17.7-22.8-40.1-22.7-63.1 0.2-52 42.5-95.9 94.4-98 27.1-1 52.7,8.7 72.1,27.4 19.5,18.7 30.2,43.9 30.2,70.9-0.1,22.5-7.4,43.6-21.4,61.1z"/>
                  <path d="m393.2,67.8c-4.1-4.1-10.7-4.1-14.7,0l-25.4,25.4c-4.1,4.1-4.1,10.7 0,14.7s10.7,4.1 14.7,0l25.4-25.4c4.1-4 4.1-10.6 0-14.7z"/>
                  <path d="m297.6,440.9h-83.2c-5.8,0-10.4,4.7-10.4,10.4 0,5.8 4.7,10.4 10.4,10.4h83.2c5.8,0 10.4-4.7 10.4-10.4 0-5.7-4.7-10.4-10.4-10.4z"/>
                  <path d="m281.9,480.1h-51.7c-5.8,0-10.4,4.7-10.4,10.4 0,5.8 4.7,10.4 10.4,10.4h51.7c5.8,0 10.4-4.7 10.4-10.4 5.68434e-14-5.7-4.7-10.4-10.4-10.4z"/>
                  <path d="M256,67.7c5.8,0,10.4-4.7,10.4-10.4V21.4c0-5.8-4.7-10.4-10.4-10.4s-10.4,4.7-10.4,10.4v35.9    C245.6,63.1,250.2,67.7,256,67.7z"/>
                  <path d="m158.9,108c4.1-4.1 4.1-10.7 0-14.7l-25.4-25.4c-4.1-4.1-10.7-4.1-14.7,0s-4.1,10.7 0,14.7l25.4,25.4c4.1,4 10.7,4 14.7,0z"/>
                  <path d="m439.6,194.6h-35.9c-5.8,0-10.4,4.7-10.4,10.4s4.7,10.4 10.4,10.4h35.9c5.8,0 10.4-4.7 10.4-10.4s-4.7-10.4-10.4-10.4z"/>
                  <path d="m108.3,194.6h-35.9c-5.8,0-10.4,4.7-10.4,10.4s4.7,10.4 10.4,10.4h35.9c5.8,0 10.4-4.7 10.4-10.4s-4.6-10.4-10.4-10.4z"/>
                </g>
              </g>
            </svg>
            <p className = 'description__text'>
              Это возможность без ошибок и потерь, выстроить модель работы,  увидеть механизм и логику бизнеса. Вы сможете поместить в шаблон все Ваши мысли и наглядно выявить потенциальные ошибки и проблемы идеи.
            </p>
          </div>
        </div>
      </section>
      <section className = 'advantage'>
        <h2 className = 'advantage__header'>Почему так важно моделирование?</h2>
        <ul className = 'advantage__list'>
          <li className = 'advantage__item'>
            <h3 className = 'advantage__title visual'>Визуализация</h3>
            <p className = 'advantage__text'>Весь механизм бизнеса как на ладоне</p>
          </li>
          <li className = 'advantage__item'>
            <h3 className = 'advantage__title res'>Ресурсы</h3>
            <p className = 'advantage__text'>Определите, какие материальные и нематериальные ресурсы необходимы для старта</p>
          </li>
          <li className = 'advantage__item'>
            <h3 className = 'advantage__title plan'>План</h3>
            <p className = 'advantage__text'>На основе модели Вы сможете составить план действий</p>
          </li>
        </ul>
      </section>
      <section className = 'motive'>
        <div className = 'motive__wrap'>
          <h2 className = 'motive__title'>Начните прямо сейчас</h2>
          <p className = 'motive__text'>Заполните модель на основе своей идеи и увеличьте Ваши шансы на успех</p>
          <Link to = '/register' className = 'motive__link'>Регистрация</Link>
          <Link to = '/about' className = 'motive__about'>Как заполнять модель</Link>
        </div>
      </section>
    </div>
  );
}

export default Main;