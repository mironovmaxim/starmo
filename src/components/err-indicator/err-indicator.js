import React from 'react';
import './err-indicator.css';

function ErrIndicator () {
  return(
    <section className = 'error'>
      <h2 className = 'error__title'>Что-то пошло не так.</h2>
      <p className = 'error__text'>Кажется произошла ошибка в работе сервера. Мы уже занялись исправлением данной проблемы.</p>
    </section>
  );
}

export default ErrIndicator;