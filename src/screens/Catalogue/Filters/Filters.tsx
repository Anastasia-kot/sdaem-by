// import Image from 'next/image'
import styles from './Filters.module.scss'
import React, { useState } from 'react'
import { Breadcrumbs } from '../../../entities/Breadcrumbs/Breadcrumbs'
import classNames from 'classnames'
import { SelectBlock } from '../../../shared/Select/Select'
import { InputBlock } from '../../../shared/Input/Input'
import { useForm } from 'react-hook-form'
import { CatalogueFiltersFormType } from '../../../../types/formTypes'
import { MoreOptionsModal } from '../../../entities/MoreOptionsModal/MoreOptionsModal'
import { useDispatch, useSelector } from 'react-redux'
import { resetFilters, setFilters } from '../../../store/filtersSlice'
import { RootState } from '../../../store/store'

export const Filters = React.memo(() => {

    const dispatch = useDispatch();
    const filters = useSelector((state: RootState) => state.filter)
    console.log('filters', filters)

    const FiltersRecommendationsList = [
        {
            name: 'cheap',
            value: 'Недорогие',
            filter: {
                priceMax: 100,
            }
        },
        {
            name: '1room',
            value: '1-комнатные',
            filter: {
                rooms: 1,
            }

        },
 
        {
            name: '2room',
            value: '2-комнатные',
            filter: {
                rooms: 2,
            }
        },
 
        {
            name: '3room',
            value: '3-комнатные',
            filter: {
                rooms: 3,
            }
        },
 
        {
            name: '4room',
            value: '4-комнатные',
            filter: {
                rooms: 4,
            }
        },
 
        {
            name: '5room',
            value: '5-комнатные',
            filter: {
                rooms: 5,
            }
        },
 
        {
            name: 'factory_district',
            value: 'Заводской р.',
            filter: {
                district: 'factory',
            }
        },
 
 
        {
            name: 'lenin_district',
            value: 'Ленинский р.',
            filter: {
                district: 'lenin',
            }
        },
 
 
        {
            name: 'moscow_district',
            value: 'Московский р.',
            filter: {
                district: 'moscow',
            }
        },
 
 
        {
            name: 'october_district',
            value: 'Октябрьский р.',
            filter: {
                district: 'october',
            }
        },
        {
            name: 'partizan_district',
            value: 'Партизанский р.',
            filter: {
                district: 'partizan',
            }
        },
        {
            name: '1may_district',
            value: 'Первомайский р.',
            filter: {
                district: '1may',
            }
        },
  
        {
            name: 'soviet_district',
            value: 'Советский р.',
            filter: {
                district: 'soviet',
            }
        },
  
        {
            name: 'frunze_district',
            value: 'Фрунзенский р.',
            filter: {
                district: 'frunze',
            }
        },
  
        {
            name: 'center_district',
            value: 'Центральный р.',
            filter: {
                district: 'center',
            }
        },        
    ]
    const [isFiltersRecommendations, setIsFiltersRecommendations] = useState<null | string>(null)
 

    const [isMoreOptions, setIsMoreOptions] = useState(false)

 


    //for form
    const { handleSubmit, register, formState: { errors } } = useForm<CatalogueFiltersFormType>();
    const onSubmit = values => {
        let formatValues = values;
        console.log('values', values)
        for (let key in formatValues) {
            

            if (!Number.isNaN(+formatValues[key])  &&
                typeof formatValues[key] !== 'boolean') {
                formatValues[key] = +formatValues[key]
            }
        } 
        console.log('formatValues', formatValues);
        dispatch(setFilters(formatValues)) 
    }

    return (
        <div className={styles.FiltersBlock}>
            <div className={styles.FiltersRecommendationsBlock}>
                <Breadcrumbs breadcrumbs={[{name: '', value: 'Квартиры в Минске'}]} />
                <h1>Аренда квартир на сутки в Минске</h1>
                <div className={styles.FiltersRecommendations}>
                    <h2 className={styles.FiltersRecommendationsTitle}>Рекомендуем посмотреть</h2>
                    <ul className={styles.FiltersRecommendationsList}>
                        {FiltersRecommendationsList.map(i => isFiltersRecommendations 
                            ? <> {isFiltersRecommendations===i.name && 

                                <li
                                    key={FiltersRecommendationsList.indexOf(i)+10}
                                    id={i.name}
                                    >
                                    {i.value}
                                    <svg 
                                        onClick={() => {
                                            dispatch(resetFilters())
                                            setIsFiltersRecommendations(null)
                                        }}
                                        className={styles.CursorPointer}
                                        width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.91628 5.00007L9.81017 1.10608C10.0636 0.852787 10.0636 0.443255 9.81017 0.189966C9.55688 -0.0633221 9.14735 -0.0633221 8.89406 0.189966L5.00005 4.08396L1.10617 0.189966C0.852759 -0.0633221 0.443344 -0.0633221 0.190056 0.189966C-0.0633519 0.443255 -0.0633519 0.852787 0.190056 1.10608L4.08394 5.00007L0.190056 8.89407C-0.0633519 9.14736 -0.0633519 9.55689 0.190056 9.81018C0.316285 9.93653 0.482257 10 0.648111 10C0.813965 10 0.979819 9.93653 1.10617 9.81018L5.00005 5.91618L8.89406 9.81018C9.0204 9.93653 9.18626 10 9.35211 10C9.51797 10 9.68382 9.93653 9.81017 9.81018C10.0636 9.55689 10.0636 9.14736 9.81017 8.89407L5.91628 5.00007Z" fill="#664EF9" />
                                    </svg>

                                </li>}
                        </> 
                            : <li
                                key={FiltersRecommendationsList.indexOf(i)}
                                id={i.name}
                                onClick={() => {
                                    setIsFiltersRecommendations(i.name)
                                    dispatch(resetFilters());
                                    dispatch(setFilters(i.filter))

                                }}>
                                <span className={styles.CursorPointer}> {i.value}</span>
                               
                            </li>
                           )} 
                    </ul>

                </div>
            </div>

            <div className={styles.FiltersCategoriesBlock}>
                        {/* // form validation */}

                <form onSubmit={handleSubmit(onSubmit)}> 
                    {isMoreOptions && 
                    <div className={styles.MoreOptionsModalWrapper}> 
                        <MoreOptionsModal register={register} /> 
                    </div>}

                        <div className={styles.MainFiltersBlock}>
                        <div className={styles.RoomsBlockLabel}>
                            <SelectBlock
                                labelRus={'Комнаты'}
                                flexDirection={'row'}
                                options={[
                                    'Выберите',
                                    '1 комн.',
                                    '2 комн.',
                                    '3 комн.',
                                    '4 комн.',
                                    '5 комн.',

                                ]}
                                width={150}
                                height={37}

                                label={'rooms'}
                                register={register}
                                required={false}
                            />
                        </div>



                        <legend className={styles.PriceBlockLabel}>
                            <span>
                                Цена за сутки (BYN)
                            </span>
                            <div className={styles.InputsBlock}>

                                
                                <InputBlock
                                    type={'number'}
                                    labelRus={null}
                                    placeholder={'От'}
                                    flexDirection={null}
                                    width={100}
                                    height={37}
                                    imageSrc={null}


                                    label={'priceMin'}
                                    register={register}
                                    pattern={/^[0-9]{1,20}$/i}
                                    required={false}
                                />

                                <InputBlock
                                    type={'number'}
                                    labelRus={null}
                                    placeholder={'До'}
                                    flexDirection={null}
                                    width={100}
                                    height={37}
                                    imageSrc={null}

                                    label={'priceMax'}
                                    register={register}
                                    pattern={/^[0-9]{1,20}$/i}
                                    required={false}
                                />

                            </div>
                        </legend>

                        <div
                            className={classNames(
                                styles.MoreOptionsBlock,
                                { [styles.Active]: isMoreOptions },
                            )}

                        >

                            <button onClick={() => setIsMoreOptions(actual => { return (!actual) })}>
                                <span>
                                    Больше опций
                                </span>

                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.91109 4.29814C5.91109 2.90551 4.937 1.73697 3.63453 1.4358V0.661897C3.63453 0.296309 3.33822 0 2.97264 0C2.60705 0 2.31074 0.296309 2.31074 0.661897V1.4358C1.00835 1.73689 0.0341797 2.90551 0.0341797 4.29814C0.0341797 5.69077 1.00827 6.85931 2.31074 7.16048V17.3381C2.31074 17.7037 2.60705 18 2.97264 18C3.33822 18 3.63453 17.7037 3.63453 17.3381V7.16048C4.937 6.85931 5.91109 5.69077 5.91109 4.29814ZM1.35805 4.29814C1.35805 3.40781 2.08238 2.68348 2.97271 2.68348C3.86303 2.68348 4.58737 3.40781 4.58737 4.29814C4.58737 5.18846 3.86303 5.9128 2.97271 5.9128C2.08238 5.9128 1.35805 5.18846 1.35805 4.29814Z" fill="#664EF9" />
                                    <path d="M8.66188 8.89222V0.661897C8.66188 0.296309 8.36557 0 7.99998 0C7.63439 0 7.33808 0.296309 7.33808 0.661897V8.89222C6.03569 9.19331 5.06152 10.3619 5.06152 11.7546C5.06152 13.1472 6.03562 14.3157 7.33808 14.6169V17.3381C7.33808 17.7037 7.63439 18 7.99998 18C8.36557 18 8.66188 17.7037 8.66188 17.3381V14.6169C9.96427 14.3158 10.9384 13.1472 10.9384 11.7546C10.9384 10.3619 9.96434 9.19338 8.66188 8.89222ZM6.38539 11.7546C6.38539 10.8642 7.10973 10.1399 8.00005 10.1399C8.89038 10.1399 9.61471 10.8642 9.61471 11.7546C9.61471 12.6449 8.89038 13.3692 8.00005 13.3692C7.10973 13.3692 6.38539 12.6449 6.38539 11.7546Z" fill="#664EF9" />
                                    <path d="M15.9658 7.20151C15.9658 5.80888 14.9917 4.64034 13.6892 4.33918V0.661897C13.6892 0.296309 13.3929 0 13.0273 0C12.6617 0 12.3654 0.296309 12.3654 0.661897V4.33918C11.063 4.64027 10.0889 5.80888 10.0889 7.20151C10.0889 8.59415 11.063 9.76269 12.3654 10.0639V17.3381C12.3654 17.7037 12.6617 18 13.0273 18C13.3929 18 13.6892 17.7037 13.6892 17.3381V10.0639C14.9917 9.76269 15.9658 8.59415 15.9658 7.20151ZM11.4127 7.20151C11.4127 6.31119 12.1371 5.58685 13.0274 5.58685C13.9177 5.58685 14.6421 6.31119 14.6421 7.20151C14.6421 8.09184 13.9177 8.81618 13.0274 8.81618C12.1371 8.81618 11.4127 8.09184 11.4127 7.20151Z" fill="#664EF9" />
                                </svg>

                            </button>

                        </div>

                        <div className={styles.ToClear}>
                            <button type="reset">
                                <span>
                                    Очистить
                                </span>
                            </button>
                        </div>

                        <div className={styles.ToShow}>
                            <button>
                                <span>
                                    Показать объекты
                                </span>
                                <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.125 11.25L5.875 6.5L1.125 1.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>


                            </button>
                        </div>

                </div>
                  
                </form>

            </div>
          

             </div>


    )
})


Filters.displayName = 'Filters';
