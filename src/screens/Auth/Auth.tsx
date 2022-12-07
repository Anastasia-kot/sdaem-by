import styles from './Auth.module.scss'
import { AuthForm } from './Modals/Auth/Auth'
 




export const Auth = () => {

    return (
        <main className={styles.Auth}>
            <div className={styles.ModalWrapper}>
                <AuthForm />
             </div>
        </main>
    )
}
