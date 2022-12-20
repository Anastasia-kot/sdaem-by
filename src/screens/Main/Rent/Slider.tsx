import React from "react";
import Slider from "react-slick";
import styles from './Rent.module.scss'
import {  CatalogueCard } from '../../../entities/CatalogueCard/CatalogueCard'
import { CatalogueType } from "../../../store/catalogueSlice";


export const SimpleSlider = ({ slidesToShow, data }: { slidesToShow:number, data:CatalogueType[] }) => {

    const SampleArrow = (props) => <button onClick={props.onClick} className={styles.slider__button} />

    const settings = {
        prevArrow: <SampleArrow />,
        nextArrow: <SampleArrow />,

        infinite: true,
        accessibility: true,
        arrows: true,
        speed: 500,
        slidesToScroll: 1
    };
 

    return (
        <div className={styles.cards}>
            <Slider {...settings} 
            slidesToShow={slidesToShow}
            >
                {data && data.map(d => <div key={data.indexOf(d)}> <CatalogueCard data={d} style={'main'} /> </div>)}
             </Slider>
        </div>
    );
}

