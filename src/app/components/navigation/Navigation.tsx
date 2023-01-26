import React from 'react';
import clsx from 'clsx';
import { FilterButton } from 'src/app/components/filter/FilterButton';
import { Search } from 'src/app/components/search/Search';

import styles from 'src/app/components/navigation/Navigation.module.scss';

/**
 * Navigation component
 */
export const Navigation: React.FC = () => {
  const NAVIGATION_STYLES = clsx(styles.navigation);
  const BUTTON_TILE_STYLES = clsx(styles.button_tile);
  const BUTTON_LIST_STYLES = clsx(styles.button_list);

  return (
    <div className={NAVIGATION_STYLES}>
      <Search />
      <FilterButton />
      <button className={BUTTON_TILE_STYLES} type='button' aria-label='Плитка' />
      <button className={BUTTON_LIST_STYLES} type='button' aria-label='Список' />
    </div>
  );
};
