import React from 'react';
import clsx from 'clsx';
import BooksDTO from 'src/app/Books.json';
import { Card } from 'src/app/components/card/Card';

import styles from 'src/app/logic/content/window/ContentWindow.module.scss';

/**
 * Interface books list
 */
export interface BooksInterface {
  id?: number;
  title: string;
  author: string;
  year: string;
  url: string;
  rating: string;
  booking: string;
}

/**
 * Content window component
 */
export const ContentWindow: React.FC = () => {
  // const CONTAINER_STYLES = clsx(styles.container);
  const CONTAINER_LIST_STYLES = clsx(styles.container_list);
  const TITLE_HIDDEN_STYLES = clsx(styles.hidden);

  return (
    /* <section className={CONTAINER_STYLES}>
      <h2 className={TITLE_HIDDEN_STYLES}>Витрина книг</h2>
      {BooksDTO &&
        BooksDTO.map((book: BooksInterface) => (
          <Card
            key={book.id}
            title={book.title}
            author={book.author}
            year={book.year}
            url={book.url}
            rating={book.rating}
            booking={book.booking}
          />
        ))}
    </section> */
    <section className={CONTAINER_LIST_STYLES}>
    <h2 className={TITLE_HIDDEN_STYLES}>Витрина книг</h2>
    {BooksDTO &&
      BooksDTO.map((book: BooksInterface) => (
        <Card
          key={book.id}
          title={book.title}
          author={book.author}
          year={book.year}
          url={book.url}
          rating={book.rating}
          booking={book.booking}
        />
      ))}
  </section>
  );
};
