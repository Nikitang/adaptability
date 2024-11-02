import './scss/app.scss';
import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import InitPage from './pages/InitPage';

const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<InitPage />} />
            <Route path="main" element={<MainPage />} />
        </Routes>
    );
};

export default App;
