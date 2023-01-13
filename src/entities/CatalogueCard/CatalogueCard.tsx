/* eslint-disable @next/next/no-img-element */
import styles from './CatalogueCard.module.scss'
import Slider from "react-slick";
import Image from 'next/image'
import { useState } from 'react';
import { ContactsButton } from '../../shared/buttons/Contacts/Contacts';
import { LikeButton } from '../../shared/buttons/Like/Like';
import { SimpleButton } from '../../shared/buttons/Simple/Simple';
import { CatalogueType } from '../../store/catalogueSlice';
import classNames from 'classnames';
const room = require('../../../public/images/room.png');
const avatar = require('../../../public/images/avatar.png');
 

 
export const CatalogueCard = ( 
    { data, style }: { data: CatalogueType, style: 'main' | 'list' | 'tile' }
) => {

 
    //image + image slider
    const defImg = 'https://thumbs.dreamstime.com/b/%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA-%D0%BB%D0%B8%D0%BD%D0%B8%D0%B8-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80%D0%B0-%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%BE%D0%B9-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B4%D0%BE%D0%BC%D0%B0-%D0%B8%D0%BB%D0%B8-%D1%81-%D0%B4%D0%B8%D0%B2%D0%B0%D0%BD%D0%BE%D0%BC-%D0%B8-227710999.jpg'
    const SampleArrow = (props) => <button onClick={props.onClick} className={styles.slider__button} />
    const settings = {
        prevArrow: <SampleArrow /> ,
        nextArrow: <SampleArrow />,
        infinite: true,
        accessibility: true,
        arrows: true,
        dots: true,
        appendDots: dots => (
            <div
                style={{
                    padding: "10px",
                    position: 'absolute',
                    bottom: '10px', 
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => <div
                style={{
                    height:'8px',
                    width: '8px',
                    borderRadius: '8px',
                    background: '#C5C5C5',
                    opacity: 0.5,
                }}
            />,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    //modal 
    const [isShownModal, setIsShownModal] = useState(false);
 
    return (


        <div className={classNames(
            styles.card,
            { [styles.main]: style === 'main' },
            { [styles.list]: style === 'list' },
            { [styles.tile]: style === 'tile' },
        )}>

            {isShownModal && <div className={styles.card__modal}>
                <Image src={avatar} alt="" />
                <p className={styles.modal__OwnerStatus}>{data.roomOwner.ownerStatus}</p>
                <p className={styles.modal__Name}>{data.roomOwner.name}</p>
                <p className={styles.modal__Phone}><a href={`tel:${data.roomOwner.phone}`}> {data.roomOwner.phone} </a></p>
                <p className={styles.modal__Email}><a href={`mailto:${data.roomOwner.email}`}>{data.roomOwner.email}</a></p>
                <ul className={styles.modal__Contacts}>
                    <li>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.90239 0.407538C6.63357 0.424676 3.90348 0.632959 2.37628 2.03228C1.24258 3.15939 0.84645 4.82104 0.800311 6.87884C0.760764 8.92872 0.714625 12.778 4.4255 13.8267V15.4218C4.4255 15.4218 4.40046 16.0611 4.8223 16.1929C5.34301 16.3577 5.63961 15.864 6.13396 15.3367L7.05673 14.2953C9.59437 14.5062 11.5388 14.0191 11.7629 13.9466C12.277 13.7819 15.1778 13.4121 15.6524 9.56214C16.1401 5.58695 15.4151 3.08227 14.11 1.94857L14.1034 1.94726C13.708 1.58474 12.1261 0.431267 8.58656 0.418084C8.58656 0.418084 8.32555 0.401606 7.90239 0.407538ZM7.94655 1.52607C8.30578 1.5241 8.52658 1.53926 8.52658 1.53926C11.519 1.54585 12.95 2.44885 13.2861 2.75205C14.3869 3.69394 14.9524 5.95276 14.5385 9.27212C14.143 12.4887 11.7899 12.693 11.3549 12.8314C11.1703 12.8907 9.45661 13.3126 7.29995 13.1741C7.29995 13.1741 5.69234 15.1126 5.19141 15.6136C5.11231 15.6993 5.02003 15.7256 4.96071 15.7124C4.87503 15.6927 4.84866 15.5872 4.85525 15.4422L4.86844 12.7932C1.72375 11.9231 1.9083 8.63936 1.94126 6.92563C1.98081 5.21191 2.30378 3.80665 3.25951 2.85751C4.54942 1.69086 6.86822 1.53267 7.94589 1.52607H7.94655ZM8.18384 3.2398C8.1579 3.23972 8.1322 3.24475 8.10822 3.25461C8.08423 3.26448 8.06243 3.27898 8.04406 3.29729C8.02569 3.3156 8.01111 3.33736 8.00117 3.36131C7.99122 3.38526 7.9861 3.41094 7.9861 3.43688C7.9861 3.48932 8.00693 3.53962 8.04402 3.5767C8.0811 3.61379 8.1314 3.63462 8.18384 3.63462C8.67386 3.62527 9.16089 3.71307 9.6168 3.89294C10.0727 4.07282 10.4885 4.34121 10.8401 4.68263C11.5586 5.3813 11.9086 6.31726 11.9217 7.54323C11.9217 7.5692 11.9269 7.59491 11.9368 7.61891C11.9467 7.6429 11.9613 7.66469 11.9797 7.68306C11.998 7.70142 12.0198 7.71598 12.0438 7.72592C12.0678 7.73586 12.0935 7.74097 12.1195 7.74097V7.73504C12.1719 7.73504 12.2222 7.71421 12.2593 7.67712C12.2964 7.64004 12.3172 7.58975 12.3172 7.5373C12.3417 6.96075 12.2485 6.38526 12.0434 5.84588C11.8383 5.30649 11.5255 4.8145 11.1242 4.39986C10.3398 3.63528 9.34983 3.2398 8.18318 3.2398H8.18384ZM5.57766 3.6946C5.43748 3.67462 5.29467 3.70249 5.17229 3.77369H5.16438C4.89414 3.93188 4.64499 4.12962 4.40771 4.39327C4.22974 4.60419 4.13022 4.81445 4.10385 5.01878C4.08834 5.13862 4.0996 5.26041 4.13681 5.37537L4.14999 5.38196C4.35315 5.97922 4.61824 6.55359 4.94094 7.09569C5.35923 7.85488 5.87314 8.55731 6.47011 9.18578L6.48989 9.21214L6.51625 9.23191L6.53602 9.25169L6.5558 9.27146C7.18673 9.86994 7.89102 10.386 8.65182 10.8072C9.52186 11.2818 10.0505 11.5059 10.3669 11.5982V11.6048C10.4591 11.6311 10.5435 11.6443 10.6292 11.6443C10.8993 11.6246 11.155 11.5151 11.3556 11.3332C11.6126 11.1025 11.8169 10.8468 11.9685 10.5765V10.5699C12.1201 10.2865 12.0674 10.0156 11.8499 9.83106C11.4115 9.44758 10.9369 9.10763 10.4328 8.81601C10.0966 8.63145 9.75388 8.7435 9.61546 8.92806L9.31885 9.3031C9.16725 9.48766 8.89042 9.46129 8.89042 9.46129L8.88251 9.46788C6.82604 8.94058 6.27897 6.8584 6.27897 6.8584C6.27897 6.8584 6.2526 6.57498 6.44375 6.42997L6.81286 6.13336C6.99082 5.98836 7.11606 5.64561 6.92491 5.30946C6.63367 4.80505 6.2937 4.33041 5.90985 3.89234C5.82636 3.78878 5.70849 3.71862 5.57766 3.6946ZM8.52593 4.28122C8.47348 4.2814 8.42326 4.3024 8.3863 4.3396C8.34934 4.37681 8.32867 4.42717 8.32885 4.47962C8.32902 4.53206 8.35002 4.58229 8.38723 4.61925C8.42444 4.65621 8.4748 4.67687 8.52724 4.6767C9.18686 4.68815 9.81502 4.96074 10.2739 5.43469C10.481 5.66309 10.6401 5.93066 10.742 6.22161C10.8439 6.51256 10.8865 6.82098 10.8671 7.12864C10.8673 7.18097 10.8882 7.2311 10.9253 7.26804C10.9624 7.30498 11.0125 7.32572 11.0649 7.32572L11.0715 7.33363C11.0975 7.33363 11.1233 7.3285 11.1473 7.31852C11.1713 7.30854 11.1932 7.29391 11.2115 7.27548C11.2299 7.25705 11.2444 7.23518 11.2543 7.21111C11.2642 7.18704 11.2693 7.16126 11.2692 7.13523C11.289 6.35088 11.0451 5.69175 10.5639 5.16445C10.0828 4.63715 9.41047 4.34054 8.55361 4.28122C8.54439 4.28057 8.53514 4.28057 8.52593 4.28122ZM8.8489 5.34835C8.82245 5.34757 8.79611 5.352 8.77139 5.3614C8.74666 5.3708 8.72402 5.38498 8.70477 5.40313C8.68552 5.42128 8.67004 5.44304 8.6592 5.46717C8.64836 5.4913 8.64238 5.51733 8.6416 5.54378C8.64082 5.57022 8.64526 5.59656 8.65466 5.62129C8.66406 5.64601 8.67824 5.66865 8.69638 5.6879C8.71453 5.70715 8.73629 5.72263 8.76043 5.73347C8.78456 5.74431 8.81059 5.75029 8.83703 5.75107C9.48957 5.78403 9.80595 6.11359 9.84549 6.79249C9.84721 6.84378 9.86879 6.8924 9.90569 6.92807C9.94259 6.96374 9.99191 6.98366 10.0432 6.98364H10.0498C10.0764 6.98281 10.1025 6.97664 10.1266 6.9655C10.1507 6.95435 10.1724 6.93847 10.1902 6.91878C10.208 6.89909 10.2217 6.87601 10.2305 6.85092C10.2392 6.82582 10.2428 6.79922 10.241 6.77272C10.1948 5.88949 9.71367 5.39448 8.85681 5.34835C8.85417 5.34829 8.85153 5.34829 8.8489 5.34835Z" fill="white" />
                        </svg>
                    </li>
                    <li>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3797 2.58852C12.6794 1.88305 11.8458 1.32375 10.9275 0.943094C10.0092 0.562442 9.0244 0.368024 8.03032 0.37113C3.86354 0.37113 0.472125 3.76254 0.472125 7.93219C0.472125 9.26453 0.821185 10.5673 1.48211 11.7118L0.40918 15.6306L4.41765 14.5786C5.52583 15.1823 6.76745 15.499 8.02937 15.4999H8.03223C12.199 15.4999 15.5933 12.1085 15.5933 7.93886C15.5958 6.94513 15.4014 5.96074 15.0213 5.04257C14.6412 4.1244 14.0829 3.29064 13.3788 2.58947L13.3797 2.58852ZM8.03223 14.2239C6.90604 14.224 5.80053 13.9213 4.83156 13.3474L4.60171 13.2101L2.22315 13.8328L2.85832 11.5143L2.70954 11.2759C2.07795 10.2752 1.74418 9.1155 1.74724 7.93219C1.74926 6.26518 2.41257 4.66707 3.59159 3.48858C4.77062 2.31009 6.36903 1.64751 8.03604 1.64625C9.71363 1.64625 11.2939 2.3024 12.4794 3.48787C13.0644 4.07077 13.5281 4.76382 13.8437 5.52697C14.1593 6.29013 14.3206 7.10826 14.3182 7.9341C14.3153 11.4028 11.4961 14.2229 8.03223 14.2229V14.2239ZM11.478 9.51536C11.2901 9.41998 10.3602 8.96411 10.1876 8.90116C10.015 8.83822 9.88911 8.80579 9.76132 8.99653C9.63638 9.18442 9.27301 9.61073 9.16238 9.73853C9.05175 9.86346 8.94207 9.88158 8.75419 9.78621C8.56631 9.69084 7.95498 9.49151 7.23397 8.84775C6.67318 8.34705 6.29265 7.72714 6.18202 7.53926C6.07139 7.35138 6.16962 7.24742 6.26595 7.15491C6.35274 7.07098 6.45383 6.9346 6.5492 6.82397C6.64457 6.71334 6.67414 6.63609 6.73708 6.50829C6.80003 6.38335 6.76951 6.27272 6.72182 6.17735C6.67414 6.08198 6.29551 5.15211 6.14101 4.77348C5.98937 4.40344 5.83105 4.45494 5.7147 4.44827C5.60407 4.44254 5.47913 4.44254 5.3542 4.44254C5.22926 4.44254 5.02326 4.49023 4.85063 4.67811C4.67801 4.86599 4.18876 5.32473 4.18876 6.2546C4.18876 7.18448 4.86494 8.08192 4.96031 8.20972C5.05568 8.33466 6.29265 10.2449 8.18768 11.0623C8.63784 11.2559 8.98976 11.3722 9.26348 11.4619C9.71649 11.6049 10.1275 11.584 10.4528 11.5363C10.8161 11.4829 11.5705 11.0804 11.7288 10.6388C11.8871 10.1973 11.8871 9.81959 11.8395 9.74139C11.7946 9.65746 11.6697 9.61073 11.479 9.5144L11.478 9.51536Z" fill="white" />
                        </svg>

                    </li>
                    <li>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.3926 15.0709C16.7973 15.0709 17.1479 14.9373 17.4459 14.6735L12.3462 9.57364C12.2239 9.66125 12.1053 9.74645 11.9932 9.82746C11.6116 10.1086 11.3018 10.3281 11.064 10.4853C10.8262 10.6429 10.5098 10.8035 10.1148 10.9675C9.71958 11.1317 9.35137 11.2135 9.0098 11.2135H8.9998H8.9898C8.6482 11.2135 8.27999 11.1317 7.88479 10.9675C7.48959 10.8035 7.17318 10.6429 6.9356 10.4853C6.69779 10.3281 6.38821 10.1087 6.00638 9.82746C5.89997 9.74946 5.78196 9.66387 5.65438 9.57227L0.553711 14.6735C0.85172 14.9373 1.20254 15.0709 1.60712 15.0709H16.3926Z" fill="white" />
                            <path d="M1.01462 6.36228C0.633012 6.10786 0.294611 5.81649 0 5.48828V13.2473L4.49485 8.75249C3.59562 8.12471 2.43702 7.32889 1.01462 6.36228Z" fill="white" />
                            <path d="M16.9964 6.36228C15.6282 7.2883 14.4654 8.08549 13.5078 8.75429L18.0008 13.2475V5.48828C17.7128 5.80989 17.378 6.10106 16.9964 6.36228Z" fill="white" />
                            <path d="M16.3925 0.927734H1.60704C1.09122 0.927734 0.694647 1.10192 0.416834 1.44993C0.138792 1.7981 0 2.23353 0 2.75572C0 3.17753 0.184185 3.63456 0.552391 4.12695C0.920597 4.61914 1.3124 5.00575 1.7276 5.28696C1.95521 5.44778 2.64163 5.92497 3.78683 6.71838C4.40504 7.14678 4.94266 7.52018 5.40466 7.84241C5.79845 8.11679 6.13806 8.3544 6.41846 8.5516C6.45065 8.57418 6.50127 8.61039 6.56846 8.65843C6.64084 8.71042 6.73245 8.7764 6.84545 8.858C7.06307 9.01539 7.24386 9.14261 7.38785 9.2398C7.53164 9.33703 7.70585 9.44562 7.91024 9.56621C8.11445 9.68664 8.30707 9.77719 8.48785 9.83742C8.66867 9.89762 8.83606 9.92782 8.99005 9.92782H9.00005H9.01005C9.164 9.92782 9.33142 9.89762 9.51228 9.83742C9.69303 9.77719 9.88548 9.68683 10.0899 9.56621C10.294 9.44562 10.468 9.3368 10.6123 9.2398C10.7563 9.14261 10.9371 9.01542 11.1547 8.858C11.2675 8.7764 11.3591 8.71039 11.4315 8.65859C11.4987 8.61035 11.5493 8.57437 11.5817 8.5516C11.8001 8.3996 12.1405 8.16296 12.5982 7.84518C13.4309 7.26658 14.6573 6.41497 16.2826 5.28696C16.7714 4.94555 17.1797 4.53355 17.5079 4.05155C17.8356 3.56956 17.9998 3.06396 17.9998 2.53494C17.9998 2.09294 17.8406 1.71474 17.5227 1.39973C17.2046 1.08512 16.8278 0.927734 16.3925 0.927734Z" fill="white" />
                        </svg>

                    </li>

                </ul>


            </div>}



            <div className={classNames( styles.card__imageWrapper, { [styles.gold]: data.gold }  )}>
                {!data.image
                    ? <img alt="" className={styles.CardImage} src={defImg} /> // заглушка если нет  image (image = null)
                    : (typeof data?.image === 'string'  // если есть 1 image (image = string)
                        ? <img src={data.image} alt="" className={styles.CardImage} />  
                        : style === 'main' 
                            ? <img src={data?.image[0]} alt="" className={styles.CardImage} /> // для main страницы картинка без слайдера
                            : <Slider {...settings}>
                                {data?.image.map(i => <div key={data?.image.indexOf(i)} > <img src={i} alt="" className={styles.CardImage} /> </div>)}
                            </Slider>
                       )}

            </div>

            <div className={styles.content}>

                <h1 className={styles.CardTitle}>{data?.title}</h1>

                <div className={styles.content__price}>
                    <span>{data?.price}.00 BYN</span>
                    <span>за сутки</span>
                </div>

                <ul className={styles.features} >
                    <li key={0} className={styles.features__item}>
                        <button className={styles.features__button}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2831_1903)">
                                    <path d="M8.001 0.794922C5.85814 0.794922 4.10645 2.54661 4.10645 4.68949C4.10645 6.83236 5.85814 8.58405 8.001 8.58405C10.1439 8.58405 11.8956 6.83236 11.8956 4.68949C11.8956 2.54661 10.1439 0.794922 8.001 0.794922Z" fill="#686868" />
                                    <path d="M14.6852 11.6969C14.5832 11.4418 14.4471 11.2037 14.2941 10.9826C13.5118 9.82616 12.3043 9.06086 10.9438 8.87378C10.7737 8.85679 10.5866 8.89077 10.4506 8.99282C9.73627 9.52004 8.88595 9.79214 8.00157 9.79214C7.1172 9.79214 6.26687 9.52004 5.55258 8.99282C5.41651 8.89077 5.22944 8.83976 5.05938 8.87378C3.69884 9.06086 2.47436 9.82616 1.70906 10.9826C1.556 11.2037 1.41993 11.4588 1.31791 11.6969C1.2669 11.799 1.2839 11.918 1.3349 12.0201C1.47097 12.2582 1.64102 12.4963 1.79408 12.7003C2.03217 13.0235 2.28728 13.3126 2.57641 13.5847C2.81449 13.8228 3.0866 14.0439 3.35873 14.265C4.70225 15.2684 6.31791 15.7956 7.98458 15.7956C9.65125 15.7956 11.2669 15.2684 12.6104 14.265C12.8825 14.0609 13.1546 13.8228 13.3927 13.5847C13.6649 13.3126 13.937 13.0235 14.1751 12.7003C14.3451 12.4793 14.4982 12.2582 14.6343 12.0201C14.7192 11.918 14.7362 11.7989 14.6852 11.6969Z" fill="#686868" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2831_1903">
                                        <rect width="15" height="15" fill="white" transform="translate(0.5 0.794922)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <span>
                                {data?.roomFeatures?.sizeAsPeople}
                            </span>
                        </button>
                    </li>

                    <li key={1} className={styles.features__item}>
                        <button className={styles.features__button}>
                            {data?.roomFeatures?.rooms}  комн.
                        </button>
                    </li>
                    {style === 'main' && 
                        <li key={2} className={styles.features__item}>
                            <button className={styles.features__button}>
                                {data?.roomFeatures?.sizeAsMeters} м<sup>2</sup>
                            </button>
                        </li>}

                    {style==='list' && 
                        <>
                            <li className={styles.features__item}>
                                <button className={styles.features__button}>
                                    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.6401 11.4773H18.3812L14.4755 0.509766L9.99979 7.19943L5.21594 0.589264L1.61882 11.4773H0.359905L0 12.9373H4.77911L6.65514 7.59981L10.0565 12.2942L10.0769 12.3238L10.0978 12.2942L13.3449 7.59981L15.2209 12.9373H20L19.6401 11.4773Z" fill="#BDBDBD" />
                                    </svg>
                                    <span>{data.addressFeatures.metro}</span>
                                </button> 
                            </li>
                            <li className={styles.features__item}>
                                <button className={styles.features__button}>
                                    <span> район: </span>
                                    <span>{data.addressFeatures.district}</span>
                                </button> 
                            </li>
                        
                        </>  }
                        
                </ul>


                <div className={styles.CardAddressFull}>
                    <span>  {data?.addressFeatures?.address} </span>
                </div>


                <div className={styles.CardAddressTags}>
                    <div className={styles.CardAddressMetro}>
                        <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6401 11.4773H18.3812L14.4755 0.509766L9.99979 7.19943L5.21594 0.589264L1.61882 11.4773H0.359905L0 12.9373H4.77911L6.65514 7.59981L10.0565 12.2942L10.0769 12.3238L10.0978 12.2942L13.3449 7.59981L15.2209 12.9373H20L19.6401 11.4773Z" fill="#BDBDBD" />
                        </svg>
                        <span>{data?.addressFeatures?.metro}</span>
                    </div>
                    <div className={styles.CardAddressDistrict}>
                        {data?.addressFeatures?.district}
                    </div>
                </div>



                <p className={styles.CardDescription}>
                    {data?.description}
                </p>


                <div className={styles.content__footer}>
                    <ContactsButton
                        style={{
                            order: style === 'list' ? '0' : '1',
                            margin: 0,
                        }}
                        onClick={() => setIsShownModal(actual => { return (!actual) })}
                    />

                    <SimpleButton
                        text={'Подробнее'}
                        width={110}
                        colorScheme={'yellow'}
                        onClick={null}
                    />

                    <LikeButton style={style} />
                </div>

            </div>
        </div>
    )
}

// CatalogueCard.propTypes = {
//     data: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         image: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.oneOf([null])]).isRequired ,
//         gold: PropTypes.bool.isRequired,
//         title: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         address: PropTypes.string,
//         addressFeatures: 
//             PropTypes.arrayOf(
//                 PropTypes.shape({
//                     name: PropTypes.oneOf(['metro', 'district']),
//                     value: PropTypes.string
//                 })
//             ),
//         roomFeatures: 
//             PropTypes.arrayOf(
//                 PropTypes.oneOfType([
//                     PropTypes.shape({
//                         name: PropTypes.oneOf(['size as people']),
//                         value: PropTypes.string
//                     }),
//                     PropTypes.shape({
//                         name: PropTypes.oneOf([ 'roomCount', 'size as meters']),
//                         value: PropTypes.number
//                     })
//                 ])  
//             ),
//         roomOwner:  PropTypes.shape({
//             ownerStatus: PropTypes.string,
//             name: PropTypes.string,
//             phone: PropTypes.string,
//             email: PropTypes.string,
//         }),
//     }).isRequired, 
//     style: PropTypes.oneOf(['main', 'list', 'tile']).isRequired,
// }

 
// CatalogueCard.defaultProp = {
//     data: {
//         image: null,
//         gold: false,
//         title: '',
//         description: '',
//         price: PropTypes.number,
//         address: '',
//         addressFeatures: [
//             { name: 'metro', value: ''},
//             { name: 'district', value: '' } 
//         ],
//         roomFeatures: [
//             { name: 'size as people', value: '' },
//             { name: 'roomCount', value: 0 },
//             { name: 'size as meters', value: 0 },
//         ],
//         roomOwner:  {
//             ownerStatus: '',
//             name: '',
//             phone: '',
//             email: '',
//         },
//     },
//     style: 'main'
// };

 