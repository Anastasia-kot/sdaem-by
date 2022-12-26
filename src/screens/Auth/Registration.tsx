import styles from './Auth.module.scss'
import {  useState } from 'react'
import { useDispatch } from 'react-redux'

import { setToggleLogIn } from '../../store/authSlice'

import { RegisterModal } from './Register/Register'
import { AuthModal } from '../../entities/AuthModal/AuthModal'




export const Registration = () => {

    const dispatch = useDispatch();


    //модалка сброса пароля
    enum AuthModalEnum {
        register = 1,  //as true
        submit = 0  //as false
    }
    const [authModalState, setAuthModalState] = useState<AuthModalEnum>(AuthModalEnum.register)



    return (
        <main className={styles.registration}>
                {authModalState
                    ? <RegisterModal
                        onSubmitFunction={() => {
                            // проверить данные и сделать редирект на окно подтверждения пароля setAuthModalStatus('submit')
                            setAuthModalState(AuthModalEnum.submit)
                        }} />
                    : <AuthModal title=' Подтвердите регистрацию'/>
                }
        </main>
    )
}
