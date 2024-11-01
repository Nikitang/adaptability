import { Field, Form, Formik } from 'formik';
import React, { FC, FocusEvent, useState } from 'react';

import * as yup from 'yup';

const validationSchema = yup.object().shape({
    username: yup.string().required('fff').min(2),
    numberPhone: yup.number().required(),
});

const Footer: FC = () => {
    const [focus, setFocus] = useState({ username: false, numberPhone: false });

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        setFocus({ ...focus, [e.target.name]: true });
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        setFocus({ ...focus, [e.target.name]: false });
    };

    return (
        <div className="footer__form">
            <div className="footer__form-title">
                <span>Отправь форму</span>
            </div>
            <Formik
                className="footer__form"
                initialValues={{ username: '', numberPhone: '' }}
                validationSchema={validationSchema}
                onSubmit={() => alert('Hi!')}
            >
                <Form>
                    <div className="footer__form-initials">
                        <label
                            className={`footer__form-initials-label-name ${
                                focus.username ? 'focus' : ''
                            }`}
                            htmlFor="username"
                        >
                            Имя
                        </label>
                        <Field
                            className="footer__form-initials-name"
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Имя"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            required
                        />
                        <label
                            className={`footer__form-initials-label-number ${
                                focus.numberPhone ? 'focus' : ''
                            }`}
                            htmlFor="numberPhone"
                        >
                            Телефон
                        </label>
                        <Field
                            className="footer__form-initials-number"
                            id="numberPhone"
                            type="email"
                            name="numberPhone"
                            placeholder="Телефон"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            required
                        />
                    </div>
                    <div className="footer__form-send">
                        <div className="footer__form-send-checkbox">
                            <Field type="checkbox" name="agree" required />
                            <span>Согласен, отказываюсь</span>
                        </div>

                        <button type="submit" className="footer__form-send-btn">
                            Отправить
                        </button>
                    </div>
                </Form>
            </Formik>

            <div className="footer__initials">
                <div className="footer__line"></div>
                <span>
                    <span>©</span> 2021 Лаборатория интернет
                </span>
            </div>
        </div>
    );
};

export default Footer;
