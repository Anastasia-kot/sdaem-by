import React, { FC, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store/store'

import styles from './Header.module.scss';
import Link from "../../../node_modules/next/link";
import Image from "next/image";
import classNames from "classnames";
import { setAuthUserData, setToggleLogIn, UserDataInterface } from "../../store/authSlice";
// import { setFilters } from "../../store/filtersSlice";
import { useRouter } from "next/router";
import { cityNameConverters, cityNameEngToRus } from "../../../helpers/nameConverters";
import { categoriesItems, navItems } from "../../../types/main_data";
import { CategoryType, citiesList, CityType } from "../../../types/formTypes";
import { filtersToUrlString } from "../../../helpers/urlHelpers";

const logo = require('../../../public/images/logo.png');
const avatar = require('../../../public/images/avatar.png');
// const navIconSmall = require('../../../public/images/svg/navigation_icon_small.svg');
const navIcon = require('../../../public/images/svg/navigation_icon.svg');
const arrowDown = require('../../../public/images/svg/arrow_down.svg');




const Header: FC = React.memo(() => {

    const userData: UserDataInterface = useSelector((state: RootState) => state.auth.data)
    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth)

    const router = useRouter();
    const dispatch = useDispatch();


    const onClick = (props: { category?: CategoryType, city?: CityType }) => {
        let searchString: string = filtersToUrlString(props)
        router.push(`/catalogue${searchString}`)
    }







    // modals 
    const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);
    const [isRoomsActive, setIsRoomsActive] = useState<boolean>(false);
    const [isUnloginMenuActive, setIsUnloginMenuActive] = useState<boolean>(false);

    const onBurgerClick = () => {
        setIsBurgerActive(prev => !prev);
    }
    const onRoomsClick = () => {
        setIsRoomsActive(prev => !prev);
    }
    const onUnloginMenuClick = () => {
        setIsUnloginMenuActive(prev => !prev);
    }
    const onUnloginButtonClick = () => {

        dispatch(setToggleLogIn(false))
        dispatch(setAuthUserData({
            email: null,
            login: null,
            avatar: null
        }))
    }





    return (
        <header className={styles.header}>

            <nav className={styles.header__navigation}>
                <ul
                    className={classNames(
                        styles.navigation__list,
                        { [styles.active]: isBurgerActive },
                    )}
                >
                    <li
                        className={classNames(
                            styles.list__burger,
                            { [styles.active]: isBurgerActive },
                        )}

                        onClick={onBurgerClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </li>
                    {navItems.map(i =>
                        <li key={i.id}>
                            <Link href={i.name === 'index' ? '/' : `/${i.name}`}>
                                {i.name === 'map' &&
                                    <svg width="9" height="10" viewBox="0 0 9 10" fill="#8291A3" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.33796 1.74419C6.6054 0.627907 5.3961 0 4.03564 0C2.6868 0 1.4775 0.627907 0.721683 1.74419C-0.0341305 2.83721 -0.208549 4.23256 0.256567 5.45349C0.384474 5.77907 0.582148 6.11628 0.837962 6.4186L3.77982 9.88372C3.84959 9.95349 3.91936 10 4.02401 10C4.12866 10 4.19843 9.95349 4.2682 9.88372L7.22168 6.4186C7.4775 6.11628 7.6868 5.7907 7.80308 5.45349C8.2682 4.23256 8.09378 2.83721 7.33796 1.74419ZM4.03564 5.86047C3.03564 5.86047 2.21006 5.03488 2.21006 4.03488C2.21006 3.03488 3.03564 2.2093 4.03564 2.2093C5.03564 2.2093 5.86122 3.03488 5.86122 4.03488C5.86122 5.03488 5.04727 5.86047 4.03564 5.86047Z" />
                                    </svg>
                                }
                                {i.value}
                            </Link>
                        </li>)}

                    <li> 
                        <Link href='/liked'>
                            Закладки
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="#8291A3">
                                <path d="m10 17.75-1.375-1.271Q6.354 14.417 4.927 13 3.5 11.583 2.698 10.521q-.802-1.063-1.083-1.948-.282-.885-.282-1.844 0-2.083 1.459-3.531Q4.25 1.75 6.354 1.75q.938 0 1.917.385.979.386 1.729 1.073.75-.687 1.729-1.073.979-.385 1.917-.385 2.104 0 3.562 1.448 1.459 1.448 1.459 3.531 0 .959-.271 1.823-.271.865-1.073 1.917-.802 1.052-2.24 2.489-1.437 1.438-3.75 3.563Zm0-2.771q1.979-1.791 3.25-3.031 1.271-1.24 2.031-2.167.761-.927 1.052-1.635.292-.708.292-1.417 0-1.25-.844-2.094-.843-.843-2.135-.843-.688 0-1.344.312-.656.313-.906.667l-.729.854H9.333l-.729-.854q-.25-.354-.927-.667Q7 3.792 6.354 3.792q-1.292 0-2.135.843-.844.844-.844 2.094 0 .709.271 1.386.271.677 1.01 1.593.74.917 2.021 2.167 1.281 1.25 3.323 3.104Zm0-5.604Z" />
                            </svg>
                        </Link>
                    </li>

                    <li className={isUnloginMenuActive ? styles.active : ''}>
                        {isAuth
                            ? <>
                                <Image src={userData?.avatar ? userData.avatar  : avatar} alt='avatar' width={30} height={30} className={styles.Avatar} />
                                <span className={styles.UserName}> {userData.login}</span>
                                <button
                                    type='button'
                                    className={styles.UnloginButton}
                                    onClick={onUnloginMenuClick}>
                                    <Image src={arrowDown} alt='arrowDown' />
                                </button>

                                <ul className={styles.UnloginMenuList} >
                                    <li className={styles.UnloginMenuListItem} onClick={onUnloginButtonClick}>Выйти</li>
                                </ul>

                            </>
                            : <Link href='/auth'> Вход и регистрация </Link>
                        }
                    </li>
                </ul>
            </nav>



































            <div className={styles.header__categories}>
                <ul className={styles.categories__list}>
                    <li>
                        <Link href='/'>
                            <Image src={logo} alt="SDAEM.BY" />
                        </Link>
                    </li>
                    {categoriesItems.map(i =>
                        <li key={i.id}
                            onClick={i.name === 'room' ? onRoomsClick : ()=>onClick({ category: i.name })}
                            className={classNames(
                                { [styles.active]: isRoomsActive },
                            )}
                        >
                            {i.value}

                            {i.name === 'room' &&
                                <>
                                    <Image src={navIcon} alt='navIcon'/> 
                                    <ul className={styles.RoomsList}>
                                        {citiesList.map(c =>
                                            <li
                                                className={styles.RoomsListItem}
                                                key={citiesList.indexOf(c)}
                                                onClick={() => onClick({category: 'room', city: c })}
                                            >
                                                Квартиры на сутки в  {cityNameConverters(cityNameEngToRus(c))}
                                            </li>)
                                        }  
                                    </ul>
                                </>
                            }

                        </li>)}

                    <li><button>+ Разместить объявление</button></li>
                </ul>

            </div>
        </header >
    )
})

Header.displayName = 'Header';



export default Header;