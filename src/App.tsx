import './assets/css/style.scss';
import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import InitPage from './pages/InitPage';

const App: FC = () => {
    return (
        <Routes>
            <Route
                path="https://nikitang.github.io/adaptability.github.io"
                element={<InitPage />}
            />
            <Route
                path="https://nikitang.github.io/adaptability.github.io/main"
                element={<MainPage />}
            />
        </Routes>
    );
};

export default App;
