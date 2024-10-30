import React, { FC } from 'react';

import Header from '../components/Header';
import HowToWork from '../blocks/HowToWork';

const MainPage: FC = () => {
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="main">
                <HowToWork />
            </div>
        </>
    );
};

export default MainPage;
