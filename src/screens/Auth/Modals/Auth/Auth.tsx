import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
// import { Card } from '../../components/Card/Card.tsx'
import styles from './Auth.module.scss'


export const AuthModal = ({ onSubmit }: { onSubmit : ()=>void}) => {

    return (

        <form className={styles.Auth}>

            <h2>
                Авторизация
            </h2>
            <p className={styles.Description}>
                Авторизируйтесь, чтобы начать
                публиковать свои объявления                    </p>

            <div className={styles.LoginBlock}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2831_1547)">
                        <path d="M10.0013 0C7.14418 0 4.80859 2.33559 4.80859 5.19275C4.80859 8.04991 7.14418 10.3855 10.0013 10.3855C12.8585 10.3855 15.1941 8.04991 15.1941 5.19275C15.1941 2.33559 12.8585 0 10.0013 0Z" fill="#664EF9" />
                        <path d="M18.913 14.536C18.7769 14.1959 18.5955 13.8784 18.3915 13.5836C17.3484 12.0416 15.7384 11.0212 13.9244 10.7718C13.6976 10.7492 13.4482 10.7945 13.2668 10.9305C12.3144 11.6335 11.1806 11.9963 10.0014 11.9963C8.82228 11.9963 7.68851 11.6335 6.73612 10.9305C6.5547 10.7945 6.30526 10.7265 6.07853 10.7718C4.26446 11.0212 2.63183 12.0416 1.61143 13.5836C1.40735 13.8784 1.22592 14.2186 1.0899 14.536C1.02189 14.6721 1.04454 14.8308 1.11256 14.9669C1.29398 15.2843 1.52071 15.6018 1.72479 15.8739C2.04224 16.3048 2.38239 16.6902 2.76789 17.053C3.08534 17.3705 3.44815 17.6653 3.81099 17.9601C5.60236 19.2979 7.75657 20.0009 9.97879 20.0009C12.201 20.0009 14.3552 19.2979 16.1466 17.9601C16.5094 17.688 16.8722 17.3705 17.1897 17.053C17.5525 16.6902 17.9153 16.3047 18.2328 15.8739C18.4595 15.5791 18.6636 15.2843 18.845 14.9669C18.9583 14.8308 18.981 14.672 18.913 14.536Z" fill="#664EF9" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2831_1547">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <input type="text" placeholder='Логин' />
            </div>
            <div className={styles.PasswordBlock}>

                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.625 7.5H13V5C13 2.2425 10.7575 0 8 0C5.2425 0 3 2.2425 3 5V7.5H2.375C1.34167 7.5 0.5 8.34083 0.5 9.375V18.125C0.5 19.1592 1.34167 20 2.375 20H13.625C14.6583 20 15.5 19.1592 15.5 18.125V9.375C15.5 8.34083 14.6583 7.5 13.625 7.5ZM4.66667 5C4.66667 3.16167 6.16167 1.66667 8 1.66667C9.83833 1.66667 11.3333 3.16167 11.3333 5V7.5H4.66667V5ZM8.83333 13.935V15.8333C8.83333 16.2933 8.46083 16.6667 8 16.6667C7.53917 16.6667 7.16667 16.2933 7.16667 15.8333V13.935C6.67083 13.6458 6.33333 13.1142 6.33333 12.5C6.33333 11.5808 7.08083 10.8333 8 10.8333C8.91917 10.8333 9.66667 11.5808 9.66667 12.5C9.66667 13.1142 9.32917 13.6458 8.83333 13.935Z" fill="#686868" />
                </svg>

                <input type="password" placeholder='Пароль' />
            </div>
            <div className={styles.RememberMePasswordBlock}>
                <label className={styles.RememberMeBlock}>

                    <div className={styles.switch}>
                        <input type="checkbox" />
                        <span className={styles.slider}></span>
                    </div>
                    <p> Запомнить меня </p>

                </label>


                 <Link href='/auth?task=submit'>Забыли пароль?</Link>
            </div>


            <button >
                Войти            </button>
            <p className={styles.RegisterBlock}>
                <span> Еще нет аккаунта? </span>
                <Link href='/auth?task=register'>Создайте акканут</Link>
             </p>

        </form>

    )
}
