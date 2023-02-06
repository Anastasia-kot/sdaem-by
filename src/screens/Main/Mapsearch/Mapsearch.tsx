import Image from 'next/image'
import styles from './Mapsearch.module.scss'
import React, { FC } from 'react'
import { PreferenceCard } from '../../../entities/PreferenceCard/PreferenceCard'
import { MapBlock } from '../../../entities/MapBlock/MapBlock'
const clients = require('../../../../public/images/main/clients.svg');
const move = require('../../../../public/images/main/move.svg');
import dotes from './../../../../public/images/svg/dotes.svg'



export const Mapsearch: FC = () => {

    const pref_cards = [
        {
            logo: clients,
            header: 'Начните привлекать клиентов бесплатно!',
            description: {
                text: ['Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно бесплатно создавать и публиковать объявления на сайте. '],
                bold: ['бесплатно создавать и публиковать']
            },
            button: {
             
                   text: '+ Разместить объявление',
                image: false
            },
            isGold: false,
            goldBackground: 'string'
        },
        {
            logo: move,
            header: 'Поднимайте объявления',
            description: {
                text: ['Вы в любое время можете поднимать объявления вверх первой страницы каталога, они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру. '],
                bold: ['поднимать', 'вверх первой страницы' ]
            },
            button:    {
              
                       text: 'Узнать стоимость услуги ',
                image: true
            },
            
            isGold: false,
            goldBackground: 'string'
        },
        {
            logo: '',
            header: 'Приоритет Gold ',
            description: {
                text: [
                    'Приоритетное размещение Gold позволяет закрепить ваше объявление в верхней части каталога!',
                    'Gold объявления перемещаются каждые 5 мин на 1 позицию, что делает размещение одинаковым для всех.'
                ], 
                bold: ['Gold', 'закрепить ваше объявление', 'перемещаются каждые 5 мин']
            },
            button: {
               text : 'Еще о тарифе Gold  ' ,
                image: true
            },
            
            isGold: true,
            goldBackground: 'string'
        },

    ]

    return (
        <div className={styles.map_search}>
            <MapBlock
                title={'Поиск квартир на карте'}
                description={'Ищите квартиры на сутки в центре города, возле парка или в живописном районе'}
                descriptionWidth={390}
                isDotes={true}
                buttonText={'Открыть карту'}
                minHeight={440}
            >
             </ MapBlock>

      

            <div className={styles.map_search__preference_list}>
                {pref_cards.map(pc => <PreferenceCard
                    key={pref_cards.indexOf(pc)}
                    data={pc} 
                />)}

            </div>
            
            <Image src={dotes} alt="dotes" className={styles.map_search__dotes} />



        </div>
    )
}
