import React from 'react';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

import styles from 'src/app/logic/layout/Layout.module.scss';

/**
 * Main layout component
 */
export const MainLayout: React.FC = () => {
  const MAIN_STYLES = clsx(styles.main);

  return (
    <main className={MAIN_STYLES}>
      <Outlet />
    </main>
  );
};
