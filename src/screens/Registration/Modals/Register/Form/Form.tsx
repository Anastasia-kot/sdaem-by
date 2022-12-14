import { useForm } from "react-hook-form";
import { RegisterFormType } from '../../../../../../types/formTypes'
import { InputBlock } from '../../../../../shared/Input/Input'
import styles from './Form.module.scss'

import avatar from '../../../../../assets/images/svg/avatar.svg'
import lock from '../../../../../assets/images/svg/lock.svg'
import postal_envelope from '../../../../../assets/images/svg/postal_envelope.svg'
import { SimpleButton } from '../../../../../shared/buttons/Simple/Simple';
import { setAuthUserData, setToggleLogIn } from '../../../../../store/authSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';


export const RegisterForm = (className) => {

    const dispatch = useDispatch();
    const router = useRouter();


    const { handleSubmit, register, formState: { errors } } = useForm<RegisterFormType>(
        {
            mode: "onChange",
        }
    );
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
    return (


        <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>


            <div className={styles.LoginBlock}>
                <InputBlock
                    type={'text'}
                    labelRus={null}
                    placeholder={'Логин'}
                    flexDirection={null}
                    width={306}
                    height={50}
                    imageSrc={avatar}

                    label={'Login'}
                    register={register}
                    pattern={/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i}
                    errors={errors}
                    errorPatternMessage={'Логин состояит из 1-20 английских букв и цифр, начинается с буквы'}
                    required
                />
            </div>
            <div className={styles.EmailBlock}>

                <InputBlock
                    type={'email'}
                    labelRus={null}
                    placeholder={'Введите'}
                    flexDirection={'column'}
                    width={306}
                    height={50}
                    imageSrc={postal_envelope}

                    label={'Email'}
                    register={register}
                    pattern={/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i}
                    errors={errors}
                    errorPatternMessage={'Логин состояит из 1-20 английских букв и цифр, начинается с буквы'}
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

                    label={'Password'}
                    register={register}
                    pattern={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i}
                    errors={errors}
                    errorPatternMessage={'Логин состояит из 1-20 английских букв и цифр, начинается с буквы'}
                    required
                />


            </div>
            <div className={styles.PasswordBlock}>
                <InputBlock
                    type={'password'}
                    labelRus={null}
                    placeholder={'Повторите пароль'}
                    flexDirection={null}
                    width={306}
                    height={50}
                    imageSrc={lock}

                    label={'Password'}
                    register={register}
                    pattern={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i}
                    errors={errors}
                    errorPatternMessage={'Логин состояит из 1-20 английских букв и цифр, начинается с буквы'}
                    required
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
                    <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 2C11.1 2 11.9 2.9 11.8 4L11 12H9L8.2 4C8.1 2.9 8.9 2 10 2ZM10 18C8.9 18 8 17.1 8 16C8 14.9 8.9 14 10 14C11.1 14 12 14.9 12 16C12 17.1 11.1 18 10 18Z" fill="white" fillOpacity="0.5" />
                </svg>
            </span>}


            <SimpleButton
                text={'Зарегистрироваться'}
                width={306}
                colorScheme={'yellowBlack'}
                onClick={null}
                type='submit' />


        </form>
    )
}
