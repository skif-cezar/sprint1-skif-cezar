import React from 'react';
import clsx from 'clsx';
import { Header } from 'src/app/components/header/Header';
import { Menu } from 'src/app/components/menu/Menu';
import { Navigation } from 'src/app/components/navigation/Navigation';
import { MainLayout } from 'src/app/logic/main/MainLayout';

import styles from 'src/app/logic/layout/Layout.module.scss';

/**
 * Layout component
 */
export const Layout: React.FC = () => {
  const WRAPPER_STYLES = clsx(styles.wrapper);
  const FOOTER_STYLES = clsx(styles.footer);

  return (
    <div className={WRAPPER_STYLES}>
      <Header />
      <Menu />
      <Navigation />
      <MainLayout />
      <footer className={FOOTER_STYLES}>Footer</footer>
    </div>
  );
};
