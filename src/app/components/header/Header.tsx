import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import avatarSrc from 'src/resources/avatar.jpg';
import logoSrc from 'src/resources/logo.png';

import styles from 'src/app/components/header/Header.module.scss';

/**
 * Header component
 */
export const Header: React.FC = () => {
  const HEADER_STYLES = clsx(styles.header);
  const LOGO_STYLES = clsx(styles.logo);
  const BURGER_MENU_STYLES = clsx(styles.burger_menu);
  const TITLE_STYLES = clsx(styles.title);
  const AUTHORIZATION_STYLES = clsx(styles.authorization);
  const WELCOME_STYLES = clsx(styles.welcome);
  const AVATAR_STYLES = clsx(styles.avatar);

  return (
    <header className={HEADER_STYLES}>
      <NavLink to='/' className={LOGO_STYLES}>
        <img src={logoSrc} alt='Логотип сайта Cleverland' width={165} height={40} />
      </NavLink>
      <button className={BURGER_MENU_STYLES} type='button'></button>
      <h1 className={TITLE_STYLES}>Библиотека</h1>
      <div className={AUTHORIZATION_STYLES}>
        <span className={WELCOME_STYLES}>Привет, Иван!</span>
        <img className={AVATAR_STYLES} src={avatarSrc} alt='Аватар пользователя' width={58} height={58} />
      </div>
    </header>
  );
};
