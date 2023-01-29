import React from 'react';
import { HashRouter, Navigate,Route, Routes } from 'react-router-dom';
import { Content } from 'src/app/logic/content/Content';
import { Layout } from 'src/app/logic/layout/Layout';
import { MainLayout } from 'src/app/logic/main/MainLayout';
import { BookPage } from 'src/app/logic/pages/book/BookPage';
import { Contract, CONTRACT_PAGE_URL } from 'src/app/logic/pages/contract/Contract';
import { Terms, TERMS_PAGE_URL } from 'src/app/logic/pages/terms/Terms';
import { BookProvider } from 'src/app/logic/Store';

/**
 * The main component in app
 */
export const App: React.FC = () => (
  <BookProvider>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Content />} />
            <Route path='/books/all' element={<Navigate to='/' />} />
            <Route path={CONTRACT_PAGE_URL} element={<Contract />} />
            <Route path={TERMS_PAGE_URL} element={<Terms />} />
          </Route>
        </Route>
        <Route path='/book-page' element={<BookPage />} />
      </Routes>
    </HashRouter>
  </BookProvider>
);
