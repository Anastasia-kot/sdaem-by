import React, { FC, useState } from 'react'
import styles from './Catalogue.module.scss'

import { Filters } from './Filters/Filters'
import { Objects } from './Objects/Objects'
import { MapBlock } from '../../entities/MapBlock/MapBlock'

import { CatalogueState } from '../../../types/catalogue_data'
import { FiltersPayloadType } from '../../../types/filter_data'
 


type Props = {
    data: CatalogueState
}


export const Catalogue: FC<Props> = ({data}) => {

    const [filters, setFilters] = useState<FiltersPayloadType>({})


    return (
        <main className={styles.Main}>
            <Filters setFilters={setFilters} />
            <Objects data={data} filters={filters} />
            <MapBlock
                title={'Показать найденные квартиры на карте'}
                description={'Ищите новостройки рядом с работой, парком или родственниками'}
                descriptionWidth={350}
                isDotes={false}
                buttonText={'Открыть карту'}
                minHeight={310}
            >
            </ MapBlock>
        </main>
    )
}
