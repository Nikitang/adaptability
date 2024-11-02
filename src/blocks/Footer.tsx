import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { FC, FocusEvent, useState } from 'react';
import * as yup from 'yup';

import success from '../assets/img/success.png';
import error from '../assets/img/error.png';
import axios from 'axios';

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
        <div id="form" className="footer__form">
            <div className="footer__form-title">
                <span>Отправь форму</span>
            </div>
            <Formik
                className="footer__form"
                initialValues={{ username: '', numberPhone: '' }}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    try {
                        await axios.post('...api...', values);
                        alert('Success!');
                    } catch (error) {
                        console.error(error);
                    }
                }}
            >
                {({ values, errors, touched }) => (
                    <Form>
                        <div className="footer__form-initials">
                            <label
                                className={`footer__form-initials-label-name ${
                                    focus.username ? 'focus' : values.username !== '' ? 'focus' : ''
                                }`}
                                htmlFor="username"
                            >
                                Имя
                            </label>
                            <Field
                                className={`footer__form-initials-name ${
                                    errors.username ? 'border-error' : ''
                                }`}
                                id="username"
                                type="text"
                                name="username"
                                placeholder={focus.username ? 'Имя' : ''}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                required
                            />
                            {errors.username ? (
                                <img
                                    className="footer__form-initials-name-error-png"
                                    src={error}
                                    alt=""
                                />
                            ) : values.username.length >= 2 ? (
                                <img
                                    className="footer__form-initials-name-success-png"
                                    src={success}
                                    alt=""
                                />
                            ) : (
                                <img
                                    className="footer__form-initials-name-error-png"
                                    src={error}
                                    alt=""
                                />
                            )}
                            <ErrorMessage
                                name="numberPhone"
                                component="div"
                                className="error-message"
                            />
                            <label
                                className={`footer__form-initials-label-number ${
                                    focus.numberPhone
                                        ? 'focus'
                                        : values.numberPhone !== ''
                                        ? 'focus'
                                        : ''
                                }`}
                                htmlFor="numberPhone"
                            >
                                Телефон
                            </label>
                            <Field
                                className={`footer__form-initials-number ${
                                    errors.numberPhone ? 'border-error' : ''
                                }`}
                                id="numberPhone"
                                type=""
                                name="numberPhone"
                                placeholder={focus.numberPhone ? 'Телефон' : ''}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                required
                            />
                            {errors.numberPhone ? (
                                <img
                                    className="footer__form-initials-number-error-png"
                                    src={error}
                                    alt=""
                                />
                            ) : (
                                <img
                                    className="footer__form-initials-number-success-png"
                                    src={success}
                                    alt=""
                                />
                            )}
                            <ErrorMessage
                                name="numberPhone"
                                component="div"
                                className="error-message"
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
                )}
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
