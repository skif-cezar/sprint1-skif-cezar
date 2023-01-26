import React from 'react';
import clsx from 'clsx';
import { Card } from 'src/app/components/card/Card';

import styles from 'src/app/logic/layout/Layout.module.scss';

/**
 * Main layout component
 */
export const MainLayout: React.FC = () => {
  const MAIN_STYLES = clsx(styles.main);

  return (
    <main className={MAIN_STYLES}>
      <section>Section
         <Card />
      </section>
    </main>
  );
};
