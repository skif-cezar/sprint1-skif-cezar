import React from 'react';
import clsx from 'clsx';
import { Card } from 'src/app/components/card/Card';

import styles from 'src/app/logic/content/window/ContentWindow.module.scss';

/**
 * Content window component
 */
export const ContentWindow: React.FC = () => {
  const CONTAINER_STYLES = clsx(styles.container);
  const TITLE_HIDDEN_STYLES = clsx(styles.hidden);

  return (
    <section className={CONTAINER_STYLES}>
      <h2 className={TITLE_HIDDEN_STYLES}>Витрина книг</h2>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};
