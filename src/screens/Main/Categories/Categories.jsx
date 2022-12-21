// import Image from 'next/image'
import styles from './Categories.module.scss'
import React from 'react'
import { CategoryCard } from '../../../entities/CategoryCard/CategoryCard.tsx'
import { CitiesEnum } from "../../../../types/formTypes.ts"
import { citiesList } from "../../../store/filtersSlice"
const room = require('../../../../public/images/main/room.png');
const car = require('../../../../public/images/main/car.png');
const cottage = require('../../../../public/images/main/cottage.png');
const sauna = require('../../../../public/images/main/sauna.png');

 
export const Categories = () => {
 
    const objects = [
        {
            name: 'Квартиры',
            data: [
                {
                    name: 'Квартиры в Минске',
                    value: 3567
                },
                {
                    name: 'Квартиры в Гомеле',
                    value: 2032
                },
                {
                    name: 'Квартиры в Гродно',
                    value: 2302
                },
                {
                    name: 'Квартиры в Могилеве',
                    value: 110
                },
                {
                    name: 'Квартиры в Бресте',
                    value: 110
                },
                {
                    name: 'Квартиры в Витебск',
                    value: 110
                },

            ]
        },
       {
            name: 'Квартиры',
            data: [
            {
                name: 'Агроусадьбы',
                value: 110
            },

            {
                name: 'Коттеджи',
                value: 110
            },

            {
                name: 'Загородный комплекс',
                value: 110
            },

            {
                name: 'Базы отдыха',
                value: 110
            },


        ]}

    ] 
    const kvartiri = [
        {
            name: 'Квартиры в Минске',
            value: 3567
        },
        {
            name: 'Квартиры в Гомеле',
            value: 2032
        },
        {
            name: 'Квартиры в Гродно',
            value: 2302
        },
        {
            name: 'Квартиры в Могилеве',
            value: 110
        },
        {
            name: 'Квартиры в Бресте',
            value: 110
        },
        {
            name: 'Квартиры в Витебск',
            value: 110
        },

    ]
    const kotteges = [
        {
            name: 'Агроусадьбы',
            value: 110
        },

        {
            name: 'Коттеджи',
            value: 110
        },

        {
            name: 'Загородный комплекс',
            value: 110
        },

        {
            name: 'Базы отдыха',
            value: 110
        },


    ]
    const popular = [
        'Коттеджи и усадьбы на о. Брасласких ',
        'Коттеджи и усадьбы (жилье) на Нарочи',
        'Коттеджи и усадьбы (жилье) у воды, на берегу, на озере'
    ]

    return (
        <div className={styles.categories}>
            <ul className={styles.categories__cards}>
                <li className={styles.cards__item} key={0}>
                    <CategoryCard
                        filter={{ category: 'room' }}
                        header='Квартиры на сутки'
                        additional_header='СНЯТЬ КВАРТИРУ'
                        hashtags={citiesList}  
                        background={room}
                        arrow_button={false}
                       
                    />
                </li>
                <li className={styles.cards__item} key={1}>
                    <CategoryCard
                        filter={{ category: 'cottage' }}
                        header='Коттеджи и усадьбы'
                        additional_header='СНЯТЬ коттедж НА ПРАЗДНИК'
                        // hashtags={['Минск', 'Витебск', 'Гродно', 'Гомель', ' Брест'. 'Могилев' ]}
                        background={cottage}
                        arrow_button={true}
 
                    />
                </li>
                <li className={styles.cards__item} key={2}>
                    <CategoryCard
                        filter={{ category: 'sauna' }}
                        header='Бани и сауны'
                        additional_header='ПОПАРИТЬСЯ В БанЕ С ДРУЗЬЯМИ'
                        // hashtags={['Минск', 'Витебск', 'Гродно', 'Гомель', ' Брест'. 'Могилев' ]}
                        background={sauna}
                        arrow_button={true}
                     />
                </li>
                <li className={styles.cards__item} key={3}>
                    <CategoryCard
                        filter={{ category: 'auto' }}
                        header='Авто на прокат'
                        additional_header='еСЛИ СРОЧНО НУЖНА МАШИНА'
                        // hashtags={['Минск', 'Витебск', 'Гродно', 'Гомель', ' Брест'. 'Могилев' ]}
                        background={car}
                        arrow_button={true}
 
                    />
                </li>
            </ul>

            <aside className={styles.categories__menu}>
                <div className={styles.menu__list}>
                    <h3 className={styles.list__title}>Квартиры</h3>
                        <ul className={styles.list__list}>
                            {kvartiri.map(k => <li key={kvartiri.indexOf(k)+7}> <span>{k.name}</span><span>{k.value}</span></li>)}
                        </ul>
                    </div>
                <div className={styles.menu__list}>
                    <h3 className={styles.list__title}>Коттеджи и усадьбы</h3>
                    <ul className={styles.list__list}>
                            {kotteges.map(k => <li key={kotteges.indexOf(k) + 13}> <span>{k.name}</span><span>{k.value}</span></li>)}
                            <li key={17}>
                                Еще
                                <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 0.75L3 3.25L5.5 0.75" stroke="#FEB700" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </li>
                        </ul>
                    </div>
                <div className={styles.menu__list}>
                    <h3 className={styles.list__title}>Популярные направления</h3>
                    <ul className={styles.list__list}>
                            {popular.map(k => <li key={kvartiri.indexOf(k) + 18} > <span>{k}</span></li>)}
                        </ul>
                    </div>
             </aside>
        </div>

    )
}
  