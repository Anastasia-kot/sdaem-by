import { Filters } from './Filters/Filters'
import styles from './Catalogue.module.scss'
import { Objects } from './Objects/Objects'
import { MapBlock } from '../../entities/MapBlock/MapBlock'
import React, { FC } from 'react'
import { CatalogueType } from '../../store/catalogueSlice'
 

type Props = {
    data: {
        items: CatalogueType[] | null
        totalCount: number | null
    }
}

export const Catalogue: FC<Props> = React.memo(({data}) => {
    return (
        <main className={styles.Main}>
            <Filters />
            <Objects data={data}/>
            <MapBlock
                title={'Показать найденные квартиры на карте'}
                description={'Ищите новостройки рядом с работой, парком или родственниками'}
                descriptionWidth={350}
                dotes={false}
                buttonText={'Открыть карту'}
                minHeight={310}
            >
            </ MapBlock>
        </main>
    )
})

Catalogue.displayName = 'Catalogue';
