import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/app/logic/layout/Layout';

/**
 * The main component in app
 */
export const App: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<Layout />} />
    </Routes>
  </HashRouter>
);
