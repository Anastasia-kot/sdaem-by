import React from "react";
import Slider from "react-slick";
import styles from './Rent.module.scss'
import { AddressFeaturesType, CatalogueCard, RoomFeaturesType } from '../../../entities/CatalogueCard/CatalogueCard'

const SampleArrow = (props) => <button onClick={props.onClick} className={styles.slider__button} />

export const SimpleSlider = () => {
    const addressFeatures: AddressFeaturesType = [
        {
            name: 'metro',
            value: 'Грушевка'
        },
        {
            name: 'district',
            value: 'Шабаны'
        },
    ]
    const roomFeatures: RoomFeaturesType = [
        {
            name: 'size as people',
            value: '4 (2+2)'
        },
        {
            name: 'roomCount',
            value: 4
        },
        {
            name: 'size as meters',
            value: 179
        },
    ]

    const settings = {
        prevArrow: <SampleArrow  />,
        nextArrow: <SampleArrow  />,

        infinite: true,
        accessibility: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className={styles.cards}>
            <Slider {...settings} >
                <div>
                    <CatalogueCard
                        style={'mainPage'}
                        title='4-комн. апартаменты на Грушевке'
                        price={65}
                        address='Минск, б-р Мулявина, д. 10'
                        addressFeatures={addressFeatures}
                        roomFeatures={roomFeatures}
                        description='Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...'
                        image=''
                    />
                </div>
                <div>
                    <CatalogueCard
                        style={'mainPage'}
                        title='4-комн. апартаменты на Грушевке'
                        price={65}
                        address='КВАРТИРА 1 '
                        addressFeatures={addressFeatures}
                        roomFeatures={roomFeatures}
                        description='Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...'
                        image=''
                    />
                </div>
                <div>
                    <CatalogueCard
                        style={'mainPage'}
                        title='4-комн. апартаменты на Грушевке'
                        price={65}
                        address='КВАРТИРА 2 '
                        addressFeatures={addressFeatures}
                        roomFeatures={roomFeatures}
                        description='Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...'
                        image=''
                    />
                </div>
                <div>
                    <CatalogueCard
                        style={'mainPage'}
                        title='4-комн. апартаменты на Грушевке'
                        price={65}
                        address='КВАРТИРА 3 '
                        addressFeatures={addressFeatures}
                        roomFeatures={roomFeatures}
                        description='Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...'
                        image=''
                    />
                </div>
                <div>
                    <CatalogueCard
                        style={'mainPage'}
                        title='4-комн. апартаменты на Грушевке'
                        price={65}
                        address='КВАРТИРА 4 '
                        addressFeatures={addressFeatures}
                        roomFeatures={roomFeatures}
                        description='Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...'
                        image=''
                    />
                </div>
                <div>
                    <CatalogueCard
                        style={'mainPage'}
                        title='4-комн. апартаменты на Грушевке'
                        price={65}
                        address='КВАРТИРА 5 '
                        addressFeatures={addressFeatures}
                        roomFeatures={roomFeatures}
                        description='Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...'
                        image=''
                    />
                </div>
            </Slider>
        </div>

    );
}

