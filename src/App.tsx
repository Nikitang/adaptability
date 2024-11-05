import './assets/css/style.scss';
import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import InitPage from './pages/InitPage';

const App: FC = () => {
    return <MainPage />;
};

export default App;
{
    /* <Routes>
<Route path="/" element={<InitPage />} />
<Route path="main" element={<MainPage />} />
</Routes> */
}
