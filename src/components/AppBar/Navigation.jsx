import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={s.navigation}>
      <li className={s.item}>
        <NavLink
          exact
          className={s.link}
          activeClassName={s.activeLink}
          to={routes.home}
        >
          Home
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink
          className={s.link}
          activeClassName={s.activeLink}
          to={routes.movies}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
