import styles from './Main.module.scss'
import { About } from './About/About'
import { Categories } from './Categories/Categories'
import { MainForm } from '../../entities/MainForm/ui/MainForm'
import { MainAdvertisingRent } from '../../widgets/MainAdvertisingRent/ui/MainAdvertisingRent'

import React, { FC } from 'react'
import { CatalogueState } from '../../../types/catalogue_data'
import { NewsState } from '../../../types/news_data'
import { MapSearch } from '../../widgets/mapSearch/ui/MapSearch'

 
export const Main: FC<{catalogue: CatalogueState, news: NewsState }> = ({ catalogue, news }) => 
        
    <main className={styles.main}>
        <div className={styles.main__lead}>
            <div className={styles.lead__content}>
                <h1 className={styles.lead__title}>
                    Sdaem.by - у нас живут <span className={styles.yellow}>ваши объявления</span>
                </h1>
                <MainForm />
            </div>
        </div>
        <Categories />
        <MainAdvertisingRent data={catalogue}/>

        <MapSearch />

        <About data={news}/>
    </main>
 