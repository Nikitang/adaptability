import React, { FC } from 'react';

import backgroungPhone from '../assets/img/phone-backgroung.png';
import phone from '../assets/img/phone.png';

const ThirdBlock: FC = () => {
    return (
        <div id="third-block" className="main__third-block">
            <div className="main__third-block__left-side">
                <div className="main__third-block__left-side-title">
                    <span>Круто, ты дошел до третьего блока</span>
                </div>
                <div className="main__third-block__left-side-txt">
                    <span>
                        63% опрошенных пользовались кредитами из-за того, что не могли покрыть
                        непредвиденные расходы свыше 15 000 ₽.
                    </span>
                    <span>
                        Доступ к заработанным деньгам помогает отказаться от кредитов и экономить
                        деньги на процентах и штрафах.
                    </span>
                </div>
            </div>
            <div className="main__third-block__right-side">
                <img src={phone} alt="" />
            </div>
        </div>
    );
};

export default ThirdBlock;
