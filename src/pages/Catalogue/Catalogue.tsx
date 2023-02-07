import React, { FC, useState } from 'react'
import styles from './Catalogue.module.scss'

import { Filters } from './Filters/Filters'
import { MapBlock } from '../../entities/MapBlock/MapBlock'

import { CatalogueState } from '../../../types/catalogue_data'
import { FiltersPayloadType } from '../../../types/filter_data'
import { ViewModeForm } from '../../features/viewModeForm/ui/ViewModeForm'
import { CatalogueList } from '../../widgets/catalogueList/ui/CatalogueList'
import { Socials_sharing } from '../../shared/ui/Socials_sharing/Socials_sharing'
 


export const Catalogue: FC<{ data: CatalogueState }> = ({data}) => {

    const [filters, setFilters] = useState<FiltersPayloadType>({})

    // visual style
    const [isListCatalogue, setIsListCatalogue] = useState(false as boolean);



    return (
        <main className={styles.main}>
            
            
            <Filters setFilters={setFilters} />



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
