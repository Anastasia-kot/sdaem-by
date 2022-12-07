import Link from 'next/link'
import { useForm } from "react-hook-form";
import { RegisterFormType } from '../../../../../types/formTypes'
import { InputBlock } from '../../../../shared/Input/Input'
import styles from './Register.module.scss'

import avatar from '../../../../assets/images/svg/avatar.svg'
import lock from '../../../../assets/images/svg/lock.svg'
import postal_envelope from '../../../../assets/images/svg/postal_envelope.svg'
import { SimpleButton } from '../../../../shared/buttons/Simple/Simple';
import { setAuthUserData, setToggleLogIn } from '../../../../store/authSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';


export const RegisterModal = (
    { onSubmitFunction }: { onSubmitFunction: () => void }
    ) => {

    const dispatch = useDispatch();
    const router = useRouter();


    const { handleSubmit, register, formState: { errors } } = useForm<RegisterFormType>();
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
        <div className={styles.Register}> 
            <h2>
                Регистрация
            </h2>
            <form className={styles.AuthForm} onSubmit={handleSubmit(onSubmit)}>

       
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
                        required
                    />

                 
                </div>


            <div className={styles.CapthaBlock}>
                <label className={styles.Captha}>
                        <input type="checkbox" />

                    Я не робот
                </label>

            </div>
 


 
            <span className={styles.Error}> 
                    <span>Ошибка ввода</span>  
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 2C11.1 2 11.9 2.9 11.8 4L11 12H9L8.2 4C8.1 2.9 8.9 2 10 2ZM10 18C8.9 18 8 17.1 8 16C8 14.9 8.9 14 10 14C11.1 14 12 14.9 12 16C12 17.1 11.1 18 10 18Z" fill="white" fill-opacity="0.5" />
                    </svg>
            </span>

            <SimpleButton
                    text={'Зарегистрироваться'}
                    width={306}
                    colorScheme={'yellowBlack'}
                    onClick={null}
                    type='submit' /> 
 
        
        </form>





            <div className={styles.DescriptionColumn}>
                <h3>Пользователь обязуется:</h3>
                <ul>
                    <li>предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;</li>
                    <li>добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.</li>
                </ul>

                <p className={styles.AuthBlock}>
                    <span> Уже есть аккаунт ? </span>
                    <Link href='/auth?task=auth'>Войдите</Link>
                </p>
            </div>
        </div>
    )
}
