import React, { FC } from 'react'
import styles from './CompanyInfo.module.scss'
import Image from 'next/image';

import exclamatory from '../../../../public/images/svg/exclamatory.svg'
import { contactsList } from '../model';


export const CompanyInfo: FC = () =>
    <address className={styles.info}>
        <h1 className={styles.info__title}>Контакты</h1>
        <p className={styles.info__description}>Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</p>

        <ul className={styles.info__list}>
            {contactsList.map(({ type, image, text, additional_image }, index) =>
                <li key={index} className={styles.list__item}>

                    <Image src={`/../../images/svg/${image}`} alt="" width={15} height={15} className={styles.item__icon} />

                    {type
                        ? <span className={styles.item__text}>
                            <a href={`${type}:${text}`}> {text}</a>
                        </span>
                        : typeof text === 'string'
                            ? <span className={styles.item__text}> {text}  </span>
                            : text.map((item, index) => <span key={index} className={styles.item__text_array}>{item}</span>)
                    }

                    {additional_image && <ul className={styles.messenger__list}> {additional_image.map(
                        (item, index) =>
                            <div className={styles.messenger__item} key={index}>
                                <Image src={`/../../images/svg/socials/${item}`} alt={item} width={15} height={15} />
                            </div>)}
                    </ul>}

                </li>)}
        </ul>

        <p className={styles.EntrepreneurInfo}> ИП Шушкевич   Андрей Викторович </p>
        <p className={styles.EntrepreneurInfo}> УНП 192602485 Минским горисполкомом 10.02.2016 </p>
        <div className={styles.info__alert}>
            <Image src={exclamatory} alt='exclamation point' height={35} width={35} />
            <p>Администрация сайта не владеет информацией о наличии свободных квартир</p>
        </div>
    </address>


