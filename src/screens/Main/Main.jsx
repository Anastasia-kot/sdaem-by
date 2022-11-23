import Image from 'next/image'
import { ItemCard } from '../../entities/ItemCard/ItemCard.tsx'
import { PreferenceCard } from '../../entities/PreferenceCard/PreferenceCard.tsx'
import { Categories } from './Categories/Categories'
import { Heading } from './Heading/Heading'
import styles from './Main.module.scss'
const logo = require('../../assets/images/logo.png');
 

export const Main = () => {

 
    const pref_cards = [
        {
            logo: 'string',
            header: 'Начните привлекать клиентов бесплатно!',
            description: 'Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно бесплатно создавать и публиковать объявления на сайте. ',
            button: '+  Разместить объявление',
            isGold: false,
            goldBackground: 'string'
        },
        {
            logo: 'string',
            header: 'Поднимайте объявления',
            description: 'Вы в любое время можете поднимать объявления вверх первой страницы каталога, они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру. ',
            button: 'Узнать стоимость услуги >',
            isGold: false,
            goldBackground: 'string'
        },
        {
            logo: '',
            header: 'Приоритет Gold ',
            description: [
                'Приоритетное размещение Gold позволяет закрепить ваше объявление в верхней части каталога!',
                'Gold объявления перемещаются каждые 5 мин на 1 позицию, что делает размещение одинаковым для всех.'
            ],
            button: 'Еще о тарифе Gold >',
            isGold: true,
            goldBackground: 'string'
        },

    ]

    const news = [
        {
            title:'Линия Сталина: суровый отдых в усадьбах  на сутки',
            date: '14 Январь'
        },
        {
            title:'Аренда квартиры посуточно',
            date: '14 Январь'
        },
        {
            title:'Дворцово-парковый комплекс Чапских',
            date: '14 Январь'
        },
        {
            title:'Дворцово-парковый комплекс Чапских',
            date: '14 Январь'
        },
        {
            title:'Дворцово-парковый комплекс Чапских',
            date: '14 Январь'
        },
    ]

    return (
        <main className={styles.Main}>

             <Heading/>
             <Categories/>
  
      

       
            <div className={styles.RentBlock}>
                <div className={styles.Dottes}>
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
                            <filter id="filter0_d_2831_1177" x="0" y="0" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter1_d_2831_1177" x="0" y="37.4629" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter2_d_2831_1177" x="0" y="18.7305" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter3_d_2831_1177" x="0" y="56.1934" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter4_d_2831_1177" x="18.7312" y="0" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter5_d_2831_1177" x="18.7312" y="37.4629" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter6_d_2831_1177" x="18.7312" y="18.7305" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter7_d_2831_1177" x="18.7312" y="56.1934" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter8_d_2831_1177" x="37.4624" y="0" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter9_d_2831_1177" x="37.4624" y="37.4629" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter10_d_2831_1177" x="37.4624" y="18.7305" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter11_d_2831_1177" x="37.4624" y="56.1934" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter12_d_2831_1177" x="56.1936" y="0" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter13_d_2831_1177" x="56.1936" y="37.4629" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter14_d_2831_1177" x="56.1936" y="18.7305" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter15_d_2831_1177" x="56.1936" y="56.1934" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                <h3>КВАРТИРЫ НА СУТКИ</h3>
                <h2>Аренда квартир в Минске</h2>
                <form>
                    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6401 11.4773H18.3812L14.4755 0.509766L9.99979 7.19943L5.21594 0.589264L1.61882 11.4773H0.359905L0 12.9373H4.77911L6.65514 7.59981L10.0565 12.2942L10.0769 12.3238L10.0978 12.2942L13.3449 7.59981L15.2209 12.9373H20L19.6401 11.4773Z" fill="#BDBDBD" />
                    </svg>

                    <select placeholder='Метро'>
                        <option value="">Метро</option>
                    </select>
                    <select placeholder='Район'>
                        <option value="">Район</option>
                    </select>


                </form>
                <div className={styles.ItemCardBlock}>
                    <div className={styles.ItemCardList}>
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                    </div>
                    <button>
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.12305L1.42857 7.69448L8 14.2659" stroke="#664EF9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                    <button>
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 14.2656L7.57143 7.6942L0.999999 1.12277" stroke="#664EF9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>

                <div className={styles.ItemCardBlockMore}>
                    <p><span>341</span> +</p>
                    <p>Предложений по Минску</p>
                    <button>
                        <span>
                            Посмотреть все

                        </span>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.46875 11.9902L6.46875 6.99023L1.46875 1.99023" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>

                </div>


            </div>

            <div className={styles.MapSearchBlock}>
                <div className={styles.DottesBefore}>
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
                            <filter id="filter0_d_2831_1177" x="0" y="0" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter1_d_2831_1177" x="0" y="37.4629" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter2_d_2831_1177" x="0" y="18.7305" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter3_d_2831_1177" x="0" y="56.1934" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter4_d_2831_1177" x="18.7312" y="0" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter5_d_2831_1177" x="18.7312" y="37.4629" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter6_d_2831_1177" x="18.7312" y="18.7305" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter7_d_2831_1177" x="18.7312" y="56.1934" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter8_d_2831_1177" x="37.4624" y="0" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter9_d_2831_1177" x="37.4624" y="37.4629" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter10_d_2831_1177" x="37.4624" y="18.7305" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter11_d_2831_1177" x="37.4624" y="56.1934" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter12_d_2831_1177" x="56.1936" y="0" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter13_d_2831_1177" x="56.1936" y="37.4629" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter14_d_2831_1177" x="56.1936" y="18.7305" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter15_d_2831_1177" x="56.1936" y="56.1934" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                <h2>Поиск квартир на карте</h2>
                <p>Ищите квартиры на сутки в центре города, возле парка или в живописном районе</p>
                <button>
                    <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.462 2.71394C10.3632 1.03952 8.54923 0.0976563 6.50853 0.0976562C4.48528 0.0976562 2.67132 1.03952 1.5376 2.71394C0.403882 4.35347 0.142254 6.44649 0.839929 8.27789C1.03179 8.76626 1.3283 9.27207 1.71202 9.72556L6.12481 14.9232C6.22946 15.0279 6.33412 15.0977 6.49109 15.0977C6.64807 15.0977 6.75272 15.0279 6.85737 14.9232L11.2876 9.72556C11.6713 9.27207 11.9853 8.7837 12.1597 8.27789C12.8574 6.44649 12.5957 4.35347 11.462 2.71394ZM6.50853 8.88835C5.00853 8.88835 3.77016 7.64998 3.77016 6.14998C3.77016 4.64998 5.00853 3.41161 6.50853 3.41161C8.00853 3.41161 9.24691 4.64998 9.24691 6.14998C9.24691 7.64998 8.02598 8.88835 6.50853 8.88835Z" fill="url(#paint0_linear_2831_1716)" />
                        <defs>
                            <linearGradient id="paint0_linear_2831_1716" x1="0.455078" y1="0.847657" x2="14.7623" y2="4.16693" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFD54F" />
                                <stop offset="1" stop-color="#FEC100" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <span>
                        Открыть карту
                    </span>
                </button>

                <div className={styles.PreferenceCardList}>
                    {pref_cards.map(pc => <PreferenceCard
                        key={pref_cards.indexOf(pc)}
                        logo={pc.logo}
                        header={pc.header}
                        description={pc.description}
                        button={pc.button}
                        isGold={pc.isGold}
                        goldBackground={pc.goldBackground}

                    />)}

                </div>
                <div className={styles.DottesAfter}>
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
                            <filter id="filter0_d_2831_1177" x="0" y="0" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter1_d_2831_1177" x="0" y="37.4629" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter2_d_2831_1177" x="0" y="18.7305" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter3_d_2831_1177" x="0" y="56.1934" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter4_d_2831_1177" x="18.7312" y="0" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter5_d_2831_1177" x="18.7312" y="37.4629" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter6_d_2831_1177" x="18.7312" y="18.7305" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter7_d_2831_1177" x="18.7312" y="56.1934" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter8_d_2831_1177" x="37.4624" y="0" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter9_d_2831_1177" x="37.4624" y="37.4629" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter10_d_2831_1177" x="37.4624" y="18.7305" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter11_d_2831_1177" x="37.4624" y="56.1934" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter12_d_2831_1177" x="56.1936" y="0" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter13_d_2831_1177" x="56.1936" y="37.4629" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter14_d_2831_1177" x="56.1936" y="18.7305" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_1177" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_1177" result="shape" />
                            </filter>
                            <filter id="filter15_d_2831_1177" x="56.1936" y="56.1934" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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


            <div className={styles.AboutBlock}>
                <div className={styles.AboutContent}>
                    <h3>ЧТО ТАКОЕ SDAEM.BY</h3>
                    <h2>Квартира на сутки в Минске</h2>
                    <Image src={logo} alt=" " />
                    <h4>
                        Нужна квартира на сутки в Минске?

                    </h4>
                    <p>
                        На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает более 500 квартир. Благодаря удобной навигации вы быстро найдете подходящий вариант.
                    </p>
                    <p>
                        В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с большим количеством комнат в разных районах города, с различной степенью удобства от дешевых до VIP
                        с джакузи.
                    </p>
                    <p>
                        Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать квартиру на сутки.
                    </p>



                </div>
                <aside>
                    <h3>
                        Новости
                    </h3>
                    <ul>
                        {news.map(n=><li key={news.indexOf(n)}>
                            <span>{n.title}</span>
                            <span>{n.date}</span>
                        </li>)}
                        <li>
                            <span>
                                Посмотреть все 

                            </span>
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11L6 6L1 1" stroke="#664EF9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </li>
                    </ul>

                </aside>
      


            </div>

        </main>
    )
}