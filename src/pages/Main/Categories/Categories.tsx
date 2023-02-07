import Image, { StaticImageData } from 'next/image'
import styles from './Categories.module.scss'
import React, { FC } from 'react'
import { CategoryCard } from '../../../entities/CategoryCard/ui/CategoryCard'
import { CategoryType, citiesList, CityType } from "../../../../types/formTypes"
import { filtersToUrlString } from '../../../shared/helpers/urlHelpers';
import { useRouter } from 'next/router';
import { cityNameConverters, cityNameEngToRus } from '../../../shared/helpers/nameConverters';

import sauna from './../../../../public/images/main/sauna.png'
import cottage from './../../../../public/images/main/cottage.png'
import room from './../../../../public/images/main/room.png'
import car from './../../../../public/images/main/car.png'
import arrow_down from './../../../../public/images/svg/arrow_down_yellow.svg'

export const Categories: FC = () => {

    const kvartiri: { name: CityType, value: number }[] = [
        {
            name: 'Minsk',
            value: 3567
        },
        {
            name: 'Gomel',
            value: 2032
        },
        {
            name: 'Grodno',
            value: 2302
        },
        {
            name: 'Mogilev',
            value: 110
        },
        {
            name: 'Brest',
            value: 110
        },
        {
            name: 'Vitebsk',
            value: 110
        },

    ]
    const kotteges: { name: string, value: number }[] = [
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
    const popular: string[] = [
        'Коттеджи и усадьбы на о. Брасласких ',
        'Коттеджи и усадьбы (жилье) на Нарочи',
        'Коттеджи и усадьбы (жилье) у воды, на берегу, на озере'
    ]


type CategoryCard = {
    filter: { category: CategoryType }
    header: string,
    additional_header: string,
    hashtags?: Array<CityType>,
    background: StaticImageData
    arrow_button: boolean
}



    const categories: CategoryCard[] = [
        {
            filter: { category: 'room' },
            header : 'Квартиры на сутки',
            additional_header : 'Снять квартиру',
            hashtags :  citiesList ,
            background :  room ,
            arrow_button :  false,
           }, 
           { filter : { category: 'cottage' } ,
            header : 'Коттеджи и усадьбы',
            additional_header : 'Снять коттедж на праздник',
            background :  cottage ,
            arrow_button :  true,
        },
        { 
            filter : { category: 'sauna' } ,
            header : 'Бани и сауны',
            additional_header : 'Пoпариться в бане с друзьями',
            background : sauna ,
            arrow_button :  true,
        }, {
            filter : { category: 'auto' },
            header : 'Авто на прокат',
            additional_header : 'Если срочно нужна машина',
            background :  car ,
            arrow_button :  true,
}
                   
               

]

const router = useRouter();

const onClick = (props: { category?: CategoryType, city?: CityType }): void => {
    let searchString = filtersToUrlString(props)
    router.push(`/catalogue${searchString}`)
}






return (
    <div className={styles.categories}>
        <ul className={styles.categories__cards}>
            {categories.map(
                ({ filter, header, additional_header, hashtags, background, arrow_button}, index)=>
                    <li key={index} className={styles.cards__item}>
                            <CategoryCard
                                filter={filter}
                                header={header}
                                additional_header={additional_header}
                                hashtags={hashtags}
                                background={background}
                                arrow_button={arrow_button}
                            />
                    </li>
            )}
        </ul>





        <aside className={styles.categories__menu}>

            <div className={styles.menu__list}>
                <h3 className={styles.list__title} onClick={() => onClick({ category: 'room' })}>Квартиры</h3>
                <ul className={styles.list__list}>
                    {kvartiri.map(({ name , value}, index) =>
                        <li key={index + 7} onClick={() => onClick({ category: 'room', city: name })}>
                            <span>  Квартиры  в  {cityNameConverters(cityNameEngToRus(name))}</span>
                            <span>{value}</span>
                        </li>)}
                </ul>
            </div>


            <div className={styles.menu__list}>
                <h3 className={styles.list__title} onClick={() => onClick({ category: 'cottage' })}>Коттеджи и усадьбы</h3>
                <ul className={styles.list__list}>
                    {kotteges.map(({ name, value }, index) =>
                        <li key={index + 13} onClick={() => onClick({ category: 'cottage' })}>
                            <span>{name}</span>
                            <span>{value}</span>
                        </li>)}

                    <li key={17}>
                        Еще
                        <Image src={arrow_down} alt="arrow_down" className={styles.a} />
                    </li>
                </ul>
            </div>


            <div className={styles.menu__list}>
                <h3 className={styles.list__title} onClick={() => onClick({ category: 'cottage' })}>Популярные направления</h3>
                <ul className={styles.list__list}>
                    {popular.map(k => <li key={popular.indexOf(k) + 18} onClick={() => onClick({ category: 'cottage' })}> <span>{k}</span></li>)}
                </ul>
            </div>
        </aside>
    </div>

    )
}