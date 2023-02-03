import styles from './Main.module.scss'
import { About } from './About/About'
import { Categories } from './Categories/Categories'
import { Heading } from './Heading/Heading'
import { Mapsearch } from './Mapsearch/Mapsearch'
import { Rent } from './Rent/Rent'
import React, { FC } from 'react'
import { CatalogueType } from '../../store/catalogueSlice'

type Props = {
    data: {
        items: CatalogueType[] | null
        totalCount: number | null,
    }
}
export const Main: FC<Props> = React.memo(({data}) => {
    return (
        <main className={styles.Main}>
            <Heading />
            <Categories />
            <Rent data={data}/>
            <Mapsearch />
            <About />
        </main>
    )
})

Main.displayName = 'Main';
