import {  useState } from 'react'
import styles from './Registration.module.scss'
import { RegisterModal } from './Modals/Register/Register'
import { SubmitModal } from './Modals/Submit/Submit'
import {  useDispatch } from 'react-redux'
import {  setToggleLogIn } from '../../store/authSlice'




export const Registration = () => {

 
 
    
    const dispatch = useDispatch();


 
    const [authModalState, setAuthModalState] = useState<AuthModalType>('registration')
    type AuthModalType =  'registration' | 'submit'
 
    return (
        <main className={styles.Auth}>
            <div className={styles.ModalWrapper}>
          
       
                {(authModalState === 'registration') && 
                    <RegisterModal   
                        onSubmitFunction={()=>{ 
                            // проверить данные и сделать редирект на окно подтверждения пароля setAuthModalStatus('submit')
                            setAuthModalState('submit')

                                 }}/>}

                {(authModalState === 'submit') && 
                    <SubmitModal onSubmitFunction={() => {
                        // проверить данные и сделать редирект на окно подтверждения пароля setAuthModalStatus('submit')
                        dispatch(setToggleLogIn(true))
                            }} />}
           
                    
        
             </div>
        </main>
    )
}
