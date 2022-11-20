import React, { useEffect, useState } from "react";
import styles from './Header.module.scss';
import Link from "../../../node_modules/next/link";
import { useRouter } from "../../../node_modules/next/router";
import Image from "next/image";
const logo = require('../../images/logo.png');
const heart = require('../../images/heart.png');



const Header = () => {

     

    return( 
        <header className={styles.Header}>
            <nav className={styles.HeaderNavigation}>
                <ul className={styles.HeaderNavigationList}>
                    <div className={styles.HeaderNavigationList1}>
                        <li>Главная</li>
                        <li>Новости</li>
                        <li>Размещение и тарифы</li>
                        <li>Объявления на карте</li>
                        <li>Контакты</li>
                    </div>
                    <div className={styles.HeaderNavigationList2}>
                        <li>Закладки</li>
                        <li>
                            <button>
                                <Image src={heart} alt="SDAEM.BY" />
                            </button>
                        </li>
                        <li>Вход и регистрация</li>
                    </div>
                </ul>
            </nav>
            <div className={styles.HeaderCategories}>
                <ul className={styles.HeaderCategoriesList}>
                    <li>
                        <Image src={logo} alt="SDAEM.BY" />
                    </li>
                    <li>Квартиры на сутки</li>
                    <li>Коттеджи и усадьбы</li>
                    <li>Бани и сауны</li>
                    <li>Авто на прокат</li>
                    <li><button>+ Разместить объявление</button></li>
                </ul>
                
            </div>
        </header>
    )
}

export default Header;