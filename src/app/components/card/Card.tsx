import React, { useState } from 'react';
import clsx from 'clsx';
import { BooksInterface } from 'src/app/logic/content/window/ContentWindow';
import bookUrl from 'src/resources/book.jpg'
import bookNotUrl from 'src/resources/book-not.jpg';

import styles from 'src/app/components/card/Card.module.scss';

/**
 * Card component
 */
export const Card: React.FC<BooksInterface> = (props: BooksInterface) => {
  const CARD_STYLES = clsx(styles.card);
  const IMG_STYLES = clsx(styles.image);
  const CONTENT_STYLES = clsx(styles.content);
  const RATING_STYLES = clsx(styles.rating);
  const TEXT_STYLES = clsx(styles.text);
  const TITLE_STYLES = clsx(styles.title);
  const AUTHOR_STYLES = clsx(styles.author);
  const BUTTON_STYLES = clsx(styles.button);
  const BUTTON_ACTIVE_STYLES = clsx(styles.active);
  const BUTTON_BOOKED_STYLES = clsx(styles.booked);

  const [isOnToggle, setIsOnToggle] = useState(true);

  const onClick = () => {
    setIsOnToggle(!isOnToggle);
  };

  const isBooking = (booking: string) => {
    if (booking === '') {
      if (isOnToggle) {
        return BUTTON_STYLES;
      }

      return BUTTON_ACTIVE_STYLES;
    }

    return BUTTON_BOOKED_STYLES;
  };

  return (
    <div className={CARD_STYLES}>
      <div className={IMG_STYLES}>
        <img
          alt={props.title}
          src={bookUrl}

          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = bookNotUrl;
          }}
        />
      </div>
      <div className={CONTENT_STYLES}>
        <div className={RATING_STYLES}>{props.raiting === '' ? 'нет отзывов' : props.raiting}</div>
        <div className={TEXT_STYLES}>
          <div className={TITLE_STYLES}>
            <span>{props.title}</span>
          </div>
          <div className={AUTHOR_STYLES}>{`${props.author}, ${props.year}`}</div>
        </div>
      </div>
      <button className={isBooking(props.booking)} onClick={onClick} type='button'>
        {props.booking === '' ? 'Забронировать' : `Занята до ${props.booking}`}
      </button>
    </div>
  );
};
