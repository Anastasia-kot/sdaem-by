import Image from 'next/image'
import { Breadcrumbs } from '../../entities/Breadcrumbs/Breadcrumbs'
import { NewsCard } from '../../entities/NewsCard/NewsCard.tsx'
import styles from './New.module.scss'
const room = require('../../assets/images/room_big_quality.png');


export const New = () => {
    return (
        <main className={styles.New}>
            <div className={styles.TitleBlockContainer}>
                <div className={styles.TitleBlock}>
                    <Breadcrumbs breadcrumbs={['Новости ', 'Линия Сталина: суровый отдых в усадьбах на сутки ']} />

                    <h1 className={styles.Title}>Линия Сталина: суровый отдых в усадьбах на сутки</h1>
                    <div className={styles.TitleButtonsBlock}>
                        <span className={styles.TitleDateSpan}>
                            14 Января 2008
                        </span>
                        <div className={styles.TitleShareBlock}>
                            <span className={styles.TitleShareSpan}>Поделиться</span>
                            <ul className={styles.TitleShareList}>
                                <li className={styles.TitleShareItem}>
                                    <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.7034 6.23046C14.4274 5.88189 14.5064 5.72681 14.7034 5.41522C14.707 5.41167 16.9855 2.26311 17.2203 1.19534L17.2217 1.19463C17.3384 0.805504 17.2217 0.519531 16.6576 0.519531H14.7909C14.3157 0.519531 14.0966 0.764956 13.9793 1.03955C13.9793 1.03955 13.0289 3.31453 11.6844 4.78921C11.2504 5.21533 11.0498 5.35191 10.8129 5.35191C10.6963 5.35191 10.5149 5.21533 10.5149 4.8262V1.19463C10.5149 0.727964 10.3818 0.519531 9.98843 0.519531H7.0533C6.75523 0.519531 6.5781 0.737212 6.5781 0.939955C6.5781 1.38243 7.25035 1.48416 7.32006 2.72907V5.43016C7.32006 6.02203 7.21264 6.13087 6.97433 6.13087C6.33979 6.13087 4.79966 3.84664 3.88696 1.23233C3.70271 0.725119 3.52274 0.520243 3.04398 0.520243H1.17662C0.643795 0.520243 0.536377 0.765667 0.536377 1.04026C0.536377 1.52542 1.17092 3.93769 3.48717 7.12466C5.03085 9.30005 7.20482 10.4788 9.18245 10.4788C10.3712 10.4788 10.5163 10.217 10.5163 9.76671C10.5163 7.68807 10.4089 7.49173 11.0043 7.49173C11.2803 7.49173 11.7555 7.62832 12.8652 8.6776C14.1336 9.92179 14.3421 10.4788 15.052 10.4788H16.9187C17.4508 10.4788 17.7204 10.217 17.5653 9.70055C17.2103 8.61428 14.8116 6.37985 14.7034 6.23046Z" fill="#664EF9" />
                                    </svg>
                                </li>
                                <li className={styles.TitleShareItem}>
                                    <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.88394 3.79773H9.44256V1.08311C9.17366 1.04612 8.24887 0.962891 7.17185 0.962891C4.92461 0.962891 3.38519 2.3764 3.38519 4.97434V7.36528H0.905334V10.4H3.38519V18.0359H6.42561V10.4007H8.80517L9.18291 7.36599H6.4249V5.27525C6.42562 4.39813 6.66179 3.79773 7.88394 3.79773Z" fill="#664EF9" />
                                    </svg>
                                </li>
                                <li className={styles.TitleShareItem}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.76711 0.477981C7.36991 0.496852 4.36357 0.726211 2.68185 2.26712C1.43344 3.50827 0.997224 5.33806 0.946417 7.60407C0.902868 9.86136 0.852061 14.1001 4.93842 15.2549V17.0114C4.93842 17.0114 4.91084 17.7154 5.37536 17.8606C5.94876 18.0421 6.27538 17.4984 6.81974 16.9178L7.83589 15.771C10.6303 16.0032 12.7715 15.4669 13.0182 15.387C13.5844 15.2056 16.7787 14.7984 17.3013 10.5589C17.8384 6.18146 17.04 3.42335 15.6029 2.17495L15.5956 2.17349C15.1601 1.77429 13.4182 0.504111 9.52051 0.489594C9.52051 0.489594 9.23309 0.471449 8.76711 0.477981ZM8.81574 1.7097C9.21131 1.70752 9.45446 1.72421 9.45446 1.72421C12.7497 1.73147 14.3254 2.72584 14.6956 3.05972C15.9077 4.09691 16.5305 6.58429 16.0747 10.2395C15.6392 13.7815 13.048 14.0065 12.5689 14.1589C12.3657 14.2243 10.4786 14.6888 8.10371 14.5364C8.10371 14.5364 6.33344 16.671 5.78182 17.2226C5.69472 17.317 5.59311 17.346 5.52778 17.3315C5.43343 17.3097 5.40439 17.1936 5.41165 17.0339L5.42617 14.1168C1.96329 13.1588 2.16652 9.54273 2.20281 7.6556C2.24636 5.76847 2.60201 4.22103 3.65445 3.17585C5.07487 1.89115 7.6283 1.71695 8.81502 1.7097H8.81574ZM9.07704 3.59682C9.04848 3.59673 9.02018 3.60227 8.99376 3.61313C8.96735 3.624 8.94334 3.63997 8.92311 3.66013C8.90288 3.68029 8.88683 3.70425 8.87588 3.73063C8.86493 3.757 8.85929 3.78528 8.85929 3.81384C8.85929 3.87159 8.88223 3.92698 8.92307 3.96781C8.9639 4.00865 9.01929 4.03159 9.07704 4.03159C9.61664 4.02129 10.1529 4.11798 10.655 4.31605C11.157 4.51413 11.6149 4.80968 12.0021 5.18564C12.7932 5.95501 13.1786 6.98567 13.1932 8.33569C13.1932 8.36429 13.1988 8.3926 13.2097 8.41902C13.2207 8.44544 13.2367 8.46944 13.2569 8.48966C13.2771 8.50988 13.3012 8.52592 13.3276 8.53686C13.354 8.54781 13.3823 8.55344 13.4109 8.55344V8.54691C13.4686 8.54691 13.524 8.52397 13.5649 8.48313C13.6057 8.4423 13.6286 8.38691 13.6286 8.32916C13.6556 7.69428 13.553 7.06056 13.3271 6.46659C13.1013 5.87263 12.7569 5.33086 12.3149 4.87426C11.4512 4.03232 10.361 3.59682 9.07631 3.59682H9.07704ZM6.20715 4.09764C6.0528 4.07564 5.89553 4.10633 5.76077 4.18474H5.75206C5.45448 4.35893 5.18012 4.57668 4.91882 4.86701C4.72285 5.09927 4.61325 5.3308 4.58422 5.55581C4.56714 5.68777 4.57954 5.82188 4.62051 5.94848L4.63503 5.95573C4.85874 6.61343 5.15066 7.24592 5.50601 7.84286C5.96662 8.67888 6.53254 9.45237 7.18991 10.1444L7.21168 10.1735L7.24072 10.1952L7.26249 10.217L7.28426 10.2388C7.97904 10.8978 8.75459 11.4661 9.59237 11.9299C10.5504 12.4525 11.1326 12.6993 11.4809 12.8009V12.8082C11.5826 12.8372 11.6755 12.8517 11.7698 12.8517C12.0672 12.83 12.3488 12.7094 12.5697 12.5091C12.8527 12.2551 13.0777 11.9735 13.2447 11.6759V11.6687C13.4116 11.3566 13.3536 11.0582 13.114 10.855C12.6313 10.4327 12.1087 10.0584 11.5535 9.73725C11.1834 9.53402 10.8059 9.65741 10.6535 9.86064L10.3269 10.2736C10.16 10.4769 9.85511 10.4478 9.85511 10.4478L9.8464 10.4551C7.58185 9.87443 6.97942 7.58157 6.97942 7.58157C6.97942 7.58157 6.95039 7.26947 7.16088 7.10979L7.56733 6.78317C7.7633 6.62349 7.90121 6.24606 7.69072 5.87589C7.37002 5.32045 6.99564 4.79778 6.57296 4.31538C6.48102 4.20135 6.35122 4.12409 6.20715 4.09764ZM9.45374 4.74362C9.39599 4.74381 9.34068 4.76694 9.29998 4.80791C9.25928 4.84888 9.23652 4.90434 9.23672 4.96209C9.23691 5.01984 9.26004 5.07515 9.30101 5.11585C9.34198 5.15654 9.39744 5.1793 9.45519 5.17911C10.1816 5.19172 10.8733 5.49189 11.3786 6.0138C11.6066 6.26531 11.7819 6.55996 11.8941 6.88034C12.0063 7.20073 12.0531 7.54036 12.0318 7.87915C12.032 7.93678 12.0551 7.99198 12.0959 8.03265C12.1367 8.07333 12.192 8.09617 12.2496 8.09617L12.2568 8.10488C12.2855 8.10488 12.3139 8.09923 12.3403 8.08824C12.3668 8.07725 12.3908 8.06115 12.4111 8.04085C12.4313 8.02055 12.4473 7.99646 12.4582 7.96996C12.4691 7.94346 12.4747 7.91507 12.4746 7.88641C12.4964 7.02269 12.2278 6.29687 11.698 5.71621C11.1681 5.13556 10.4278 4.80894 9.48422 4.74362C9.47407 4.74291 9.46389 4.74291 9.45374 4.74362ZM9.80939 5.91872C9.78027 5.91786 9.75127 5.92275 9.72404 5.9331C9.6968 5.94345 9.67188 5.95906 9.65068 5.97904C9.62949 5.99903 9.61243 6.02299 9.6005 6.04956C9.58856 6.07614 9.58197 6.1048 9.58112 6.13392C9.58026 6.16304 9.58515 6.19204 9.5955 6.21928C9.60585 6.24651 9.62146 6.27143 9.64144 6.29263C9.66143 6.31382 9.68539 6.33088 9.71196 6.34281C9.73854 6.35475 9.7672 6.36133 9.79632 6.36219C10.5149 6.39848 10.8633 6.76139 10.9068 7.50899C10.9087 7.56547 10.9325 7.61901 10.9731 7.65828C11.0137 7.69756 11.0681 7.7195 11.1246 7.71947H11.1318C11.1611 7.71856 11.1898 7.71177 11.2164 7.6995C11.2429 7.68723 11.2668 7.66973 11.2864 7.64805C11.3061 7.62637 11.3211 7.60096 11.3307 7.57332C11.3403 7.54569 11.3443 7.5164 11.3423 7.48721C11.2915 6.51461 10.7617 5.96953 9.8181 5.91872C9.81519 5.91866 9.81229 5.91866 9.80939 5.91872Z" fill="#664EF9" />
                                    </svg>

                                </li>
                                <li className={styles.TitleShareItem}>
                                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.2089 0.997407L1.56595 6.644C0.566623 7.04538 0.572405 7.60286 1.3826 7.85145L5.14204 9.02421L13.8403 3.53619C14.2516 3.28594 14.6274 3.42056 14.3185 3.69476L7.27118 10.0549H7.26953L7.27118 10.0557L7.01185 13.9308C7.39176 13.9308 7.55941 13.7565 7.77249 13.5509L9.59853 11.7752L13.3968 14.5808C14.0971 14.9665 14.6001 14.7683 14.7744 13.9325L17.2677 2.18173C17.5229 1.15846 16.8771 0.695132 16.2089 0.997407Z" fill="#664EF9" />
                                    </svg>

                                </li>
                                <li className={styles.TitleShareItem}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.1558 2.87929C14.3846 2.10244 13.4667 1.48655 12.4555 1.06738C11.4442 0.64821 10.3598 0.43412 9.26514 0.43754C4.67675 0.43754 0.942178 4.17211 0.942178 8.76365C0.942178 10.2308 1.32656 11.6654 2.05436 12.9257L0.872864 17.241L5.28692 16.0826C6.50723 16.7473 7.87449 17.0961 9.26409 17.0971H9.26724C13.8556 17.0971 17.5934 13.3625 17.5934 8.771C17.5961 7.67672 17.3821 6.59273 16.9635 5.58165C16.5449 4.57058 15.9302 3.65246 15.1548 2.88034L15.1558 2.87929ZM9.26724 15.6919C8.0271 15.6921 6.80973 15.3588 5.74272 14.7268L5.48961 14.5755L2.87038 15.2613L3.56982 12.7083L3.40599 12.4457C2.71049 11.3438 2.34295 10.0667 2.34632 8.76365C2.34854 6.92797 3.07897 5.16815 4.37729 3.87042C5.67561 2.57269 7.43576 1.84307 9.27144 1.84168C11.1188 1.84168 12.859 2.56423 14.1644 3.86965C14.8086 4.51152 15.3192 5.2747 15.6668 6.11507C16.0143 6.95544 16.1919 7.85636 16.1892 8.76575C16.1861 12.5854 13.0816 15.6909 9.26724 15.6909V15.6919ZM13.0617 10.507C12.8548 10.402 11.8308 9.89999 11.6407 9.83067C11.4506 9.76136 11.312 9.72565 11.1713 9.93569C11.0337 10.1426 10.6336 10.612 10.5117 10.7528C10.3899 10.8903 10.2691 10.9103 10.0623 10.8053C9.85536 10.7002 9.18218 10.4808 8.38821 9.77186C7.77068 9.2205 7.35165 8.53786 7.22982 8.33096C7.108 8.12407 7.21617 8.0096 7.32224 7.90773C7.41781 7.81531 7.52914 7.66513 7.63416 7.5433C7.73918 7.42148 7.77174 7.33641 7.84105 7.19568C7.91036 7.0581 7.87676 6.93628 7.82425 6.83125C7.77173 6.72623 7.3548 5.70227 7.18466 5.28534C7.01768 4.87785 6.84334 4.93457 6.71522 4.92721C6.59339 4.92091 6.45581 4.92091 6.31824 4.92091C6.18066 4.92091 5.95381 4.97342 5.76372 5.18032C5.57363 5.38721 5.03487 5.89236 5.03487 6.91632C5.03487 7.94028 5.77947 8.92854 5.8845 9.06927C5.98952 9.20684 7.35165 11.3104 9.43843 12.2105C9.93413 12.4237 10.3217 12.5518 10.6231 12.6505C11.1219 12.808 11.5746 12.7849 11.9327 12.7324C12.3328 12.6736 13.1635 12.2304 13.3379 11.7442C13.5122 11.2579 13.5122 10.842 13.4597 10.7559C13.4103 10.6635 13.2728 10.612 13.0627 10.506L13.0617 10.507Z" fill="#664EF9" />
                                    </svg>
                                </li>


                            </ul>




                        </div>
                    </div>


                </div>
</div>
           

            <div className={styles.ContentBlock}>

                <Image src={room} alt="" className={styles.Image}/>

                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.Dotes}>
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

                <div className={styles.ContentTextBlock}>
                    <p> 
                        Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет - садитесь на маршрутку в сторону Молодечно от железнодорожного вокзала. Остановка называется «Линия Сталина» - да-да, именно здесь вы и проведёте ближайшие несколько часов, а вероятнее всего – останетесь до самого вечера.
                    </p>
                    <p>
                        «Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом. Поэтому желательно приезжать сюда в хорошую погоду. Его территория поистине огромна: целых 26 га. Такое название дано музею неспроста: «Линией Сталина» в 20е-30е гг. XX века именовали цепь укреплений, созданную для защиты государственной границы СССР. Комплекс же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной войне.
                    </p>
                    <p>
                        Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в направлении Молодечно, то можете провести в музейном комплексе хоть целый день. Здесь действительно есть на что посмотреть: ДОТы, испещрённые следами немецких снарядов, окопы, противотанковые заграждения, зенитные пушки, бронетехника… Вы встретите даже элементы ракетных войск – и всё это не муляжи, а настоящие боевые орудия! За отдельную плату вам предложат пострелять из винтовки и пулемёта, а также прокатиться на танке. Проголодались? Загляните в кафе и насладитесь сытным домашним обедом.
                    </p>
                    <p>
                        Посетить «Линию Сталина» будет интересно как взрослым, так и детям. Особенно мальчишкам! Уставшие от впечатлений, они будут рады вместо долгой дороги домой остановиться на ночь в уютном современном коттедже. На сайте можно выбрать и снять посуточно наиболее удобный для вас вариант. Проведите незабываемые выходные за городом – приезжайте в «Линию Сталина»!
                    </p>
                    <p>
                        Отличная усадьба в 10 км от "Линии Сталина".
                    </p>
                </div>
           
            </div>

            <div className={styles.AlsoReadBlockContainer}>
            <div className={styles.AlsoReadBlock}>
                <h2 className={styles.AlsoReadTitle}>
                    Читайте также
                </h2>
                <div className={styles.CardsBlock}>
                        <NewsCard/> 
                        <NewsCard/> 
                        <NewsCard/> 
                </div>
                
            </div>
            </div>

        </main>
    )
}
