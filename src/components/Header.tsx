import React, { FC, useEffect, useState } from 'react';

import SelectorsMenu from './SelectorsMenu';
import { Link } from 'react-router-dom';

const Header: FC = () => {
    const [mobile, setMobile] = useState(false);

    const handleResize = () => {
        setMobile(window.innerWidth <= 768);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="header__block">
                <div className="header__block__logo">
                    <div className="header__block__logo-one"></div>
                    <div className="header__block__logo-two"></div>
                    <span className="header__block__logo-txt">testLab</span>
                </div>
                <div className="header__block__selectors">
                    {mobile ? (
                        <SelectorsMenu />
                    ) : (
                        <nav className="header__block__selectors-nav">
                            <div className="header__block__selector">
                                <Link to="#how-to-work">Как это работает</Link>
                            </div>
                            <div className="header__block__selector">
                                <Link to="#third-block">3-й блок</Link>
                            </div>
                            <div className="header__block__selector">
                                <Link to="#question-answer">Вопросы и ответы</Link>
                            </div>
                            <div className="header__block__selector">
                                <Link to="#form">Форма</Link>
                            </div>
                        </nav>
                    )}
                </div>
            </div>
            <div className="header__cart">
                <div className="header__cart__items">
                    <span className="header__cart__items-title">
                        Говорят, никогда не поздно сменить профессию
                    </span>
                    <span className="header__cart__items-txt">
                        Сделай круто тестовое задание и у тебя получится
                    </span>
                    <button className="header__cart__items-btn">Проще простого!</button>
                </div>
            </div>
        </>
    );
};

export default Header;
