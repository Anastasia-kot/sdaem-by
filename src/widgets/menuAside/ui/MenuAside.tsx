import Image, { StaticImageData } from 'next/image'
import styles from './MenuAside.module.scss'
import React, { FC } from 'react'

import { useRouter } from 'next/router';
import { cityNameConverters, cityNameEngToRus } from '../../../shared/helpers/nameConverters';

import arrow_down from './../../../../public/images/svg/arrow_down_yellow.svg'
import { kotteges, kvartiri, popular } from '../model'
import { onClick } from '../lib'


export const MenuAside: FC = () => {

    const router = useRouter();

    return (
        <aside className={styles.menu}>

            <div className={styles.menu__list}>
                <h3 className={styles.list__title} onClick={() => onClick({ category: 'room' }, router)}>Квартиры</h3>
                <ul className={styles.list__list}>
                    {kvartiri.map(({ name , value}, index) =>
                        <li key={index + 7} onClick={() => onClick({ category: 'room', city: name }, router)}>
                            <span>  Квартиры  в  {cityNameConverters(cityNameEngToRus(name))}</span>
                            <span> {value} </span>
                        </li>)}
                </ul>
            </div>


            <div className={styles.menu__list}>
            <h3 className={styles.list__title} onClick={() => onClick({ category: 'cottage' }, router)}>Коттеджи и усадьбы</h3>
                <ul className={styles.list__list}>
                    {kotteges.map(({ name, value }, index) =>
                        <li key={index + 13} onClick={() => onClick({ category: 'cottage' }, router)}>
                            <span> {name} </span>
                            <span> {value} </span>
                        </li>)}

                    <li key={17}>
                        Еще
                        <Image src={arrow_down} alt="arrow_down" className={styles.a} />
                    </li>
                </ul>
            </div>


            <div className={styles.menu__list}>
            <h3 className={styles.list__title} onClick={() => onClick({ category: 'cottage' }, router)}>Популярные направления</h3>
                <ul className={styles.list__list}>
                    {popular.map((item, index) => 
                        <li key={index + 18} onClick={() => onClick({ category: 'cottage' }, router)}> 
                            <span>{item}</span>
                        </li>)}
                </ul>
            </div>
        </aside>
  
    )
}