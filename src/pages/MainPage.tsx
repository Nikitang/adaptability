import React, { FC } from 'react';

import Header from '../components/Header';
import HowToWork from '../blocks/HowToWork';
import ThirdBlock from '../blocks/ThirdBlock';
import Reviews from '../blocks/Reviews';
import Questions from '../blocks/Questions';
import Facts from '../blocks/Facts';
import Footer from '../blocks/Footer';

const MainPage: FC = () => {
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="main">
                <HowToWork />
                <ThirdBlock />
                <Reviews />
                <Questions />
                <Facts />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    );
};

export default MainPage;
