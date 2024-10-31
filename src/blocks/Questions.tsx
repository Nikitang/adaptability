import React, { useState } from 'react';

import lists from '../assets/questionsAnswer';
import plus from '../assets/img/plus.svg';

const Questions = () => {
    const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

    const toggleAnswer = (index: number) => {
        setActiveIndexes((prevIndexes: number[]) =>
            prevIndexes.includes(index)
                ? prevIndexes.filter((i) => i !== index)
                : [...prevIndexes, index]
        );
    };

    return (
        <div id="question-answer" className="main__question-answer">
            <h1 className="main__question-answer-title">Вопросы и ответы</h1>
            <ul className="main__question-answer__list">
                {lists.map((item, index) => (
                    <li key={index} className="main__question-answer__list-item">
                        <div className="main__question-answer__list-item-line"></div>
                        <div
                            className="main__question-answer__list-item__question"
                            onClick={() => toggleAnswer(index)}
                        >
                            <span>{item.question}</span>
                            <div className="main__question-answer__list-item__question-img ">
                                <img
                                    className={activeIndexes.includes(index) ? 'rotate' : ''}
                                    src={plus}
                                    alt=""
                                />
                            </div>
                        </div>
                        {activeIndexes.includes(index) && (
                            <div className="main__question-answer__list-item__answer">
                                {item.answer}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Questions;
