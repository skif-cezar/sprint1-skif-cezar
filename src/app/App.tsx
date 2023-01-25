import React from 'react';
import {BrowserRouter as Router, HashRouter, Route, Routes} from 'react-router-dom';
import { Layout } from 'src/app/logic/layout/Layout';

/**
 * The main component in app
 */
export const App: React.FC = () => (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </HashRouter>
  );
