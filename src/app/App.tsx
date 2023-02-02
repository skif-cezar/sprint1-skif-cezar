import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Content } from 'src/app/logic/content/content';
import { Layout } from 'src/app/logic/layout/layout';
import { MainLayout } from 'src/app/logic/main/main-layout';
import { BOOK_PAGE_URL,BookPage } from 'src/app/logic/pages/book/book-page';
import { Contract, CONTRACT_PAGE_URL } from 'src/app/logic/pages/contract/contract';
import { Terms, TERMS_PAGE_URL } from 'src/app/logic/pages/terms/terms';
import { BookProvider } from 'src/app/logic/store';

/**
 * The main component in app
 */
export const App: React.FC = () => (
  <BookProvider>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Navigate to='/books/all' />} />
            <Route path='/books/:category' element={<Content />} />
            <Route path={CONTRACT_PAGE_URL} element={<Contract />} />
            <Route path={TERMS_PAGE_URL} element={<Terms />} />
          </Route>
        </Route>
        <Route path={BOOK_PAGE_URL} element={<BookPage />} />
      </Routes>
    </HashRouter>
  </BookProvider>
);
