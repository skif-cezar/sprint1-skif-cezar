import React from 'react';
import clsx from 'clsx';
import styles from 'src/app/logic/layout/Layout.module.scss';
import { Header } from 'src/app/components/header/Header';

/**
 * Layout component
 */
export const Layout: React.FC = () => {
  const WRAPPER_STYLES = clsx(styles.wrapper);
  const MAIN_STYLES = clsx(styles.main);

  return (
    <div className={WRAPPER_STYLES}>
      <Header />
      <aside>
        <nav>Navigation</nav>
      </aside>
      <main className={MAIN_STYLES}>
        <section>Section</section>
      </main>
      <footer>Footer</footer>
    </div>
  );
};
