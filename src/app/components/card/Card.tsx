import React from 'react';
import clsx from 'clsx';
import bookUrl from 'src/resources/book.jpg';
import bookNotUrl from 'src/resources/book-not.jpg';

import styles from 'src/app/components/card/Card.module.scss';

/**
 * Card component
 */
export const Card: React.FC = () => {
  const CARD_STYLES = clsx(styles.card);
  const IMG_STYLES = clsx(styles.image);
  const CONTENT_STYLES = clsx(styles.content);
  const RATING_STYLES = clsx(styles.rating);
  const TITLE_STYLES = clsx(styles.title);
  const AUTHOR_STYLES = clsx(styles.author);
  const BUTTON_STYLES = clsx(styles.button);

  return (
    <div className={CARD_STYLES}>
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
      <div className={CONTENT_STYLES}>
        <div className={RATING_STYLES}>нет отзывов</div>
        <div className={TITLE_STYLES}>
          <span>Грокаем алгоритмы. Иллюстрированное пособие для программистов</span>
        </div>
        <div className={AUTHOR_STYLES}>
          <span>Гена Букин, 2016</span>
        </div>
      </div>
      <button className={BUTTON_STYLES} type='button'>
        Забронировать
      </button>
    </div>
  );
};
