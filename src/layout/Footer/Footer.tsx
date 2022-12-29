import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { cityNameConverters, cityNameEngToRus } from "../../../helpers/nameConverters";
import { filtersToUrlString } from "../../../helpers/urlHelpers";
import { CategoryType } from "../../../types/formTypes";
import { citiesList, CityType } from "../../../types/formTypes";
import {   setFilters } from "../../store/filtersSlice";
import styles from './Footer.module.scss';

const logo = require('../../../public/images/logo.png');
const belkart = require('../../../public/images/payment/belkart.png');
const mastercard = require('../../../public/images/payment/mastercard.png');
const securecode = require('../../../public/images/payment/securecode.png');
const verified = require('../../../public/images/payment/verified-by-visa.png');
const visa = require('../../../public/images/payment/visa.png');
const webpay = require('../../../public/images/payment/webpay.png');


const Footer = () => {
    
    
    const router = useRouter();
    const dispatch = useDispatch();

   
    const onClick = (props: { category?: CategoryType, city?: CityType }) => {
        let searchString = filtersToUrlString(props)
        router.push(`/catalogue${searchString}`)

        // dispatch(setFilters(props))
        // setTimeout(() => {
        //   router.push('/catalogue')
        // },
        //   3000
        // )
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__info}>
                <Link href='/'>
                    <Image src={logo} alt="SDAEM.BY" />
                    <h3 className={styles.info__title}>СДАЁМ БАЙ</h3>
                </Link>
               
                <div className={styles.info__contacts}>
                    <p className={styles.contacts__contact}>ИП Шушкевич Андрей Викторович</p>
                    <p className={styles.contacts__contact}>УНП 192602485 Минским горисполкомом 10.02.2016</p>
                    <p className={styles.contacts__contact}>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</p>
                    <p className={styles.contacts__contact}><a href="tel:+375296214833">+375 29 621 48 33</a>, <a href="mailto:sdaem@sdaem.by">sdaem@sdaem.by</a></p>
                    <p className={styles.contacts__contact}>Режим работы: 08:00-22:00</p>
                </div>
            </div>


            <div className={styles.footer__navigation}>
                <ul className={styles.NavigationCatrgoriesList}>
                    <li onClick={()=>onClick({ category: 'cottage' })}>Коттеджи и усадьбы</li>
                    <li onClick={() => onClick({ category: 'sauna' })}>Бани и сауны</li>
                    <li onClick={() => onClick({ category: 'auto' })}>Авто на прокат</li>
                </ul>


                <div className={styles.NavigationLocations}>
                    <h3 onClick={() => onClick({ category: 'room' })}>Квартиры</h3>
                    <ul className={styles.NavigationLocationsList}>
                        {citiesList.map(c =>
                            <li
                                key={citiesList.indexOf(c)}
                                onClick={() => onClick({ category: 'room', city: c })}
                            >
                                Квартиры в {cityNameConverters(cityNameEngToRus(c) )}
                            </li>)}
                    </ul>
                </div>

                <ul className={styles.NavigationLinksList}>
                    <li><Link href='/news'>Новости</Link></li>
                    <li><Link href='/catalogue'>Размещение и тарифы </Link></li>
                    <li><Link href='/map'>Объявления на карте</Link></li>
                    <li><Link href='/contacts'>Контакты</Link></li>
                </ul>
            </div>



            <div className={styles.footer__socialsAndPayment}>
                <div className={styles.Socials}>
                    <span className={styles.SocialsHeader}>Мы в соцсетях</span>
                    <ul className={styles.SocialsList}>
                        <li>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.8054 6.56142C8.48024 6.56142 5.79665 9.24501 5.79665 12.5702C5.79665 15.8954 8.48024 18.579 11.8054 18.579C15.1306 18.579 17.8142 15.8954 17.8142 12.5702C17.8142 9.24501 15.1306 6.56142 11.8054 6.56142ZM11.8054 16.4755C9.65504 16.4755 7.90016 14.7206 7.90016 12.5702C7.90016 10.4198 9.65504 8.66494 11.8054 8.66494C13.9558 8.66494 15.7107 10.4198 15.7107 12.5702C15.7107 14.7206 13.9558 16.4755 11.8054 16.4755ZM18.0603 4.91493C17.284 4.91493 16.657 5.54189 16.657 6.31825C16.657 7.09462 17.284 7.72158 18.0603 7.72158C18.8367 7.72158 19.4636 7.09755 19.4636 6.31825C19.4639 6.1339 19.4277 5.95132 19.3573 5.78095C19.2868 5.61059 19.1835 5.4558 19.0531 5.32544C18.9228 5.19509 18.768 5.09173 18.5976 5.02128C18.4273 4.95084 18.2447 4.9147 18.0603 4.91493ZM23.5183 12.5702C23.5183 10.953 23.533 9.35048 23.4422 7.73622C23.3513 5.86122 22.9236 4.19716 21.5525 2.82607C20.1785 1.45204 18.5173 1.02724 16.6423 0.936418C15.0252 0.845598 13.4226 0.860246 11.8084 0.860246C10.1912 0.860246 8.58864 0.845598 6.97438 0.936418C5.09938 1.02724 3.43532 1.45497 2.06423 2.82607C0.690202 4.20009 0.265398 5.86122 0.174577 7.73622C0.0837571 9.35341 0.0984056 10.956 0.0984056 12.5702C0.0984056 14.1845 0.0837571 15.7899 0.174577 17.4042C0.265398 19.2792 0.693132 20.9433 2.06423 22.3144C3.43825 23.6884 5.09938 24.1132 6.97438 24.204C8.59157 24.2948 10.1941 24.2802 11.8084 24.2802C13.4256 24.2802 15.0281 24.2948 16.6423 24.204C18.5173 24.1132 20.1814 23.6854 21.5525 22.3144C22.9265 20.9403 23.3513 19.2792 23.4422 17.4042C23.5359 15.7899 23.5183 14.1874 23.5183 12.5702ZM20.9402 19.4784C20.7263 20.0116 20.4685 20.4101 20.0554 20.8202C19.6423 21.2333 19.2468 21.4911 18.7136 21.705C17.1726 22.3173 13.5134 22.1796 11.8054 22.1796C10.0974 22.1796 6.43532 22.3173 4.8943 21.7079C4.3611 21.494 3.96266 21.2362 3.55251 20.8231C3.13942 20.4101 2.88161 20.0145 2.66774 19.4813C2.05837 17.9374 2.19606 14.2782 2.19606 12.5702C2.19606 10.8622 2.05837 7.20009 2.66774 5.65908C2.88161 5.12587 3.13942 4.72743 3.55251 4.31728C3.96559 3.90712 4.3611 3.64638 4.8943 3.43251C6.43532 2.82314 10.0974 2.96083 11.8054 2.96083C13.5134 2.96083 17.1756 2.82314 18.7166 3.43251C19.2498 3.64638 19.6482 3.90419 20.0584 4.31728C20.4715 4.73036 20.7293 5.12587 20.9431 5.65908C21.5525 7.20009 21.4148 10.8622 21.4148 12.5702C21.4148 14.2782 21.5525 17.9374 20.9402 19.4784Z" fill="#1E2123" />
                            </svg>

                        </li>
                        <li>
                            <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.2554 1.26839C24.4231 0.721422 24.2554 0.320312 23.4625 0.320312H20.836C20.1676 0.320312 19.8622 0.667314 19.6946 1.04843C19.6946 1.04843 18.3591 4.24671 16.4668 6.32048C15.8559 6.92391 15.5769 7.11446 15.2439 7.11446C15.0774 7.11446 14.8355 6.92391 14.8355 6.37694V1.26839C14.8355 0.612028 14.6427 0.320312 14.0857 0.320312H9.95847C9.54167 0.320312 9.29015 0.623791 9.29015 0.913154C9.29015 1.53423 10.2363 1.67773 10.3333 3.42803V7.22503C10.3333 8.05666 10.1812 8.2084 9.84589 8.2084C8.956 8.2084 6.79056 4.99835 5.50543 1.32367C5.25511 0.609676 5.0024 0.321489 4.33169 0.321489H1.70633C0.955376 0.321489 0.805664 0.66849 0.805664 1.0496C0.805664 1.73419 1.69555 5.12186 4.9509 9.60228C7.12112 12.6618 10.1765 14.3203 12.9599 14.3203C14.6283 14.3203 14.8343 13.9521 14.8343 13.317V11.0044C14.8343 10.2681 14.9936 10.1198 15.5218 10.1198C15.9098 10.1198 16.5781 10.3128 18.1364 11.7866C19.9161 13.5346 20.2108 14.3191 21.2108 14.3191H23.8362C24.586 14.3191 24.9608 13.951 24.7452 13.224C24.5093 12.5006 23.6589 11.4479 22.5307 10.2022C21.9175 9.49171 21.0012 8.72714 20.7222 8.34485C20.3329 7.85199 20.4455 7.63438 20.7222 7.1968C20.7234 7.19798 23.9224 2.77284 24.2554 1.26839Z" fill="#1E2123" />
                            </svg>
                        </li>
                        <li>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8047 0.320312C5.28266 0.320312 0.805664 4.79731 0.805664 10.3193C0.805664 15.3093 4.46166 19.4453 9.24266 20.1983V13.2103H6.70266V10.3193H9.24266V8.11631C9.24266 5.60831 10.7357 4.22531 13.0187 4.22531C14.1127 4.22531 15.2587 4.42031 15.2587 4.42031V6.87931H13.9947C12.7547 6.87931 12.3667 7.65131 12.3667 8.44231V10.3173H15.1377L14.6947 13.2083H12.3667V20.1963C17.1477 19.4473 20.8037 15.3103 20.8037 10.3193C20.8037 4.79731 16.3267 0.320312 10.8047 0.320312Z" fill="#1E2123" />
                            </svg>
                        </li>
                    </ul>
                </div>
                <ul className={styles.Payment}>
                    <li>
                        <Image src={visa} alt="Виза" />
                    </li>
                    <li>
                        <Image src={webpay} alt="Вебпей" />
                    </li>
                    <li>
                        <Image src={verified} alt="Вебпей бай виза" />
                    </li>
                    <li>
                        <Image src={mastercard} alt="Мастеркард" />
                    </li>
                    <li>
                        <Image src={securecode} alt="Мастеркард securecode" />
                    </li>
                    <li>
                        <Image src={belkart} alt="Белкард" />
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;