import React from 'react';
import DocumentTitle from 'react-document-title';

import './about.css';

function About() {
  return(
    <DocumentTitle title = 'Структура модели'>
      <section className = 'about'>
        <h2 className = 'about__title'>Структура модели</h2>
        <p>Модель состоит из 9 блоков.</p>
        <p className = 'about__text'>
          При заполнении важно начинать с правого поля, с потребителей. Нам нужно решить, кто купит наш товар/услугу. 
          Далее нужно определиться с ценностыми предложениями и только потом перейти к основным вопросам.
          К каждому блоку шаблона необходимо задать ключевой вопрос, который поможет найти ответы и описать весь механизм бизнеса.
        </p>
        <div className = 'model'>
            <section className = 'model__partners block'>
              <h3 className = 'block__title'>Ключевые партнеры</h3>
              <ul className = 'block__list'>
                <li className = 'block__item'>Кто является нашими ключевыми партнерами?</li>
                <li className = 'block__item'>Что мы можем поручить, для того, чтобы сосредоточиться только на своей основной деятельности?</li>
              </ul>
            </section>
            <section className = 'model__activities block'>
              <h3 className = 'block__title'>Ключевые виды деятельности</h3>
              <ul className = 'block__list'>
                <li className = 'block__item'>Что мы делаем лучше всех?</li>
                <li className = 'block__item'>На чем мы сосредоточимся?</li>
                <li className = 'block__item'>Что лучше всего получается?</li>
              </ul>
            </section>
            <section className = 'model__resources block'>
              <h3 className = 'block__title'>Ключевые ресурсы</h3>
              <ul className = 'block__list'>
                <li className = 'block__item'>Какие средства необходимы для работы компании?</li>
                <li className = 'block__item'>Какое необходим стартовый капитал?</li>
                <li className = 'block__item'>Какое оборудование необходимо для начала?</li>
              </ul>
            </section>
            <section className = 'model__offers block'>
              <h3 className = 'block__title'>Ценностные предложения</h3>
              <ul className = 'block__list'>
                <li className = 'block__item'>Что я могу предложить моим клиентам?</li>
                <li className = 'block__item'>В каком виде?</li>
                <li className = 'block__item'>Какие потребности клиентов мы будем удовлетворять?</li>
              </ul>
            </section>
            <section className = 'model__relationship block'>
              <h3 className = 'block__title'>Взаимоотношения с клиентами</h3>
              <ul className = 'block__list'>
                <li className = 'block__item'>Каким образом будет организовано обслуживание клиентов?</li>
              </ul>
            </section>
            <section className = 'model__channels block'>
              <h3 className = 'block__title'>Каналы сбыта</h3>
              <ul className = 'block__list'>
                <li className = 'block__item'>Каковы будут точки контакта компании с потребителем?</li>
                <li className = 'block__item'>По каким каналам связи мы будем оповещать клинтов, о том, что мы готовы оказать им услуги?</li>
              </ul>
            </section>
            <section className = 'model__consumers block'>
              <h3 className = 'block__title'>Потребительские сегменты</h3>
              <ul className = 'block__list'>
                <li className = 'block__item'>На какие группы клиентов ориентирован мой бизнес?</li>
                <li className = 'block__item'>Какие группы клиетов мы будем обслуживать?</li>
              </ul>
            </section>
            <section className = 'model__costs block'>
              <h3 className = 'block__title'>Структура издержек</h3>
              <ul className = 'block__list'>
                <li className = 'block__item'>Какие расходы предполагает ваша бизнес-модель?</li>
                <li className = 'block__item'>Какие могут быть дополнительные затраты?</li>
              </ul>
            </section>
            <section className = 'model__income block'>
              <h3 className = 'block__title'>Потоки поступления доходов</h3>
              <ul className = 'block__list'>
                <li className = 'block__item'>За что и каким образом нам заплатят наши потребители?</li>
                <li className = 'block__item'>Как разные группы клиентов будут нам платить?</li>
              </ul>
            </section>
          </div>
      </section>
    </DocumentTitle>
  );
}

export default About;