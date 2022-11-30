import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
// import { Card } from '../../components/Card/Card.tsx'
import styles from './Submit.module.scss'

export const SubmitModal = ({ onSubmit }: { onSubmit : ()=>void}) => {

    return (

        <div className={styles.Submit}>
            <h2>
                Подтвердите регистрацию
            </h2>
            <p>
                Письмо для подтверждения аккаунта отправлено почту. Перейдите по ссылке, указанной в письме. Если письма нет, то проверьте спам.
            </p>
            <Link href='/'>
                <button onClick={() => onSubmit()}>
                    Понятно
                </button>
            </Link>
       
        </div>
    )
}
