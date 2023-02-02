import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useState } from 'react';

/**
 * Store interface
 */
export interface StoreInterface {
  /**
   * Content display view
   */
  view: boolean;

  /**
   * Set content display view
   */
  setView: Dispatch<SetStateAction<boolean>>;
}

/**
 * Store for book store
 */
export const useBookStore = (): StoreInterface => {
  const [view, setView] = useState<boolean>(true);

  return {
    view,
    setView,
  };
};

/**
 * Provide access to BookStore
 */
export const BookContext = createContext({} as StoreInterface);

/**
 * Provider for book store
 */
export const BookProvider: FC<PropsWithChildren> = (props: PropsWithChildren) => (
  <BookContext.Provider value={useBookStore()}>{props.children}</BookContext.Provider>
);
