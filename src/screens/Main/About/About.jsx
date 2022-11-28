import Image from 'next/image'
import styles from './About.module.scss'
import React from 'react'
const logo = require('../../../assets/images/logo.png');

 

export const About = () => {

    const news = [
        {
            title: 'Линия Сталина: суровый отдых в усадьбах  на сутки',
            date: '14 Январь'
        },
        {
            title: 'Аренда квартиры посуточно',
            date: '14 Январь'
        },
        {
            title: 'Дворцово-парковый комплекс Чапских',
            date: '14 Январь'
        },
        {
            title: 'Дворцово-парковый комплекс Чапских',
            date: '14 Январь'
        },
        {
            title: 'Дворцово-парковый комплекс Чапских',
            date: '14 Январь'
        },
    ]

    return (
  
        <div className={styles.AboutBlock}>
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
            <aside className={styles.NewsAsideBlock}>
            <div className={styles.NewsAside}>


                <h3>
                    Новости
                </h3>
                <ul>
                    {news.map(n => <li key={news.indexOf(n)}>
                        <span>{n.title}</span>
                        <span>{n.date}</span>
                    </li>)}
                    <li key={news.length} >
                        <span>
                            Посмотреть все
                        </span>
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11L6 6L1 1" stroke="#664EF9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </li>
                </ul>

            </div>

 </aside>

        </div>  


    )
}

          