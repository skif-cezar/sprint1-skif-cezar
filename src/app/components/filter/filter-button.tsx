import React from 'react';
import clsx from 'clsx';

import styles from 'src/app/components/filter/FilterButton.module.scss';

/**
 * Filter button component
 */
export const FilterButton: React.FC = () => {
  const BUTTON_STYLES = clsx(styles.button);

  return (
    <button className={BUTTON_STYLES} type='submit'>
      По рейтингу
    </button>
  );
};
