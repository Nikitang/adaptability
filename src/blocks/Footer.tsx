import { Field, Form, Formik } from 'formik';
import React, { FC } from 'react';

import * as yup from 'yup';

const validationSchema = yup.object().shape({
    username: yup.string().required().min(2),
    numberPhone: yup.number().required(),
});

const Footer: FC = () => {
    return (
        <div className="footer__form">
            <div className="footer__form-title">
                <span>Отправь форму</span>
            </div>
            <Formik
                className="footer__form"
                initialValues={{ username: '', numberPhone: '' }}
                onSubmit={() => alert('Hi!')}
            >
                <Form>
                    <div className="footer__form-initials">
                        <label htmlFor="username"></label>
                        <Field
                            className="footer__form-initials-name"
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Имя"
                            required
                        />
                        <label htmlFor="numberPhone"></label>
                        <Field
                            className="footer__form-initials-number"
                            id="numberPhone"
                            type="email"
                            name="numberPhone"
                            placeholder="Телефон"
                            required
                        />
                    </div>
                    <div className="footer__form-send">
                        <div className="footer__form-send-checkbox">
                            <Field type="checkbox" name="agree" required />
                            Согласен, отказываюсь
                        </div>

                        <button type="submit" className="footer__form-send-btn">
                            Отправить
                        </button>
                    </div>
                </Form>
            </Formik>
            <hr />
            <div className="footer__initials">
                <span>©</span> 2021 Лаборатория интернет
            </div>
        </div>
    );
};

export default Footer;
