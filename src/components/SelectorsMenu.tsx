import React, { FC, MouseEvent, useState } from 'react';
import close from '../assets/img/close.png';
import menu from '../assets/img/menu.png';
import rightArrow from '../assets/img/right-arrow.svg';
import { Link } from 'react-router-dom';

const SelectorsMenu: FC = () => {
    const [open, setOpen] = useState(false);
    const setMenu = (): void => {
        setOpen(false);
    };

    const toggleMenu = (e: MouseEvent<HTMLButtonElement>) => {
        open === true ? setOpen(false) : setOpen(true);
    };

    return (
        <>
            <div className={`header__block__logo-mobile ${open ? 'opened' : ''}`}>
                <div className="header__block__logo-mobile-one"></div>
                <div className="header__block__logo-mobile-two"></div>
                <span className="header__block__logo-mobile-txt">testLab</span>
            </div>
            <button onClick={toggleMenu} className="header__block__selectors-btn">
                {open ? <img src={close} alt="" /> : <img src={menu} alt="" />}
            </button>
            <nav className={`header__block__selectors-nav ${open ? 'opened' : ''}`}>
                <div>
                    <div className="header__block__selector">
                        <Link onClick={setMenu} to="#how-to-work">
                            Как это работает
                        </Link>
                        <img src={rightArrow} alt="" />
                    </div>
                    <div className="header__block__selector">
                        <Link onClick={setMenu} to="#third-block">
                            3-й блок
                        </Link>
                        <img src={rightArrow} alt="" />
                    </div>
                    <div className="header__block__selector">
                        <Link onClick={setMenu} to="#question-answer">
                            Вопросы и ответы
                        </Link>
                        <img src={rightArrow} alt="" />
                    </div>
                    <div className="header__block__selector">
                        <Link onClick={setMenu} to="#form">
                            Форма
                        </Link>
                        <img src={rightArrow} alt="" />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default SelectorsMenu;
