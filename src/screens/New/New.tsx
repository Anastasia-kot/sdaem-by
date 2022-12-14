import Image from 'next/image'
import { Socials_sharing } from '../../shared/Socials_sharing/Socials_sharing'
import { Breadcrumbs } from '../../entities/Breadcrumbs/Breadcrumbs'
import { NewsCard } from '../../entities/NewsCard/NewsCard'
import styles from './New.module.scss'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { dateConverter } from '../../../helpers/dateConverters'
const room = require('../../assets/images/room_big_quality.png');


export const New = ({ id }) => {
    console.log('id:', id)
    const news = useSelector((state: RootState) => state.news.data)
    const totalCount = useSelector((state: RootState) => state.news.totalCount)

    const router = useRouter()

    useEffect(() => {
        let isIdExist: boolean = false;
        for (let i = 0; i < news.length; i++ ){
            if (news[i].id == id) { 
                isIdExist = true;
                break;
            }
        }

        if ( !isIdExist ) {
            setTimeout(() => {
                router.push('/news')
            },
                3000
            )
        }
    }, [router, id])






    // генерация случайных карточек-предложек

    function getRandomInt(max) {  // не включая max
        return Math.floor(Math.random() * max);
    }
    // функция-проверка что не равна текущей карточке
    let randomIdArray: Array<number> = [];
        randomIdArray.push(getRandomInt(totalCount))
        randomIdArray.push(getRandomInt(totalCount))
        randomIdArray.push(getRandomInt(totalCount))
    
    






    return (
        <main className={styles.New}>
            <>
            {news.map(n => {
                if (n.id == +id) { return <>
                        <div className={styles.TitleBlockContainer}>
                            <div className={styles.TitleBlock}>
                                
                                 <Breadcrumbs breadcrumbs={[
                                    {name: 'news', value: 'Новости '}, 
                                    {name: '',     value: `${n.title}`}]} />

                                <h1 className={styles.Title}>{n.title}</h1>
                                <div className={styles.TitleButtonsBlock}>
                                    <span className={styles.TitleDateSpan}>
                                    {dateConverter(n.date)}
                                       
                                    </span>
                                    <Socials_sharing
                                        color={'violet'}
                                     />
                                </div>


                            </div>
                        </div>

                        <div className={styles.ContentBlockWrapper}>

                            <div className={styles.ContentBlock}>
                                <Image src={n.image ? n.image : room} alt="" className={styles.Image} />
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className={styles.Dotes}>
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
                                <div className={styles.ContentTextBlock}>
                                    {n.description.map(d => <p key={n.description.indexOf(d)}>{d}</p>)}
                                </div>
                            
                            </div>
                     
                           
                        </div>

                    </>
                }
            })}
            </>




            <div className={styles.AlsoReadBlockContainer}>
                <div className={styles.AlsoReadBlock}>
                    <h2 className={styles.AlsoReadTitle}>
                        Читайте также
                    </h2>
                    <div className={styles.CardsBlock}>
                        {news.map(n => {
                            if (randomIdArray.includes(news.indexOf(n))
                                ) {
                                return <NewsCard
                                    key={n.id}
                                    id={n.id}
                                    image={n.image}
                                    title={n.title}
                                    shortDescription={n.shortDescription}
                                    description={n.description}
                                    date={n.date}
                                />
                            }
                        })}
                        {/* <NewsCard/> 
                        <NewsCard/> 
                        <NewsCard/>  */}
                    </div>

                </div>
            </div>

        </main>
    )
}
