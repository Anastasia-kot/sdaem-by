import React, { FC, useState, useEffect } from 'react'
import styles from './Catalogue.module.scss'

import { MapBlock } from '../../../entities/MapBlock/MapBlock'

import { CatalogueState } from '../../../../types/catalogue_data'
import { FiltersPayloadType } from '../../../../types/filter_data'
import { ViewModeForm } from '../../../features/viewModeForm/ui/ViewModeForm'
import { CatalogueList } from '../../../widgets/catalogueList/ui/CatalogueList'
import { Socials_sharing } from '../../../shared/ui/Socials_sharing/Socials_sharing'
import { CatalogueForm } from '../../../widgets/catalogueForm/ui/CatalogueForm'
import { SetRecommendationTip } from '../../../features/setRecomendotionTip/ui/SetRecomendationTip'
import { Breadcrumbs } from '../../../entities/Breadcrumbs/Breadcrumbs'
import { useRouter } from 'next/router'
import { CategoriesEnum } from '../../../../types/formTypes'
import { getTitle } from '../lib/helpers'
 


export const Catalogue: FC<{ data: CatalogueState }> = ({data}) => {

    const [filters, setFilters] = useState<FiltersPayloadType>({})


    // setFilters from URL
    const router = useRouter();
    const { query } = router;
    console.log(query)
    useEffect(() => {
        if (Object.keys(query).length > 0) {
            setFilters({ ...query })
        } else {
            setFilters({})
        }
    }, [query])



    //title from query
    const [title, setTitle] = useState<string>('Аренда квартир на сутки в Минске')
    useEffect (() => {
        if (Object.keys(query).length > 0) {
            setTitle(getTitle(query))
        } else {
            setTitle('Аренда квартир на сутки')
        }
    }, [query])



    // visual style 
    const [isListCatalogue, setIsListCatalogue] = useState(false as boolean);


    return (
        <main className={styles.main}>
            
        
            <div className={styles.filters}>

                <div className={styles.filters__heading}>
                    <Breadcrumbs breadcrumbs={[{ name: '', value: 'Квартиры в Минске' }]} />
                    <h1 className={styles.heading__title}>{title}</h1>
                    <SetRecommendationTip />
                </div>
                <CatalogueForm />

            </div>

            {/* <Filters setFilters={setFilters} /> */}



            <div className={styles.objects}>
                <ViewModeForm isListCatalogue={isListCatalogue} setIsListCatalogue={setIsListCatalogue} />

                <div className={styles.objects__items}>
                    <CatalogueList data={data} filters={filters} isListCatalogue={isListCatalogue} />
                    <div className={styles.items__socials}>
                        <Socials_sharing color='gray' />
                    </div>
                </div>
            </div>
            
            
            <MapBlock
                title={'Показать найденные квартиры на карте'}
                description={'Ищите новостройки рядом с работой, парком или родственниками'}
                descriptionWidth={350}
                isDotes={false}
                buttonText={'Открыть карту'}
                minHeight={310}/>
        </main>
    )
}
