import React, { FC, MouseEvent, useState } from 'react';
import close from '../assets/img/close.png';
import menu from '../assets/img/menu.png';
import rightArrow from '../assets/img/right-arrow.svg';

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
                        <a onClick={setMenu} href="/#how-to-work">
                            Как это работает
                        </a>
                        <img src={rightArrow} alt="" />
                    </div>
                    <div className="header__block__selector">
                        <a onClick={setMenu} href="/#third-block">
                            3-й блок
                        </a>
                        <img src={rightArrow} alt="" />
                    </div>
                    <div className="header__block__selector">
                        <a onClick={setMenu} href="/#question-answer">
                            Вопросы и ответы
                        </a>
                        <img src={rightArrow} alt="" />
                    </div>
                    <div className="header__block__selector">
                        <a onClick={setMenu} href="/#form">
                            Форма
                        </a>
                        <img src={rightArrow} alt="" />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default SelectorsMenu;
