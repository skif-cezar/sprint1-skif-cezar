import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/app/logic/layout/Layout';
import { Contract, CONTRACT_PAGE_URL } from 'src/app/logic/pages/contract/Contract';
import { Terms, TERMS_PAGE_URL } from 'src/app/logic/pages/terms/Terms';

/**
 * The main component in app
 */
export const App: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path={CONTRACT_PAGE_URL} element={<Contract />} />
        <Route path={TERMS_PAGE_URL} element={<Terms />} />
      </Route>
    </Routes>
  </HashRouter>
);
