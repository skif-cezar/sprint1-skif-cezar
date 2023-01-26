import React from 'react';
import clsx from 'clsx';

import styles from 'src/app/components/navigation/Navigation.module.scss';

/**
 * Navigation component
 */
export const Navigation: React.FC = () => {
  const NAVIGATION_STYLES = clsx(styles.navigation);

  return <div className={NAVIGATION_STYLES}>Фильтрация</div>;
};
