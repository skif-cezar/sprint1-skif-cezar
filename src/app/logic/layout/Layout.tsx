import React from 'react';
import clsx from 'clsx';
import { Header } from 'src/app/components/header/header';
import { Menu } from 'src/app/components/menu/menu';
import { Footer } from 'src/app/logic/footer/footer';
import { MainLayout } from 'src/app/logic/main/main-layout';

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
