import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';

function Menu() {
  return(
    <nav className = 'menu'>
      <ul className = 'menu__list'>
        <li className = 'menu__item'>
          <NavLink to = '/login' className = 'menu__link menu__link-auth' activeClassName="active">Войти</NavLink>
        </li>
        <li className = 'menu__item'>
          <NavLink to = '/register' className = 'menu__link menu__link-auth' activeClassName="active">Регистрация</NavLink>
        </li>
        <li className = 'menu__item'>
          <NavLink to = '/about' className = 'menu__link' activeClassName="active">Структура модели</NavLink>
        </li>
        <li className = 'menu__item'>
          <NavLink to = '/catalog/' className = 'menu__link' activeClassName="active">Бизнес-модели</NavLink>
        </li>
        <li className = 'menu__item'>
          <NavLink to = '/contact' className = 'menu__link' activeClassName="active">Контакты</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;