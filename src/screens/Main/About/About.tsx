import Image from 'next/image'
import styles from './About.module.scss'
import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { dateConverter } from '../../../../helpers/dateConverters';
import Link from 'next/link';
import { sortingNewsPerDate } from '../../../../helpers/sortingFunctions';
const room = require('../../../../public/images/room-about.png');

import dotes from './../../../../public/images/svg/dotes.svg'
import arrow from './../../../../public/images/svg/arrow_right_violet.svg'
import { NewsState } from '../../../../types/news_data';

type Props = {
    data: NewsState
}

export const About: FC<Props> = ({data}) => {

    const { items } = data

    //надо отсортировать и найти 4 более новые (или взять последние 4 из массива)
    const sortedNews = sortingNewsPerDate(items).slice(0, 4)

    return (

        <div className={styles.about}>
            <div className={styles.about__content}>
                <h3 className={styles.content__subtitle}>ЧТО ТАКОЕ SDAEM.BY</h3>
                <h2 className={styles.content__title}>Квартира на сутки в Минске</h2>

                <Image src={room} alt="room" className={styles.content__image} />
                <Image src={dotes} alt="dotes" className={styles.content__dotes} />

                <div className={styles.content__description}>
                    <h4>
                        Нужна квартира на сутки в Минске?
                    </h4>
                    <p>
                        На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает более 500 квартир. Благодаря удобной навигации вы быстро найдете подходящий вариант.
                    </p>
                    <p>
                        В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с большим количеством комнат в разных районах города, с различной степенью удобства от дешевых до VIP с джакузи.
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
                    {sortedNews.map(({ id, title, date }, index) => {
                        return (
                            <li key={index}>
                                <Link href={`/new/${id}`} >
                                    <span>{title}</span>
                                    <span>{dateConverter(date)}</span>
                                </Link>
                            </li>)
                    })}
                    <li key={sortedNews.length} >
                        <Link href='/news'>
                            Посмотреть все
                            <Image src={arrow} alt="arrow" className={styles.a} />
                        </Link>
                    </li>
                </ul>


            </aside>

        </div>


    )
}