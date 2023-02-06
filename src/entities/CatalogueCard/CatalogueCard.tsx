/* eslint-disable @next/next/no-img-element */
import styles from './CatalogueCard.module.scss'
import Slider from "react-slick";
import Image from 'next/image'
import React, { FC, useState } from 'react';
import { ContactsButton } from '../../shared/buttons/Contacts/Contacts';
import { LikeButton } from '../../shared/buttons/Like/Like';
import { SimpleButton } from '../../shared/buttons/Simple/Simple';
import { CatalogueType } from '../../store/catalogueSlice';
import classNames from 'classnames';
const room = require('../../../public/images/room.png');
const avatar = require('../../../public/images/avatar.png');

import avatar16 from './../../../public/images/svg/avatar16.svg'
import metro from './../../../public/images/svg/metro.svg'
 
type Props = {
 data: CatalogueType, 
 style: 'main' | 'list' | 'tile' 
}
 
export const CatalogueCard: FC<Props> = React.memo(({ data, style }) => {

 
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
    const socialsList = [
        { url: 'socials/viber.svg',
            params: {
                width: 16,
                height: 17
            }
        },
        { url: 'socials/whatsapp.svg',
            params: {
                width: 16,
                height: 16
            }
        },
        { url:      'postal_envelope_white.svg',
            params:{
                width: 18,
                height: 16
            }
        },
    ]

    //modal 
    const [isShownModal, setIsShownModal] = useState<boolean>(false);
 
    return (


        <div className={classNames(
            styles.card,
            { [styles.main]: style === 'main' },
            { [styles.list]: style === 'list' },
            { [styles.tile]: style === 'tile' },
        )}>

            {isShownModal && <div className={styles.card__modal}>
                <Image src={avatar} alt="" className={styles.modal__avatar}/>
                <p className={styles.modal__ownerStatus}>{data.roomOwner.ownerStatus}</p>
                <p className={styles.modal__name}>{data.roomOwner.name}</p>
                <p className={styles.modal__phone}><a href={`tel:${data.roomOwner.phone}`}> {data.roomOwner.phone} </a></p>
                <p className={styles.modal__email}><a href={`mailto:${data.roomOwner.email}`}>{data.roomOwner.email}</a></p>
                <ul className={styles.modal__contacts}>
                    {socialsList.map(({url, params}, index)=>
                        <li key={index} className={styles.contacts__item}>
                            <Image src={`/../../images/svg/${url}`} alt={url} width={params.width} height={params.height} />
                        </li>)}
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
                            <Image src={avatar16} alt='avatar'/>
                            {data?.roomFeatures?.sizeAsPeople}
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
                                    <Image src={metro} alt='metro' />
                                    {data.addressFeatures.metro}
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
                        <Image src={metro} alt='metro' />
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
})
CatalogueCard.displayName = 'CatalogueCard';

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

 