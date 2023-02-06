import React, { FC, useEffect,  useState } from "react";
import styles from './Rent.module.scss'
import { useForm } from 'react-hook-form'

import { SelectBlock } from '../../../shared/Select_block/Select_block'
import {  DistrictMetroType, districtsList, DistrictType, MetroList, MetroType } from '../../../../types/formTypes'
import { CatalogueState, CatalogueType } from "../../../../types/catalogue_data";

import { SimpleSlider } from "./Slider";
import { useWindowDimensions } from '../../../../helpers/useWindowDimensions'
import { districtNameEngToRus, metroNameEngToRus } from "../../../../helpers/nameConverters";

import dotes from './../../../../public/images/svg/dotes.svg'
import Image from 'next/image'
import arrow  from '../../../../public/images/svg/arrow_right_white.svg';


type Props = {
    data: CatalogueState
}

export const Rent: FC<Props> = ({ data }) => {

    const { items, totalCount } = data


    // данные для отрисовки
    const [filteredData, setFilteredData] = useState<CatalogueType[]>(()=>{return items ?? []})

    const [filters, setFilters] =
        useState<{ metro: null | MetroType, district: null | DistrictType, city: 'Minsk' }>
            ({ metro: null, district: null, city: 'Minsk' })

    useEffect(() => {
        let newData = items?.filter(
            ({ addressFeatures }) => {
                let result = true // по дефолту все элементы проходят фильтрацию

                if (filters.district && filters.district != addressFeatures.district) {
                    result = false
                } else if (filters.metro && filters.metro != addressFeatures.metro) {
                    result = false
                } else if (filters.city && filters.city != addressFeatures.city) {
                    result = false
                }
                return result
            }

        )
        setFilteredData(newData)

    }, [items, filters])



    // for form
    const { register, formState: { errors } } = useForm<DistrictMetroType>();

    const onChange =
        (formData: { filter: 'metro', value: MetroType | '-1' } | { filter: 'district', value: DistrictType | '-1' }) => {

            if (formData.filter === 'metro') {
                setFilters(prev => {
                    return (
                        (formData.value === '-1')
                            ? { ...prev, metro: null }  // если из селекта пришло -1, то сбрасываем значение
                            : { ...prev, metro: formData.value }
                    )
                })
            }

            if (formData.filter === 'district') {
                setFilters(prev => {
                    return (
                        (formData.value === '-1')
                            ? { ...prev, district: null }  // если из селекта пришло -1, то сбрасываем значение
                            : { ...prev, district: formData.value }
                    )
                })
            }
        }


    return (
        <div className={styles.rent}>
            <div className={styles.rent__background}></div>
            <Image src={dotes} alt="dotes" className={styles.rent__dotes} />

            <div className={styles.rent__heading}>
                <div className={styles.heading__titleWrapper}>
                    <h2 className={styles.heading__title}>Аренда квартир в Минске</h2>
                    <p className={styles.heading__subtitle}>КВАРТИРЫ НА СУТКИ</p>
                </div>

                <form className={styles.rent__form}>
                    <div className={styles.form__container} >
                        <SelectBlock
                            options={[
                                { text: 'Выберите', value: -1 },
                                ...MetroList.map(m => ({ text: metroNameEngToRus(m), value: m }))
                            ]}
                            label={'metro'}
                            register={register}
                            required={false}
                            onChange={onChange}

                            labelRus={null}
                            style={{
                                width: '185px',
                                height: '40px',
                                backgroundColor: '#FFFFFF',
                                boxShadow: '0px 10px 20px rgba(0, 96, 206, 0.1)',
                            }}


                        />
                        <svg width="20" height="13" viewBox="0 0 20 13" fill="#BDBDBD" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6401 11.4773H18.3812L14.4755 0.509766L9.99979 7.19943L5.21594 0.589264L1.61882 11.4773H0.359905L0 12.9373H4.77911L6.65514 7.59981L10.0565 12.2942L10.0769 12.3238L10.0978 12.2942L13.3449 7.59981L15.2209 12.9373H20L19.6401 11.4773Z" />
                        </svg>

                    </div>


                    <SelectBlock
                        options={[
                            { text: 'Выберите', value: -1 },
                            ...districtsList.map(m => ({ text: districtNameEngToRus(m), value: m }))
                        ]}
                        label={'district'}
                        register={register}
                        required={false}
                        onChange={onChange}


                        labelRus={null}
                        style={{
                            width: '185px',
                            height: '40px',
                            backgroundColor: '#FFFFFF',
                            boxShadow: '0px 10px 20px rgba(0, 96, 206, 0.1)',
                        }}
                    />
                </form>
            </div>

            
            <SimpleSlider data={filteredData} />

      
            <div className={styles.rent__more}>
                <div>
                    <p className={styles.TotalCount}>{filteredData.length}<span> +</span></p>
                    <p className={styles.TotalCountDescription}>Предложений по Минску</p>
                </div>
                <button className={styles.ShowMoreButton}>
                    Посмотреть все
                    <Image src={arrow} alt="arrow" />
                </button>

            </div>


        </div>
    )
}