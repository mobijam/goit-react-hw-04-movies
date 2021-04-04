import React from 'react';
import Navigation from './Navigation';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;
