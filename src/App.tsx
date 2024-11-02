import './assets/css/style.scss';
import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import InitPage from './pages/InitPage';

const App: FC = () => {
    return <Route path="main" element={<MainPage />} />;
};

export default App;
