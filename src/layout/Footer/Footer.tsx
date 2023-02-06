import React, { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { cityNameConverters, cityNameEngToRus } from "../../../helpers/nameConverters";
import { filtersToUrlString } from "../../../helpers/urlHelpers";
import { CategoryType } from "../../../types/formTypes";
import { citiesList, CityType } from "../../../types/formTypes";
import styles from './Footer.module.scss';

const logo = require('../../../public/images/logo.png');
const belkart = require('../../../public/images/payment/belkart.png');
const mastercard = require('../../../public/images/payment/mastercard.png');
const securecode = require('../../../public/images/payment/securecode.png');
const verified = require('../../../public/images/payment/verified-by-visa.png');
const visa = require('../../../public/images/payment/visa.png');
const webpay = require('../../../public/images/payment/webpay.png');

import inst from'../../../public/images/svg/socials/instagram_black.svg'
import vk from'../../../public/images/svg/socials/vk_black.svg'
import facebook from'../../../public/images/svg/socials/facebook_black.svg'


const Footer: FC = React.memo(() => {
    
    
    const router = useRouter();
    // const dispatch = useDispatch();

   
    const onClick = (props: { category?: CategoryType, city?: CityType }) => {
        let searchString: string = filtersToUrlString(props)
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
                        <li><Image src={inst} alt='inst'/></li>
                        <li><Image src={vk} alt='vk' /></li>
                        <li><Image src={facebook} alt='facebook' /></li>
                    </ul>
                </div>
                <ul className={styles.Payment}>
                    <li><Image src={visa} alt="Виза" /></li>
                    <li><Image src={webpay} alt="Вебпей" /></li>
                    <li><Image src={verified} alt="Вебпей бай виза" /></li>
                    <li><Image src={mastercard} alt="Мастеркард" /></li>
                    <li><Image src={securecode} alt="Мастеркард securecode" /></li>
                    <li><Image src={belkart} alt="Белкард" /></li>
                </ul>
            </div>
        </footer>
    )
})

Footer.displayName = 'Footer';



export default Footer;