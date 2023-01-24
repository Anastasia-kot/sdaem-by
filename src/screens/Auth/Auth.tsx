import Link from 'next/link';
import styles from './Auth.module.scss'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { AuthFormType } from '../../../types/loginFormTypes';
import { InputBlock } from '../../shared/Input/Input';
import { setAuthUserData, setToggleLogIn } from '../../store/authSlice';

import avatar from '../../../public/images/svg/avatar.svg'
import lock from '../../../public/images/svg/lock.svg'
import React, { FC, useState } from 'react';
import { AuthModal } from '../../entities/AuthModal/AuthModal';






export const Auth: FC = React.memo(() => {
    const dispatch = useDispatch();
    const router = useRouter();


    //for form
    const { handleSubmit, register, formState: { errors } } = useForm<AuthFormType>();
    const onSubmit = values => {
        // console.log(values);
        // проверка логина и пароля на сервере
        dispatch(setToggleLogIn(true))
        dispatch(setAuthUserData({ ...values }))
        setTimeout(() => {
            router.push('/')
        },
            3000
        )
    }



    //модалка сброса пароля
    enum AuthModalEnum {
        auth = 1,  //as true
        submit = 0  //as false
    }
    const [authModalState, setAuthModalState] = useState<AuthModalEnum>(AuthModalEnum.auth) 
    


    
    return (
        <main className={styles.auth}>
            {authModalState
                ? <form
                    className={styles.auth__form}
                    onSubmit={handleSubmit(onSubmit)}>

                    <h2 className={styles.form__title} > Авторизация  </h2>
                    <p className={styles.form__description}> Авторизируйтесь, чтобы начать   публиковать свои объявления </p>



                    <div className={styles.form__login}>
                        <InputBlock
                            type={'text'}
                            labelRus={null}
                            placeholder={'Логин'}
                            flexDirection={null}
                            width={306}
                            height={50}
                            imageSrc={avatar}

                            label={'login'}
                            register={register}
                            pattern={/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i}
                            required
                        />
                    </div>




                    <div className={styles.form__password}>
                        <InputBlock
                            type={'password'}
                            labelRus={null}
                            placeholder={'Пароль'}
                            flexDirection={null}
                            width={306}
                            height={50}
                            imageSrc={lock}

                            label={'password'}
                            register={register}
                            pattern={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i}
                            required
                        />
                    </div>




                    <div className={styles.form__rememberMe}>

                        <label className={styles.rememberMe__label}>
                            <div className={styles.switch}>
                                <input type="checkbox"  {...register("rememberMe")} />
                                <span className={styles.slider}> </span>
                            </div>
                            <p> Запомнить меня </p>
                        </label>

                        <button className={styles.violet} 
                            onClick={()=>setAuthModalState(AuthModalEnum.submit)}>Забыли пароль?</button>

                    </div>

                    <button className={styles.form__submit}> Войти </button>
                    <p className={styles.form__register}>
                        <span> Еще нет аккаунта? </span>
                        <Link href='/registration'>Создайте акканут</Link>
                    </p>

                </form> 
                : <AuthModal title='Подтвердите свой аккаунт'/>
            }
             
        </main>
    )
})

Auth.displayName = 'Auth';
