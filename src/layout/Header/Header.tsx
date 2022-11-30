import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'

import styles from './Header.module.scss';
import Link from "../../../node_modules/next/link";
import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/router";
const logo = require('../../assets/images/logo.png');
 


const Header = () => {

    const [activeState, setActiveState] = useState(false);
    const userData = useSelector((state: RootState) => state.auth.data)
    const isAuth = useSelector((state: RootState) => state.auth.isAuth)

    

    const onBurgerClick = () => {
        setActiveState(prev => !prev);
    }

   



    return (
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

                        <li>
                            <Link href='/'>
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link href='/news'>
                                Новости                        </Link>
                        </li>
                        <li>                        <Link href='/catalogue'>
                            Размещение и тарифы                        </Link>
                        </li>
                        <li className={styles.NavigationItemActive}>
                            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.33796 1.74419C6.6054 0.627907 5.3961 0 4.03564 0C2.6868 0 1.4775 0.627907 0.721683 1.74419C-0.0341305 2.83721 -0.208549 4.23256 0.256567 5.45349C0.384474 5.77907 0.582148 6.11628 0.837962 6.4186L3.77982 9.88372C3.84959 9.95349 3.91936 10 4.02401 10C4.12866 10 4.19843 9.95349 4.2682 9.88372L7.22168 6.4186C7.4775 6.11628 7.6868 5.7907 7.80308 5.45349C8.2682 4.23256 8.09378 2.83721 7.33796 1.74419ZM4.03564 5.86047C3.03564 5.86047 2.21006 5.03488 2.21006 4.03488C2.21006 3.03488 3.03564 2.2093 4.03564 2.2093C5.03564 2.2093 5.86122 3.03488 5.86122 4.03488C5.86122 5.03488 5.04727 5.86047 4.03564 5.86047Z" fill="#8291A3" />
                            </svg>

                            Объявления на карте</li>
                        <li>
                            <Link href='/contacts'>
                                Контакты
                            </Link>
                        </li>
                    </ul>
                    <ul className={styles.HeaderNavigationList2}>
                        <li>                        
                            <Link href='/'>

                            <span>Закладки</span>
                            <button>
                  
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none">
                                    <path fill="#8291A3" d="m10 17.75-1.375-1.271Q6.354 14.417 4.927 13 3.5 11.583 2.698 10.521q-.802-1.063-1.083-1.948-.282-.885-.282-1.844 0-2.083 1.459-3.531Q4.25 1.75 6.354 1.75q.938 0 1.917.385.979.386 1.729 1.073.75-.687 1.729-1.073.979-.385 1.917-.385 2.104 0 3.562 1.448 1.459 1.448 1.459 3.531 0 .959-.271 1.823-.271.865-1.073 1.917-.802 1.052-2.24 2.489-1.437 1.438-3.75 3.563Zm0-2.771q1.979-1.791 3.25-3.031 1.271-1.24 2.031-2.167.761-.927 1.052-1.635.292-.708.292-1.417 0-1.25-.844-2.094-.843-.843-2.135-.843-.688 0-1.344.312-.656.313-.906.667l-.729.854H9.333l-.729-.854q-.25-.354-.927-.667Q7 3.792 6.354 3.792q-1.292 0-2.135.843-.844.844-.844 2.094 0 .709.271 1.386.271.677 1.01 1.593.74.917 2.021 2.167 1.281 1.25 3.323 3.104Zm0-5.604Z" />
                                </svg>
                             </button>
                        </Link>
                        </li>

                        <li>
                        {
                                isAuth 
                                ?   <>
                                        <img />
                                        <span> {userData.login}</span>
                                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 1.38477L6 5.64152L10.5 1.38477" stroke="#4E64F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>


                                    </> 
                                : 
                                    <Link href='/auth?task=auth'>
                                        Вход и регистрация
                                    </Link>
                        }
                          
                        </li>
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
        </header >
    )
}

export default Header;