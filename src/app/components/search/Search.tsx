import React from 'react';
import clsx from 'clsx';

import styles from 'src/app/components/search/Search.module.scss';

/**
 * Search component
 */
export const Search: React.FC = () => {
  const SEARCH_STYLES = clsx(styles.search);
  const SEARCH_INPUT_STYLES = clsx(styles.search_input);
  const SEARCH_BUTTON_STYLES = clsx(styles.search_button);

  return (
    <form className={SEARCH_STYLES}>
      <input className={SEARCH_INPUT_STYLES} type='text' placeholder='Поиск книги или автора...' />
      <button className={SEARCH_BUTTON_STYLES} type='submit'>
        search
      </button>
    </form>
  );
};
