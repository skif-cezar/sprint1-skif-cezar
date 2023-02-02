import React, { useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import clsx from 'clsx';
import BooksDTO from 'src/app/Books.json';
import { Card } from 'src/app/components/card/card';
import { Navigation } from 'src/app/components/navigation/navigation';
import { BookContext, StoreInterface } from 'src/app/logic/store';

import styles from 'src/app/logic/content/Content.module.scss';

/**
 * Interface books list
 */
export interface BooksInterface {
  id: number;
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
export const Content: React.FC = () => {
  const CONTAINER_STYLES = clsx(styles.container);
  const CONTAINER_LIST_STYLES = clsx(styles.container_list);
  const TITLE_HIDDEN_STYLES = clsx(styles.hidden);

  const { view }: StoreInterface = useContext(BookContext);
  const { category } = useParams();

  return (
    <React.Fragment>
      <Navigation />
      <section className={view ? CONTAINER_STYLES : CONTAINER_LIST_STYLES}>
        <h2 className={TITLE_HIDDEN_STYLES}>Витрина книг</h2>
        {BooksDTO &&
          BooksDTO.map((book: BooksInterface) => (
            <NavLink to={`/books/${category}/${book.id}`} key={book.id}>
              <Card
                id={book.id}
                title={book.title}
                author={book.author}
                year={book.year}
                url={book.url}
                rating={book.rating}
                booking={book.booking}
              />
            </NavLink>
          ))}
      </section>
    </React.Fragment>
  );
};
