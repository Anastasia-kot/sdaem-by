import React, { FC } from 'react'
import styles from './404.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import dotes from './../../../public/images/svg/dotes.svg'
import error_image from './../../../public/images/svg/404image.svg'
import house from './../../../public/images/svg/house_black.svg'

export const Page404: FC = () => {
    return (
        <main className={styles.error}>

            <Image src={dotes} alt="dotes" className={styles.error__dotes} />
            <Image src={dotes} alt="dotes" className={styles.error__dotes} />            
            <Image src={error_image} alt="error_image" className={styles.error__error_image} />

            <h1 className={styles.error__title}>Ошибка 404</h1>
            <p className={styles.error__subtitle}>Возможно, у вас опечатка в адресе страницы, или её просто не существует</p>
            <Link href='/'>
                <button type="button" className={styles.error__button}>
                    <Image src={house} alt="house"/>           
                    Вернуться на главную
                </button>
            </Link>

        </main>
    )
}
