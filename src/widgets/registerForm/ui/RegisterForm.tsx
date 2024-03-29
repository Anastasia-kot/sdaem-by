import styles from './RegisterForm.module.scss'
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Formik } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha'


import { SimpleButton } from './../../../shared/ui/buttons/Simple/Simple';
import { setAuthUserData, setToggleLogIn } from './../../../store/authSlice';
import { InputFormik } from './../../../shared/ui/Input/InputFormik';
import { RegisterFormType } from './../../../../types/authTypes';
import { validate } from '../lib/helpers';
import { buttonProps, inputProps } from '../model';

type Props = {
    onSubmitFunction: () => void
}
const YOUR_SITE_KEY = '6LcfQSwkAAAAANlE1Ola8Xh_K8BW8lkwSCugBH-l'  // for vercel.com

export const Form: FC<Props> = ({ onSubmitFunction }) => {

    const dispatch = useDispatch();

    const onSubmit = values => {
        onSubmitFunction()
        dispatch(setToggleLogIn(true))
        dispatch(setAuthUserData({ ...values }))
    }

    const initialValues: RegisterFormType = { login: '', email: '', password: '', password2: '', captcha: false };

    return (
        <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit} >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit} className={styles.form} >
                    <InputFormik
                        type={'text'}
                        value={values.login}
                        errors={errors}
                        name={'login'}
                        touched={touched}
                        placeholder={'Логин'}

                        {...inputProps}

                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2831_1302)">
                                <path d="M10.0013 0C7.14418 0 4.80859 2.33559 4.80859 5.19275C4.80859 8.04991 7.14418 10.3855 10.0013 10.3855C12.8585 10.3855 15.1941 8.04991 15.1941 5.19275C15.1941 2.33559 12.8585 0 10.0013 0Z" fill="#686868" />
                                <path d="M18.913 14.536C18.7769 14.1959 18.5955 13.8784 18.3915 13.5836C17.3484 12.0416 15.7384 11.0212 13.9244 10.7718C13.6976 10.7492 13.4482 10.7945 13.2668 10.9305C12.3144 11.6335 11.1806 11.9963 10.0014 11.9963C8.82228 11.9963 7.68851 11.6335 6.73612 10.9305C6.5547 10.7945 6.30526 10.7265 6.07853 10.7718C4.26446 11.0212 2.63183 12.0416 1.61143 13.5836C1.40735 13.8784 1.22592 14.2186 1.0899 14.536C1.02189 14.6721 1.04454 14.8308 1.11256 14.9669C1.29398 15.2843 1.52071 15.6018 1.72479 15.8739C2.04224 16.3048 2.38239 16.6902 2.76789 17.053C3.08534 17.3705 3.44815 17.6653 3.81099 17.9601C5.60236 19.2979 7.75657 20.0009 9.97879 20.0009C12.201 20.0009 14.3552 19.2979 16.1466 17.9601C16.5094 17.688 16.8722 17.3705 17.1897 17.053C17.5525 16.6902 17.9153 16.3047 18.2328 15.8739C18.4595 15.5791 18.6636 15.2843 18.845 14.9669C18.9583 14.8308 18.981 14.672 18.913 14.536Z" fill="#686868" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2831_1302">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </InputFormik>

                    <InputFormik
                        type={'email'}
                        value={values.email}
                        errors={errors}
                        name={'email'}
                        touched={touched}
                        placeholder={'Введите'}

                        {...inputProps}

                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <svg width="18" height="15" viewBox="0 0 18 15" fill="#686868" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.937 14.6252C16.3304 14.6252 16.6713 14.4953 16.961 14.2389L12.003 9.28063C11.8841 9.36581 11.7688 9.44864 11.6598 9.52741C11.2888 9.80078 10.9877 10.0141 10.7564 10.167C10.5252 10.3202 10.2176 10.4763 9.8336 10.6357C9.44935 10.7954 9.09137 10.8749 8.75928 10.8749H8.74956H8.73984C8.40773 10.8749 8.04975 10.7954 7.66552 10.6357C7.2813 10.4763 6.97368 10.3202 6.7427 10.167C6.51149 10.0141 6.21051 9.80081 5.83929 9.52741C5.73584 9.45157 5.62111 9.36835 5.49707 9.2793L0.538086 14.2389C0.827817 14.4953 1.16889 14.6252 1.56223 14.6252H15.937Z" />
                            <path d="M0.986433 6.15831C0.615429 5.91096 0.286427 5.62768 0 5.30859V12.8521L4.36999 8.48213C3.49574 7.87179 2.36932 7.09807 0.986433 6.15831Z" />
                            <path d="M16.524 6.15831C15.1939 7.05861 14.0633 7.83366 13.1323 8.48388L17.5005 12.8523V5.30859C17.2205 5.62126 16.895 5.90436 16.524 6.15831Z" />
                            <path d="M15.9377 0.875H1.56289C1.0614 0.875 0.675839 1.04435 0.405743 1.38269C0.135425 1.72119 0.000488281 2.14452 0.000488281 2.65221C0.000488281 3.0623 0.179557 3.50663 0.537535 3.98535C0.895513 4.46387 1.27643 4.83973 1.6801 5.11313C1.90139 5.26948 2.56874 5.73342 3.68213 6.50479C4.28317 6.92129 4.80585 7.28432 5.25502 7.5976C5.63787 7.86436 5.96805 8.09537 6.24066 8.28709C6.27195 8.30904 6.32117 8.34424 6.38649 8.39095C6.45687 8.4415 6.54592 8.50565 6.65579 8.58498C6.86736 8.738 7.04313 8.86169 7.18312 8.95618C7.32291 9.0507 7.49229 9.15628 7.691 9.27352C7.88954 9.3906 8.07681 9.47864 8.25257 9.5372C8.42837 9.59572 8.5911 9.62508 8.74081 9.62508H8.75054H8.76026C8.90994 9.62508 9.07271 9.59572 9.24854 9.5372C9.42427 9.47864 9.61137 9.39079 9.81008 9.27352C10.0086 9.15628 10.1777 9.05048 10.318 8.95618C10.458 8.86169 10.6337 8.73803 10.8453 8.58498C10.955 8.50565 11.044 8.44147 11.1144 8.39111C11.1798 8.34421 11.229 8.30923 11.2604 8.28709C11.4728 8.13931 11.8038 7.90925 12.2487 7.6003C13.0583 7.03777 14.2507 6.20982 15.8308 5.11313C16.306 4.78121 16.703 4.38066 17.0221 3.91205C17.3406 3.44344 17.5003 2.95189 17.5003 2.43756C17.5003 2.00784 17.3455 1.64014 17.0365 1.33389C16.7272 1.02802 16.3609 0.875 15.9377 0.875Z" />
                        </svg>
                    </InputFormik>


                    <InputFormik
                        type={'password'}
                        value={values.password}
                        errors={errors}
                        name={'password'}
                        touched={touched}
                        placeholder={'Пароль'}

                        {...inputProps}

                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="#686868" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.625 7.5H13V5C13 2.2425 10.7575 0 8 0C5.2425 0 3 2.2425 3 5V7.5H2.375C1.34167 7.5 0.5 8.34083 0.5 9.375V18.125C0.5 19.1592 1.34167 20 2.375 20H13.625C14.6583 20 15.5 19.1592 15.5 18.125V9.375C15.5 8.34083 14.6583 7.5 13.625 7.5ZM4.66667 5C4.66667 3.16167 6.16167 1.66667 8 1.66667C9.83833 1.66667 11.3333 3.16167 11.3333 5V7.5H4.66667V5ZM8.83333 13.935V15.8333C8.83333 16.2933 8.46083 16.6667 8 16.6667C7.53917 16.6667 7.16667 16.2933 7.16667 15.8333V13.935C6.67083 13.6458 6.33333 13.1142 6.33333 12.5C6.33333 11.5808 7.08083 10.8333 8 10.8333C8.91917 10.8333 9.66667 11.5808 9.66667 12.5C9.66667 13.1142 9.32917 13.6458 8.83333 13.935Z" />
                        </svg>
                    </InputFormik>

                    <InputFormik
                        type={'password'}
                        value={values.password2}
                        errors={errors}
                        name={'password2'}
                        touched={touched}
                        placeholder={'Повторите пароль'}

                        {...inputProps}

                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="#686868" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.625 7.5H13V5C13 2.2425 10.7575 0 8 0C5.2425 0 3 2.2425 3 5V7.5H2.375C1.34167 7.5 0.5 8.34083 0.5 9.375V18.125C0.5 19.1592 1.34167 20 2.375 20H13.625C14.6583 20 15.5 19.1592 15.5 18.125V9.375C15.5 8.34083 14.6583 7.5 13.625 7.5ZM4.66667 5C4.66667 3.16167 6.16167 1.66667 8 1.66667C9.83833 1.66667 11.3333 3.16167 11.3333 5V7.5H4.66667V5ZM8.83333 13.935V15.8333C8.83333 16.2933 8.46083 16.6667 8 16.6667C7.53917 16.6667 7.16667 16.2933 7.16667 15.8333V13.935C6.67083 13.6458 6.33333 13.1142 6.33333 12.5C6.33333 11.5808 7.08083 10.8333 8 10.8333C8.91917 10.8333 9.66667 11.5808 9.66667 12.5C9.66667 13.1142 9.32917 13.6458 8.83333 13.935Z" />
                        </svg>
                    </InputFormik>

                    <ReCAPTCHA sitekey={YOUR_SITE_KEY} onChange={handleChange} />

                    {Object.keys(errors).length > 0 && <span className={styles.Error}>
                        <span> Ошибка ввода </span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 2C11.1 2 11.9 2.9 11.8 4L11 12H9L8.2 4C8.1 2.9 8.9 2 10 2ZM10 18C8.9 18 8 17.1 8 16C8 14.9 8.9 14 10 14C11.1 14 12 14.9 12 16C12 17.1 11.1 18 10 18Z" fill="white" fill-opacity="0.5" />
                        </svg>
                    </span>}


                    <SimpleButton {...buttonProps} />


                </form>
            )}
        </Formik>

    )
}