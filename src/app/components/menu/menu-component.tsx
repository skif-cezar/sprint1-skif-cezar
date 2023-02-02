import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { CONTRACT_PAGE_URL } from 'src/app/logic/pages/contract/contract-page';
import { TERMS_PAGE_URL } from 'src/app/logic/pages/terms/terms-page';
import MenuListDTO from 'src/app/MenuList.json';

import styles from 'src/app/components/menu/Menu.module.scss';

/**
 * Interface menu list
 */
export interface MenuListInterface {
  id: number;
  title: string;
  amount?: number;
  category: string;
}

/**
 * Menu component
 */
export const Menu: React.FC = () => {
  const MENU_STYLES = clsx(styles.menu);
  const LIST_STYLES = clsx(styles.list);
  const ITEM_STYLES = clsx(styles.item);
  const ACTIVE_LINK_STYLES = clsx(styles.active);
  const SUB_LIST_STYLES = clsx(styles.sub_list);
  const SUB_ITEM_STYLES = clsx(styles.sub_item);
  const SUB_LINK_STYLES = clsx(styles.sub_link);
  const ACTIVE_SUB_LINK_STYLES = clsx(styles.active_sub_link);

  return (
    <nav className={MENU_STYLES}>
      <ul className={LIST_STYLES}>
        <li className={ITEM_STYLES}>
          <NavLink to='/books/all' className={({ isActive }) => (isActive ? ACTIVE_LINK_STYLES : undefined)}>
            Витрина книг
          </NavLink>
        </li>
        <ul className={SUB_LIST_STYLES}>
          {MenuListDTO &&
            MenuListDTO.map((list: MenuListInterface) => (
              <li key={list.id} className={SUB_ITEM_STYLES}>
                <NavLink to={`/books/${list.category}`} className={({ isActive }) => (isActive ? ACTIVE_SUB_LINK_STYLES : SUB_LINK_STYLES)}>
                  <span>{list.title}</span>&nbsp;<small>{list.amount}</small>
                </NavLink>
              </li>
            ))}
        </ul>
        <li className={ITEM_STYLES}>
          <NavLink to={TERMS_PAGE_URL} className={({ isActive }) => (isActive ? ACTIVE_LINK_STYLES : undefined)}>
            Правила пользования
          </NavLink>
        </li>
        <li className={ITEM_STYLES}>
          <NavLink to={CONTRACT_PAGE_URL} className={({ isActive }) => (isActive ? ACTIVE_LINK_STYLES : undefined)}>
            Договор оферты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
