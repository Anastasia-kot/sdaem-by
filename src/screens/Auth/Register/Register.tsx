import Link from 'next/link'
import styles from './Register.module.scss'
import { Form } from './Form/Form';
import React, { FC } from 'react';

type Props = {
    onSubmitFunction: () => void
}

export const RegisterModal: FC<Props> = React.memo(({ onSubmitFunction}) => {
    return (
        <div className={styles.register}> 
            <h2 className={styles.register__title}> Регистрация  </h2>
            <div className={styles.register__form}><Form onSubmitFunction={onSubmitFunction} /></div>
            <div className={styles.register__description}>
                <h3 className={styles.description__title}>Пользователь обязуется:</h3>
                <ul className={styles.description__list}>
                    <li className={styles.list__item}> предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;</li>
                    <li className={styles.list__item}>добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.</li>
                </ul>

                <p className={styles.description__auth}>
                    <span> Уже есть аккаунт ? </span>
                    <Link href='/auth'>Войдите</Link>
                </p>
            </div>
        </div>
    )
})

RegisterModal.displayName = 'RegisterModal';

