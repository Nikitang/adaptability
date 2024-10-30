import React, { FC } from 'react';

const Header: FC = () => {
    return (
        <>
            <div className="header__block">
                <div className="header__block__logo">
                    <div className="header__block__logo-one"></div>
                    <div className="header__block__logo-two"></div>
                    <span className="header__block__logo-txt">testLab</span>
                </div>
                <div className="header__block__selectors">
                    <div className="header__block__selector">
                        <a href="#how-to-work">Как это работает</a>
                    </div>
                    <div className="header__block__selector">
                        <a href="#">3-й блок</a>
                    </div>
                    <div className="header__block__selector">
                        <a href="#">Вопросы и ответы</a>
                    </div>
                    <div className="header__block__selector">
                        <a href="#">Форма</a>
                    </div>
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
