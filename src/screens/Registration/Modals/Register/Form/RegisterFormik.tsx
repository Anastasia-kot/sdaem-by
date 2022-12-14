
import styles from './Form.module.scss'
import { Formik } from 'formik';

import avatar from '../../../../../assets/images/svg/avatar.svg'
import lock from '../../../../../assets/images/svg/lock.svg'
import postal_envelope from '../../../../../assets/images/svg/postal_envelope.svg'
import { SimpleButton } from '../../../../../shared/buttons/Simple/Simple';
import { setAuthUserData, setToggleLogIn } from '../../../../../store/authSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { InputFormik } from '../../../../../shared/Input/InputFormik';
import React from 'react';
import { RegisterFormType } from '../../../../../../types/formTypes';


export const RegisterModalFormik = (
    { onSubmitFunction }: { onSubmitFunction: () => void }
) => {

    const dispatch = useDispatch();
    const router = useRouter();



    const onSubmit = values => {
        console.log(values);

        dispatch(setToggleLogIn(true))
        dispatch(setAuthUserData({ ...values }))
        setTimeout(() => {
            router.push('/')
        },
            3000
        )
    }

    const initialValues: RegisterFormType = { login: '', email: '', password: '', password2: '', captcha: false };

    return (
        <Formik
            initialValues  = {initialValues}
            validate={values => {
                const errors = {};

                if (!values.email) {
                    //@ts-ignore
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    //@ts-ignore

                    errors.email = 'Invalid email address';
                }

                if (!values.login) {
                    //@ts-ignore

                    errors.login = 'Required';
                } else if (
                    !/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i.test(values.login)
                ) {                    //@ts-ignore

                    errors.login = 'Invalid login';
                }

                if (!values.password) {
                    //@ts-ignore
                    errors.password = 'Required';
                }

                if (!values.password2) {
                    //@ts-ignore
                    errors.password2 = 'Required';
                } else if (
                    values.password !== values.password2
                ) {
                    //@ts-ignore
                    errors.password2 = 'Passwords must be same';
                }
                return errors;
            }}
            onSubmit={onSubmit}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit} className={styles.Form} >
                    <div className={styles.LoginBlock}>
                        <InputFormik
                            type={'text'}
                            value={values.login}
                            errors={errors}
                            name={'login'}
                            required={true}
                            touched={touched}


                            labelRus={null}
                            placeholder={'Логин'}
                            flexDirection={null}
                            width={306}
                            height={50}
                            imageSrc={avatar}


                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>

                    <div className={styles.EmailBlock}>
                        <InputFormik
                            type={'email'}
                            value={values.email}
                            errors={errors}
                            name={'email'}
                            required={true}
                            touched={touched}


                            labelRus={null}
                            placeholder={'Введите'}
                            flexDirection={'column'}
                            width={306}
                            height={50}
                            imageSrc={postal_envelope}


                            onChange={handleChange}
                            onBlur={handleBlur}
                        />


                    </div>


                    <div className={styles.PasswordBlock}>
                        <InputFormik
                            type={'password'}
                            value={values.password}
                            errors={errors}
                            name={'password'}
                            required={true} touched={touched}



                            labelRus={null}
                            placeholder={'Пароль'}
                            flexDirection={null}
                            width={306}
                            height={50}
                            imageSrc={lock}


                            onChange={handleChange}
                            onBlur={handleBlur}

                        />


                    </div>

                    <div className={styles.PasswordBlock}>
                        <InputFormik
                            type={'password'}
                            value={values.password2}
                            errors={errors}
                            name={'password2'}
                            required={true} touched={touched}



                            labelRus={null}
                            placeholder={'Повторите пароль'}
                            flexDirection={null}
                            width={306}
                            height={50}
                            imageSrc={lock}



                            onChange={handleChange}
                            onBlur={handleBlur}
                        />


                    </div>





                    <div className={styles.CapthaBlock}>
                        <label className={styles.Captha}>
                            <input type="checkbox" />

                            Я не робот
                        </label>

                    </div>



                    {Object.keys(errors).length > 0 && <span className={styles.Error}>
                        <span>Ошибка ввода</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 2C11.1 2 11.9 2.9 11.8 4L11 12H9L8.2 4C8.1 2.9 8.9 2 10 2ZM10 18C8.9 18 8 17.1 8 16C8 14.9 8.9 14 10 14C11.1 14 12 14.9 12 16C12 17.1 11.1 18 10 18Z" fill="white" fill-opacity="0.5" />
                        </svg>
                    </span>}


                    <SimpleButton
                        text={'Зарегистрироваться'}
                        width={306}
                        colorScheme={'yellowBlack'}
                        onClick={null}
                        type='submit' />


                </form>
            )}
        </Formik>

    )
}