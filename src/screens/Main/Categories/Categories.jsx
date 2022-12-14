// import Image from 'next/image'
import styles from './Categories.module.scss'
import React from 'react'
import { CategoryCard } from '../../../entities/CategoryCard/CategoryCard.tsx'
import { CitiesEnum } from "../../../../types/formTypes.ts"
import { citiesList } from "../../../store/filtersSlice"
const room = require('../../../assets/images/main/room.png');
const car = require('../../../assets/images/main/car.png');
const cottage = require('../../../assets/images/main/cottage.png');
const sauna = require('../../../assets/images/main/sauna.png');

 
export const Categories = () => {
 
 
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
        <div className={styles.Categories}>
            <ul className={styles.CategoriesCardsList}>
                <li className={styles.CategoriesCardsItem} key={0}>
                    <CategoryCard
                        filter={{ category: 'room' }}
                        header='Квартиры на сутки'
                        additional_header='СНЯТЬ КВАРТИРУ'
                        hashtags={citiesList}  
                        background={room}
                        arrow_button={false}
                       
                    />
                </li>
                <li className={styles.CategoriesCardsItem} key={1}>
                    <CategoryCard
                        filter={{ category: 'cottage' }}
                        header='Коттеджи и усадьбы'
                        additional_header='СНЯТЬ коттедж НА ПРАЗДНИК'
                        // hashtags={['Минск', 'Витебск', 'Гродно', 'Гомель', ' Брест'. 'Могилев' ]}
                        background={cottage}
                        arrow_button={true}
 
                    />
                </li>
                <li className={styles.CategoriesCardsItem} key={2}>
                    <CategoryCard
                        filter={{ category: 'sauna' }}
                        header='Бани и сауны'
                        additional_header='ПОПАРИТЬСЯ В БанЕ С ДРУЗЬЯМИ'
                        // hashtags={['Минск', 'Витебск', 'Гродно', 'Гомель', ' Брест'. 'Могилев' ]}
                        background={sauna}
                        arrow_button={true}
                     />
                </li>
                <li className={styles.CategoriesCardsItem} key={3}>
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

            <aside className={styles.CategoriesBlock}>
                <ul className={styles.CategoriesList}>
                    <li key={4}>
                        <h3>Квартиры</h3>
                        <ul>
                            {kvartiri.map(k => <li key={kvartiri.indexOf(k)+7}> <span>{k.name}</span><span>{k.value}</span></li>)}
                        </ul>
                    </li>
                    <li key={5}>
                        <h3>Коттеджи и усадьбы</h3>
                        <ul>
                            {kotteges.map(k => <li key={kotteges.indexOf(k) + 13}> <span>{k.name}</span><span>{k.value}</span></li>)}
                            <li key={17}>
                                Еще
                                <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 0.75L3 3.25L5.5 0.75" stroke="#FEB700" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </li>
                        </ul>
                    </li>
                    <li key={6}>
                        <h3>Популярные направления</h3>
                        <ul>
                            {popular.map(k => <li key={kvartiri.indexOf(k) + 18} > <span>{k}</span></li>)}
                        </ul>
                    </li>
                </ul>
            </aside>
        </div>

    )
}
  