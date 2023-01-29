import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ContentWindow } from 'src/app/logic/content/window/ContentWindow';
import { Layout } from 'src/app/logic/layout/Layout';
import { MainLayout } from 'src/app/logic/main/MainLayout';
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
            <Route path='/book/all' element={<ContentWindow />} />
            <Route path={CONTRACT_PAGE_URL} element={<Contract />} />
            <Route path={TERMS_PAGE_URL} element={<Terms />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </BookProvider>
);
