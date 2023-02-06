import styles from './Main.module.scss'
import { About } from './About/About'
import { Categories } from './Categories/Categories'
import { Heading } from './Heading/Heading'
import { Mapsearch } from './Mapsearch/Mapsearch'
import { Rent } from './Rent/Rent'
import React, { FC } from 'react'
import { CatalogueState } from '../../../types/catalogue_data'
import { NewsState } from '../../../types/news_data'


type Props = {
    catalogue: CatalogueState
    news: NewsState
}
export const Main: FC<Props> = ({ catalogue, news }) => {
    return (
        <main className={styles.Main}>
            <Heading />
            <Categories />
            <Rent data={catalogue}/>
            <Mapsearch />
            <About data={news}/>
        </main>
    )
}