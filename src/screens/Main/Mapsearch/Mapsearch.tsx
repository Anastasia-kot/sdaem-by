// import Image from 'next/image'
import styles from './Mapsearch.module.scss'
import React, { FC } from 'react'
import { PreferenceCard } from '../../../entities/PreferenceCard/PreferenceCard'
import { MapBlock } from '../../../entities/MapBlock/MapBlock'
const clients = require('../../../../public/images/main/clients.svg');
const move = require('../../../../public/images/main/move.svg');



export const Mapsearch: FC = React.memo(() => {

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
        <div className={styles.MapSearchBlock}>
            <MapBlock
                title={'Поиск квартир на карте'}
                description={'Ищите квартиры на сутки в центре города, возле парка или в живописном районе'}
                descriptionWidth={390}
                dotes={true}
                buttonText={'Открыть карту'}
                minHeight={440}
            >
             </ MapBlock>

      

            <div className={styles.PreferenceCardList}>
                {pref_cards.map(pc => <PreferenceCard
                    key={pref_cards.indexOf(pc)}
                    data={pc} 

                />)}

            </div>
            <div className={styles.DotesAfter}>
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2831_1177)">
                        <circle cx="6.5" cy="2.5" r="2.5" fill="#FFD54F" />
                    </g>
                    <g filter="url(#filter1_d_2831_1177)">
                        <circle cx="6.5" cy="39.9629" r="2.5" fill="#FFD54F" />
                    </g>
                    <g filter="url(#filter2_d_2831_1177)">
                        <circle cx="6.5" cy="21.2305" r="2.5" fill="#FFD54F" />
                    </g>
                    <g filter="url(#filter3_d_2831_1177)">
                        <circle cx="6.5" cy="58.6934" r="2.5" fill="#FFD54F" />
                    </g>
                    <g filter="url(#filter4_d_2831_1177)">
                        <circle cx="25.2312" cy="2.5" r="2.5" fill="#FFD54F" />
                    </g>
                    <g filter="url(#filter5_d_2831_1177)">
                        <circle cx="25.2312" cy="39.9629" r="2.5" fill="#FFD54F" />
                    </g>
                    <g filter="url(#filter6_d_2831_1177)">
                        <circle cx="25.2312" cy="21.2305" r="2.5" fill="#FFD54F" />
                    </g>
                    <g filter="url(#filter7_d_2831_1177)">
                        <circle cx="25.2312" cy="58.6934" r="2.5" fill="#FFD54F" />
                    </g>
                    <g filter="url(#filter8_d_2831_1177)">
                        <circle cx="43.9624" cy="2.5" r="2.5" fill="#FFD54F" />
                    </g>
                    <g filter="url(#filter9_d_2831_1177)">
                        <circle cx="43.9624" cy="39.9629" r="2.5" fill="#FFD54F" />
                    </g>
                    <g filter="url(#filter10_d_2831_1177)">
                        <circle cx="43.9624" cy="21.2305" r="2.5" fill="#FFD54F" />
                    </g>
                    <g filter="url(#filter11_d_2831_1177)">
                        <circle cx="43.9624" cy="58.6934" r="2.5" fill="#FFD54F" />
                    </g>
                    <g filter="url(#filter12_d_2831_1177)">
                        <circle cx="62.6936" cy="2.5" r="2.5" fill="#FFD54F" />
                    </g>
                    <g filter="url(#filter13_d_2831_1177)">
                        <circle cx="62.6936" cy="39.9629" r="2.5" fill="#FFD54F" />
                    </g>
                    <g filter="url(#filter14_d_2831_1177)">
                        <circle cx="62.6936" cy="21.2305" r="2.5" fill="#FFD54F" />
                    </g>
                    <g filter="url(#filter15_d_2831_1177)">
                        <circle cx="62.6936" cy="58.6934" r="2.5" fill="#FFD54F" />
                    </g>
                    <defs>
                        <filter id="filter0_d_2831_1177" x="0" y="0" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                        </filter>
                        <filter id="filter1_d_2831_1177" x="0" y="37.4629" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                        </filter>
                        <filter id="filter2_d_2831_1177" x="0" y="18.7305" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                        </filter>
                        <filter id="filter3_d_2831_1177" x="0" y="56.1934" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                        </filter>
                        <filter id="filter4_d_2831_1177" x="18.7312" y="0" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                        </filter>
                        <filter id="filter5_d_2831_1177" x="18.7312" y="37.4629" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                        </filter>
                        <filter id="filter6_d_2831_1177" x="18.7312" y="18.7305" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                        </filter>
                        <filter id="filter7_d_2831_1177" x="18.7312" y="56.1934" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                        </filter>
                        <filter id="filter8_d_2831_1177" x="37.4624" y="0" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                        </filter>
                        <filter id="filter9_d_2831_1177" x="37.4624" y="37.4629" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                        </filter>
                        <filter id="filter10_d_2831_1177" x="37.4624" y="18.7305" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                        </filter>
                        <filter id="filter11_d_2831_1177" x="37.4624" y="56.1934" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                        </filter>
                        <filter id="filter12_d_2831_1177" x="56.1936" y="0" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                        </filter>
                        <filter id="filter13_d_2831_1177" x="56.1936" y="37.4629" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                        </filter>
                        <filter id="filter14_d_2831_1177" x="56.1936" y="18.7305" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                        </filter>
                        <filter id="filter15_d_2831_1177" x="56.1936" y="56.1934" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                        </filter>
                    </defs>
                </svg>

            </div>

        </div>
    )
}
)

Mapsearch.displayName = 'Mapsearch';

