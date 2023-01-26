import React from 'react';
import clsx from 'clsx';
import { Header } from 'src/app/components/header/Header';
import { Menu } from 'src/app/components/menu/Menu';
import { Navigation } from 'src/app/components/navigation/Navigation';

import styles from 'src/app/logic/layout/Layout.module.scss';

/**
 * Layout component
 */
export const Layout: React.FC = () => {
  const WRAPPER_STYLES = clsx(styles.wrapper);
  const MAIN_STYLES = clsx(styles.main);
  const FOOTER_STYLES = clsx(styles.footer);

  return (
    <div className={WRAPPER_STYLES}>
      <Header />
      <Menu />
      <Navigation />
      <main className={MAIN_STYLES}>
        <section>Section</section>
      </main>
      <footer className={FOOTER_STYLES}>Footer</footer>
    </div>
  );
};
