import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './Auth.module.scss'
import { AuthModal } from './Modals/Auth/Auth'
import { RegisterModal } from './Modals/Register/Register'
import { SubmitModal } from './Modals/Submit/Submit'
import { useSelector, useDispatch } from 'react-redux'
import { setAuthUserData, setToggleLogIn, setInitialized } from '../../store/authSlice'




export const Auth = () => {


    // входящие данные
    const router = useRouter();
    let { task } = router.query; // AuthModalType
 
    
    const dispatch = useDispatch();


 

    type AuthModalType = 'auth' | 'register' | 'submit'
 
    return (
        <main className={styles.Auth}>
            <div className={styles.ModalWrapper}>
 
                {(task === 'auth') && 
                        <AuthModal 
                            onSubmit={()=>{ 
                                // проверить логин пароль и сделать редирект
                                 }}/>}
                {(task !== 'auth') && (task !== 'submit') && (task !== 'register') && <AuthModal
                    onSubmit={() => {
                        // проверить логин пароль и сделать редирект
                        dispatch(setToggleLogIn(true))
                      
                    }} />} 
                {(task === 'register') && 
                        <RegisterModal   
                            onSubmit={()=>{ 
                                // проверить данные и сделать редирект на окно подтверждения пароля setAuthModalStatus('submit')
                                 }}/>}
                {(task === 'submit') && <SubmitModal onSubmit={() => {
                    // проверить данные и сделать редирект на окно подтверждения пароля setAuthModalStatus('submit')
                    dispatch(setToggleLogIn(true))
                }} />}
           
                    
        
             </div>
        </main>
    )
}
