import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../menu';
import './header.css';

function Header() {
  return(
    <header className = 'header'>
      <div className = 'header-wrap'>
        <h1 className = 'header__logo'><NavLink className = 'header__link' to = '/'>Starmo</NavLink></h1>
        <Menu />
      </div>
    </header>
  );
}
export default Header;