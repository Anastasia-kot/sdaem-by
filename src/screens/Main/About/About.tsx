import Image from 'next/image'
import styles from './About.module.scss'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { NewsType } from '../../../store/newsSlice';
import { dateConverter } from '../../../../helpers/dateConverters';
import Link from 'next/link';
const logo = require('../../../../public/images/logo.png');

 

export const About = () => {

    //надо отсортировать и найти 4 более новые (или взять последние 4 из массива)
    const news: NewsType[] = useSelector((state: RootState) => state.news.data)
  

    return (
  
        <div className={styles.about}>
            <div className={styles.AboutContent}>
                <h3>ЧТО ТАКОЕ SDAEM.BY</h3>
                <h2>Квартира на сутки в Минске</h2>

                <div src={logo} alt=" " className={styles.Image}/>
                <div className={styles.AboutText}>
                <h4>
                    Нужна квартира на сутки в Минске?

                </h4>
                <p>
                    На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает более 500 квартир. Благодаря удобной навигации вы быстро найдете подходящий вариант.
                </p>
                <p>
                    В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с большим количеством комнат в разных районах города, с различной степенью удобства от дешевых до VIP
                    с джакузи.
                </p>
                <p>
                    Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать квартиру на сутки.
                </p>

                </div>


            </div>


            <aside className={styles.about__news}>
 

                <h3 className={styles.news__title}>
                    Новости
                </h3>
                <ul className={styles.news__list}>
                    {news.map(n => {
                        if (news.indexOf(n)<4) { return <li key={news.indexOf(n)}>
                            <Link href={`/new/${n.id}`} >
                            <span>{n.title}</span>
                            <span>{dateConverter(n.date)}</span>
                            </Link>
                        </li>}
                    })}
                    <li key={news.length} >
                        <Link href='/news'>
                        <span>
                            Посмотреть все
                        </span>
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11L6 6L1 1" stroke="#664EF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </Link>
                    </li>
                </ul>


 </aside>

        </div>  


    )
}

          