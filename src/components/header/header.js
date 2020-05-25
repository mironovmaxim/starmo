import React from 'react';
import Menu from '../menu';
import './header.css';

function Header() {
  return(
    <header className = 'header'>
      <div className = 'header-wrap'>
        <h1 className = 'header__logo'><a className = 'header__link' href = '/'>Starmo</a></h1>
        <Menu />
      </div>
    </header>
  );
}
export default Header;