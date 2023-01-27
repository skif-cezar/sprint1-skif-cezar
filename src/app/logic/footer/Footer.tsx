import React from 'react';
import clsx from 'clsx';

import styles from 'src/app/logic/footer/Footer.module.scss';

/**
 * Footer component
 */
export const Footer: React.FC = () => {
  const FOOTER_STYLES = clsx(styles.footer);
  const COMPANY_STYLES = clsx(styles.company);
  const SOCIAL_STYLES = clsx(styles.social);

  return (
    <footer className={FOOTER_STYLES}>
      <div className={COMPANY_STYLES}>
        <span>&copy; 2020-2023 Cleverland. Все права защищены.</span>
      </div>
      <div className={SOCIAL_STYLES}>Соцсети</div>
    </footer>
  );
};
