import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import clsx from 'clsx';
import BooksDTO from 'src/app/Books.json';
import { Button } from 'src/app/components/button/Button';
import { Header } from 'src/app/components/header/Header';
import { BooksInterface } from 'src/app/logic/content/Content';
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
  const TITLE_BOOK_STYLES = clsx(styles.title);
  const AUTHOR_STYLES = clsx(styles.author);
  const DESCRIPTION_STYLES = clsx(styles.description);
  const DESCRIPTION_TITLE_STYLES = clsx(styles.description_title);
  const RATING_STYLES = clsx(styles.rating);
  const RATING_CONTENT_STYLES = clsx(styles.rating_content);
  const DETAILS_STYLES = clsx(styles.details);
  const DETAILS_CONTAINER = clsx(styles.details_container);
  const GROUP_ONE = clsx(styles.group_one);
  const GROUP_TWO = clsx(styles.group_two);

  const { category } = useParams<'category'>();
  const { bookId } = useParams<'bookId'>();
  const book = BooksDTO.find((book: BooksInterface) => book.id === parseInt(bookId!, 10));

  return (
    <div className={WRAPPER_STYLES}>
      <Header />
      <main className={MAIN_STYLES}>
        <div className={NAVIGATION_STYLES}>
          <nav>
            <NavLink to={`/books/${category}`}>{category}</NavLink>
            <span className={NAV_TITLE_BOOK_STYLES}>{book!.title}</span>
          </nav>
        </div>
        <section className={BOOK_CONTAINER_STYLES}>
          <article className={PROMO_STYLES}>
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
                <div className={TITLE_BOOK_STYLES}>
                  <span>{book!.title}</span>
                </div>
                <div className={AUTHOR_STYLES}>{`${book!.author}, ${book!.year}`}</div>
              </div>
              <Button text='' />
              <div className={DESCRIPTION_STYLES}>
                <h3 className={DESCRIPTION_TITLE_STYLES}>О книге</h3>
                <p>
                  Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были
                  кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального
                  Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на
                  это свое время? Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это
                  просто. А грокать алгоритмы — это веселое и увлекательное занятие.
                </p>
              </div>
            </div>
          </article>
          <article className={RATING_STYLES}>
            <h3 className={DESCRIPTION_TITLE_STYLES}>Рейтинг</h3>
            <div className={RATING_CONTENT_STYLES}>
              <div>Rating</div>
              <span>4.3</span>
            </div>
          </article>
          <article className={DETAILS_STYLES}>
            <h3 className={DESCRIPTION_TITLE_STYLES}>Подробная информация</h3>
            <div className={DETAILS_CONTAINER}>
              <div className={GROUP_ONE}>
                <div>
                  <h4>Издательство</h4>
                  <p>Питер</p>
                </div>
                <div>
                  <h4>Год издания</h4>
                  <p>2019</p>
                </div>
                <div>
                  <h4>Страниц</h4>
                  <p>288</p>
                </div>
                <div>
                  <h4>Переплёт</h4>
                  <p>Мягкая обложка</p>
                </div>
                <div>
                  <h4>Формат</h4>
                  <p>70&#9747;100</p>
                </div>
              </div>
              <div className={GROUP_TWO}>
                <div>
                  <h4>Жанр</h4>
                  <p>Компьютерная литература</p>
                </div>
                <div>
                  <h4>Вес</h4>
                  <p>370г</p>
                </div>
                <div>
                  <h4>ISBN</h4>
                  <p>978-5-4461-0923-4</p>
                </div>
                <div>
                  <h4>Изготовитель</h4>
                  <p>&laquo;Питер Мейл&raquo;. РФ, 198206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29</p>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};
