import React, { FC, useEffect, useRef, useState } from "react";
import styles from './Rent.module.scss'
import { SelectBlock } from '../../../shared/Select_block/Select_block'
import { useForm } from 'react-hook-form'
import { CityType, DistrictMetroType, districtsList, DistrictType, MetroList, MetroType } from '../../../../types/formTypes'
import { useSelector } from "react-redux";
import { SimpleSlider } from "./Slider";
import { useWindowDimensions } from '../../../../helpers/useWindowDimensions'
import { RootState } from "../../../store/store";
import { CatalogueType } from "../../../store/catalogueSlice";
import { districtNameEngToRus, metroNameEngToRus } from "../../../../helpers/nameConverters";


type Props = {
    data: {
        items: CatalogueType[] | null
        totalCount: number | null,
    }
}
export const Rent: FC<Props> = React.memo(({ data }) => {
    //определяем ширину для пропров слайдера
    const { width } = useWindowDimensions();
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

            <div className={styles.rent__dotes}>
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

            <div className={styles.heading}>
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

            
            <SimpleSlider
                slidesToShow={(width && width >= 1440) ? 3 : (width && width >= 930) ? 2 : 1}
                data={filteredData} />

      
            <div className={styles.rent__more}>
                <div>
                    <p className={styles.TotalCount}>{filteredData.length}<span> +</span></p>
                    <p className={styles.TotalCountDescription}>Предложений по Минску</p>
                </div>
                <button className={styles.ShowMoreButton}>
                    <span>
                        Посмотреть все

                    </span>
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.46875 11.9902L6.46875 6.99023L1.46875 1.99023" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </button>

            </div>


        </div>
    )
})


Rent.displayName = 'Rent';
