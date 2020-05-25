import React from 'react';
import './not-page.css';

function NotPage() {
  return(
    <section className = 'not-page'>
      <h2 className = 'not-page__title'>Кажется такой страницы не существует</h2>
      <p className = 'not-page__text'>Возможно такой страницы больше нет, вы можете поискать информацию на нашем сайте. Спасибо.</p>
    </section>
  );
}

export default NotPage;