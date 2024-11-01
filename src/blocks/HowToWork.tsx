import React from 'react';

import card1 from '../assets/img/card1.png';
import card2 from '../assets/img/card2.png';
import card3 from '../assets/img/card3.png';
import card4 from '../assets/img/card4.png';

const HowToWork = () => {
    return (
        <div id="how-to-work" className="main__how-to-work">
            <div className="main__how-to-work__title">
                <span>Как это работает</span>
            </div>
            <div className="main__how-to-work__cards">
                <div className="main__how-to-work__card">
                    <div className="main__how-to-work__card-logo">
                        <img src={card1} alt="" />
                    </div>
                    <div className="main__how-to-work__card-title">
                        <span className="main__how-to-work__card-title-title">
                            Прочитай задание внимательно
                        </span>

                        <span className="main__how-to-work__card-title-txt">
                            Думаю у тебя не займет это больше двух-трех минут
                        </span>
                    </div>
                </div>
                <div className="main__how-to-work__card">
                    <div className="main__how-to-work__card-logo">
                        <img src={card2} alt="" />
                    </div>
                    <div className="main__how-to-work__card-title">
                        <span className="main__how-to-work__card-title-title">
                            Изучи весь макет заранее
                        </span>

                        <span className="main__how-to-work__card-title-txt">
                            Подумай как это будет работать на разных разрешениях и при скролле
                        </span>
                    </div>
                </div>
                <div className="main__how-to-work__card">
                    <div className="main__how-to-work__card-logo">
                        <img src={card3} alt="" />
                    </div>
                    <div className="main__how-to-work__card-title">
                        <span className="main__how-to-work__card-title-title">Сделай хорошо</span>

                        <span className="main__how-to-work__card-title-txt">
                            Чтобы мы могли тебе доверить подобные задачи в будущем
                        </span>
                    </div>
                </div>
                <div className="main__how-to-work__card">
                    <div className="main__how-to-work__card-logo">
                        <img src={card4} alt="" />
                    </div>
                    <div className="main__how-to-work__card-title">
                        <span className="main__how-to-work__card-title-title">
                            Получи предложение
                        </span>

                        <span className="main__how-to-work__card-title-txt">
                            Ну тут все просто, не я придумал правила, но думаю так и будет)))
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToWork;
