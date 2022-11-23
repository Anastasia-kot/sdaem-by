import React, { useEffect, useState } from "react";
import styles from './Header.module.scss';
import Link from "../../../node_modules/next/link";
import { useRouter } from "../../../node_modules/next/router";
import Image from "next/image";
import classNames from "classnames";
const logo = require('../../assets/images/logo.png');
const heart = require('../../assets/images/heart.png');



const Header = () => {
    
    const [activeState, setActiveState] = useState(false);
   
    const onBurgerClick = () => {
        setActiveState(prev => !prev);
    }
     

    return( 
        <header className={styles.Header}>
            <nav className={styles.HeaderNavigation}>
                <ul className={styles.HeaderNavigationList}>
                    <div
                        className={classNames(
                            styles.HeaderBurger,
                            { [styles.active]: activeState },
                        )}

                        onClick={onBurgerClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul 
                        className={classNames(
                            styles.HeaderNavigationList1,
                            { [styles.active]: activeState },
                        )}
                    >
            
                        <li>Главная</li>
                        <li>Новости</li>
                        <li>Размещение и тарифы</li>
                        <li className={styles.NavigationItemActive}>
                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.33796 1.74419C6.6054 0.627907 5.3961 0 4.03564 0C2.6868 0 1.4775 0.627907 0.721683 1.74419C-0.0341305 2.83721 -0.208549 4.23256 0.256567 5.45349C0.384474 5.77907 0.582148 6.11628 0.837962 6.4186L3.77982 9.88372C3.84959 9.95349 3.91936 10 4.02401 10C4.12866 10 4.19843 9.95349 4.2682 9.88372L7.22168 6.4186C7.4775 6.11628 7.6868 5.7907 7.80308 5.45349C8.2682 4.23256 8.09378 2.83721 7.33796 1.74419ZM4.03564 5.86047C3.03564 5.86047 2.21006 5.03488 2.21006 4.03488C2.21006 3.03488 3.03564 2.2093 4.03564 2.2093C5.03564 2.2093 5.86122 3.03488 5.86122 4.03488C5.86122 5.03488 5.04727 5.86047 4.03564 5.86047Z" fill="#8291A3" />
                            </svg>

                            Объявления на карте</li>
                        <li>Контакты</li>
                    </ul>
                    <ul className={styles.HeaderNavigationList2}>
                        <li>
                            <span>Закладки</span>
                            <button>
                                <Image src={heart} alt="SDAEM.BY" />
                            </button>
                        </li>
                       
                        <li>Вход и регистрация</li>
                    </ul>
                </ul>
            </nav>




            <div className={styles.HeaderCategories}>
                <ul className={styles.HeaderCategoriesList}>
                    <li>
                        <Image src={logo} alt="SDAEM.BY" />
                    </li>
                    <li>
                        <span>Квартиры на сутки</span>
                        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0074 2.61628C9.9086 0.941861 8.09464 0 6.05394 0C4.03069 0 2.21673 0.941861 1.08301 2.61628C-0.0507075 4.25581 -0.312336 6.34884 0.385339 8.18023C0.577199 8.6686 0.873711 9.17442 1.25743 9.62791L5.67022 14.8256C5.77487 14.9302 5.87953 15 6.0365 15C6.19348 15 6.29813 14.9302 6.40278 14.8256L10.833 9.62791C11.2167 9.17442 11.5307 8.68605 11.7051 8.18023C12.4028 6.34884 12.1412 4.25581 11.0074 2.61628ZM6.05394 8.7907C4.55394 8.7907 3.31557 7.55233 3.31557 6.05233C3.31557 4.55233 4.55394 3.31395 6.05394 3.31395C7.55394 3.31395 8.79232 4.55233 8.79232 6.05233C8.79232 7.55233 7.57139 8.7907 6.05394 8.7907Z" fill="#FFD54F" />
                        </svg>

                    </li>
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