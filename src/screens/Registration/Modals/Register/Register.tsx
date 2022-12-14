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
import { RegisterForm } from './Form/Form';
import { RegisterModalFormik } from './Form/RegisterFormik';


export const RegisterModal = (
    { onSubmitFunction }: { onSubmitFunction: () => void }
    ) => {

  
    return (
        <div className={styles.Register}> 
            <h2>
                Регистрация
            </h2>
            {/* // form validation */}
            <div className={styles.AuthForm}><RegisterModalFormik onSubmitFunction={onSubmitFunction} /></div>
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
