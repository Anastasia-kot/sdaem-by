import styles from './Filters.module.scss'
import React, { FC, useEffect, useState } from 'react'
import Image from "next/image";
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'

import { Breadcrumbs } from '../../../entities/Breadcrumbs/Breadcrumbs'
import { SelectBlock } from '../../../shared/ui/Select_block/Select_block'
import { InputBlock } from '../../../shared/ui/Input/Input'
import { FilterItem } from '../../../shared/ui/buttons/Filter/Filter'
import { MoreOptionsModal } from '../../../entities/MoreOptionsModal/MoreOptionsModal'

import { FiltersPayloadType } from '../../../../types/filter_data'
import { CatalogueFiltersFormType, CategoriesEnum, districtsList } from '../../../../types/formTypes'
import { filtersToUrlString, formValuesFormatter } from '../../../shared/helpers/urlHelpers'
import {  districtNameEngToRus } from '../../../shared/helpers/nameConverters'
import more_options from './../../../../public/images/svg/more_options.svg'
import arrow from './../../../../public/images/svg/arrow_right_white.svg'


type Props = {
    setFilters: (args) => void
} 

export const Filters: FC<Props> = ({setFilters}) => {
    //base data
    type FiltersRecommendationsListTipe = {
        value: string
        filter: FiltersPayloadType
    }[]

    const filtersRecommendationsList: FiltersRecommendationsListTipe = [

            {
                value: 'Недорогие',
                filter: {
                    priceMax: 100,
                }
            },
            ...[1, 2, 3, 4, 5].map(n => ({
                value: n + '-комнатные',
                filter: {
                    rooms: n,
                }
            })),
            ...districtsList.map(d => ({
                value: districtNameEngToRus(d),
                filter: {
                    district: d,
                }
            }))
    ]




    // use router
    const router = useRouter();
    const { query } = router;
    console.log(query)
    useEffect(() => {
        if (Object.keys(query).length > 0) {
            console.log(query)
            setFilters({ ...query })

        } else {
            setFilters({ })
        }
    }, [query])

    const setUrlFilters = (filter: FiltersPayloadType): void => {
        let searchString =  filtersToUrlString(filter)
        router.push(`/catalogue${searchString}`, undefined, { shallow: true })
    }






 




    //title from query

    const [title, setTitle] = useState<string>('Аренда квартир на сутки в Минске')
    useEffect(() => {
        if (Object.keys(query).length > 0) {
            let title = 'Аренда'
            query.rooms && (title = title + ' ' + query.rooms + '-комнатных') 
            query.category && typeof (query.category) === 'string'
                ? title = title + ' ' + CategoriesEnum[query.category]
                : title = title +  ' квартир'
            title = title + ' на сутки'
            query.city && typeof (query.city) === 'string'
                ? (
                    title = title + ' в ' + query.city
                    // title = title + ' в ' + cityNameConverters(cityNameEngToRus(query.city))
                    ) 
                : title = title + ' в Минске'
            setTitle(title)
         } else {
            setTitle('Аренда квартир на сутки')
        }
    }, [query])







    // recommendations__list
    const [isFiltersRecommendations, setIsFiltersRecommendations] = useState <null | number> (null)

    const onClick = (element, index) => {
        setUrlFilters(element.filter);
        setIsFiltersRecommendations(index);
    }

    const onReset = () => {
        setUrlFilters({})
        setIsFiltersRecommendations(null);
    }








    //for form
    const [isMoreOptions, setIsMoreOptions] = useState<boolean>(false)

    const { handleSubmit, register, formState: { errors } } = useForm<CatalogueFiltersFormType>();

    const onSubmit = values => {
        setUrlFilters(formValuesFormatter(values))
    }

    const FiltersInput = (props) => {

        return <InputBlock
            type={'number'}
            labelRus={null}
            flexDirection={null}
            width={100}
            height={37}
            imageSrc={null}
            register={register}
            pattern={/^[0-9]{1,20}$/i}
            required={false}
            {...props} />
    }



    return (
        <div className={styles.filters}>

            <div className={styles.filters__heading}>
                <Breadcrumbs breadcrumbs={[{ name: '', value: 'Квартиры в Минске'  }]} />
                <h1 className={styles.heading__title}>{title}</h1>
                <div className={styles.heading__recommendations}>
                    {isFiltersRecommendations === null &&<h2 className={styles.recommendations__title}>Рекомендуем посмотреть</h2>}
                    <ul className={styles.recommendations__list}>
                        {filtersRecommendationsList.map(i => isFiltersRecommendations !== null
                            ? isFiltersRecommendations === filtersRecommendationsList.indexOf(i) &&
                            <FilterItem
                                key={filtersRecommendationsList.indexOf(i)}
                                value={i.value}
                                isFiltersRecommendations={isFiltersRecommendations === filtersRecommendationsList.indexOf(i)}
                                onClick={() => { onClick(i, filtersRecommendationsList.indexOf(i) ) }}
                                onReset={() => { onReset() }}
                            />
                            : <FilterItem
                                key={filtersRecommendationsList.indexOf(i)}
                                value={i.value}
                                isFiltersRecommendations={isFiltersRecommendations === filtersRecommendationsList.indexOf(i)}
                                onClick={() => { onClick(i, filtersRecommendationsList.indexOf(i)) }}
                                onReset={() => { onReset() }}
                            />

                        )}
                    </ul>

                </div>
            </div>



            <form onSubmit={handleSubmit(onSubmit)} className={styles.filters__form}>

                <div className={styles.form__filters}>
                    <div className={styles.RoomsBlockLabel}>
                        <SelectBlock
                            options={[
                                { text: 'Выберите', value: -1 },
                                ...[1, 2, 3, 4, 5].map(i => ({ text: i + ' комн.', value: i }))
                            ]}
                            label={'rooms'}
                            register={register}
                            required={false}



                            style={{
                                width: '150px',
                                height: '37px',
                            }}
                            labelRus={{ label: 'Комнаты', flexDirection: 'row' }}
                        />
                    </div>

                    <legend className={styles.PriceBlockLabel}>
                        <span>
                            Цена за сутки (BYN)
                        </span>
                        <div className={styles.InputsBlock}>


                            <FiltersInput
                                placeholder={'От'}
                                label={'priceMin'}
                            />

                            <FiltersInput
                                placeholder={'До'}
                                label={'priceMax'}
                            />

                        </div>
                    </legend>

                    <div
                        className={classNames(
                            styles.MoreOptionsBlock,
                            { [styles.Active]: isMoreOptions },
                        )}  >

                        <button onClick={() => setIsMoreOptions(actual => { return (!actual) })}>
                            Больше опций
                            <Image src={more_options} alt='more_options'/>
                        </button>

                    </div>

                    <div className={styles.ToClear}>
                        <button type="reset">
                            Очистить
                        </button>
                    </div>

                    <div className={styles.ToShow}>
                        <button>
                            Показать объекты
                            <Image src={arrow} alt='arrow' />
                        </button>
                    </div>

                </div>


                <div className={styles.form__modal}>
                    <MoreOptionsModal
                        register={register}
                        style={{
                            display: isMoreOptions ? 'block' : 'none',
                        }} />
                </div>

            </form>

        </div>
    )
}