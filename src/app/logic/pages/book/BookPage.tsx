import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import clsx from 'clsx';
import { Button } from 'src/app/components/button/Button';
import { Header } from 'src/app/components/header/Header';
import { Footer } from 'src/app/logic/footer/Footer';
import bookUrl from 'src/resources/book.jpg';
import bookNotUrl from 'src/resources/book-not.jpg';

import styles from 'src/app/logic/pages/book/BookPage.module.scss';

export const BOOK_PAGE_URL = '/books/:category/:bookId';

/**
 * Book page component
 */
export const BookPage: React.FC = () => {
  const WRAPPER_STYLES = clsx(styles.wrapper);
  const MAIN_STYLES = clsx(styles.main);
  const NAVIGATION_STYLES = clsx(styles.navigation);
  const NAV_TITLE_BOOK_STYLES = clsx(styles.nav_title);
  const BOOK_CONTAINER_STYLES = clsx(styles.container);
  const PROMO_STYLES = clsx(styles.promo);
  const IMG_STYLES = clsx(styles.image);
  const BOOK_INFORMATION_STYLES = clsx(styles.information);
  const TEXT_STYLES = clsx(styles.text);
  const TITLE_STYLES = clsx(styles.title);
  const AUTHOR_STYLES = clsx(styles.author);
  const DESCRIPTION_STYLES = clsx(styles.description);
  const DESCRIPTION_TITLE_STYLES = clsx(styles.description_title);

  const {category} = useParams();
  const {bookId} = useParams();

  return (
    <div className={WRAPPER_STYLES}>
      <Header />
      <main className={MAIN_STYLES}>
        <div className={NAVIGATION_STYLES}>
          <nav>
            <NavLink to={`/books/${category}`}>Категория книг</NavLink>
            <span className={NAV_TITLE_BOOK_STYLES}>Название книги {bookId}</span>
          </nav>
        </div>
        <article className={BOOK_CONTAINER_STYLES}>
          <section className={PROMO_STYLES}>
            <div className={IMG_STYLES}>
              <img
                alt=''
                src={bookUrl}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = bookNotUrl;
                }}
              />
            </div>
            <div className={BOOK_INFORMATION_STYLES}>
              <div className={TEXT_STYLES}>
                <div className={TITLE_STYLES}>
                  <span>Название полное книги</span>
                </div>
                <div className={AUTHOR_STYLES}>Авоторы, 2019</div>
              </div>
              <Button text='' />
              <div className={DESCRIPTION_STYLES}>
                <span className={DESCRIPTION_TITLE_STYLES}>О книге</span>
                <p>
                  Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были
                  кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального
                  Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить
                  на это свое время? Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это
                  просто. А грокать алгоритмы — это веселое и увлекательное занятие.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};
