import React from 'react';
import clsx from 'clsx';
import { Header } from 'src/app/components/header/Header';
import { Menu } from 'src/app/components/menu/Menu';
import { Footer } from 'src/app/logic/footer/Footer';
import { MainLayout } from 'src/app/logic/main/MainLayout';

import styles from 'src/app/logic/layout/Layout.module.scss';

/**
 * Layout component
 */
export const Layout: React.FC = () => {
  const WRAPPER_STYLES = clsx(styles.wrapper);
  const MAIN_STYLES = clsx(styles.main);

  return (
    <div className={WRAPPER_STYLES}>
      <Header />
      <Menu />
      <main className={MAIN_STYLES}>
        <MainLayout />
      </main>
      <Footer />
    </div>
  );
};
