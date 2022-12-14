import styles from './Auth.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { useDispatch } from 'react-redux'
import { setAuthUserData, setToggleLogIn } from '../../../../store/authSlice'

import { AuthFormType } from '../../../../../types/formTypes'
import { InputBlock } from '../../../../shared/Input/Input'

import avatar from '../../../../assets/images/svg/avatar.svg'
import lock from '../../../../assets/images/svg/lock.svg'
 


export const AuthForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();


    //for form
    const { handleSubmit, register, formState: { errors } } = useForm<AuthFormType>();
    const onSubmit = values => {
        // console.log(values);
        // проверка логина и пароля на сервере
        dispatch(setToggleLogIn(true))
        dispatch(setAuthUserData({ ...values } ))
        setTimeout(() => {
            router.push('/')
        },
            3000
        )
    }


    return (
        // form validation
        <form 
            className={styles.Auth}
            onSubmit={handleSubmit(onSubmit)}>

            <h2>
                Авторизация
            </h2>
            <p className={styles.Description}> Авторизируйтесь, чтобы начать   публиковать свои объявления </p>



            <div className={styles.LoginBlock}>
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




             <div className={styles.PasswordBlock}>

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




            <div className={styles.RememberMePasswordBlock}>
                <label className={styles.RememberMeBlock}>

                    <div className={styles.switch}>

                        <input type="checkbox"  {...register("rememberMe")} />
                        <span className={styles.slider}> </span>
                    </div>
                    <p> Запомнить меня </p>

                </label>


                 <Link href='#'>Забыли пароль?</Link>
            </div>

            <button > Войти </button>
            <p className={styles.RegisterBlock}>
                <span> Еще нет аккаунта? </span>
                <Link href='/registration'>Создайте акканут</Link>
            </p>

        </form>   

    )
}
