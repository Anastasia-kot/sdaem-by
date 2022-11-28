// import Image from 'next/image'
import styles from './Categories.module.scss'
import React from 'react'
import { CategoryCard } from '../../../entities/CategoryCard/CategoryCard.tsx'


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
                <li>
                    <CategoryCard
                        header='Квартиры на сутки'
                        additional_header='СНЯТЬ КВАРТИРУ'
                        hashtags={['Минск', 'Витебск', 'Гродно', 'Гомель', ' Брест', 'Могилев']}
                        background=''
                        arrow_button={false}
                       
                    />
                </li>
                <li>
                    <CategoryCard
                        header='Коттеджи и усадьбы'
                        additional_header='СНЯТЬ коттедж НА ПРАЗДНИК'
                        // hashtags={['Минск', 'Витебск', 'Гродно', 'Гомель', ' Брест'. 'Могилев' ]}
                        background=''
                        arrow_button={true}
 
                    />
                </li>
                <li>
                    <CategoryCard
                        header='Бани и сауны'
                        additional_header='ПОПАРИТЬСЯ В БанЕ С ДРУЗЬЯМИ'
                        // hashtags={['Минск', 'Витебск', 'Гродно', 'Гомель', ' Брест'. 'Могилев' ]}
                        background=''
                        arrow_button={true}
                     />
                </li>
                <li>
                    <CategoryCard
                        header='Авто на прокат'
                        additional_header='еСЛИ СРОЧНО НУЖНА МАШИНА'
                        // hashtags={['Минск', 'Витебск', 'Гродно', 'Гомель', ' Брест'. 'Могилев' ]}
                        background=''
                        arrow_button={true}
 
                    />
                </li>
            </ul>

            <aside className={styles.CategoriesBlock}>
                <ul className={styles.CategoriesList}>
                    <li>
                        <h3>Квартиры</h3>
                        <ul>
                            {kvartiri.map(k => <li key={kvartiri.indexOf(k)}> <span>{k.name}</span><span>{k.value}</span></li>)}
                        </ul>
                    </li>
                    <li>
                        <h3>Коттеджи и усадьбы</h3>
                        <ul>
                            {kotteges.map(k => <li key={kotteges.indexOf(k)}> <span>{k.name}</span><span>{k.value}</span></li>)}
                            <li>
                                Еще
                                <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 0.75L3 3.25L5.5 0.75" stroke="#FEB700" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>Популярные направления</h3>
                        <ul>
                            {popular.map(k => <li key={kvartiri.indexOf(k)}> <span>{k}</span></li>)}
                        </ul>
                    </li>
                </ul>
            </aside>
        </div>

    )
}
  