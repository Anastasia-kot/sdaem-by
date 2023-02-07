import Image, { StaticImageData } from 'next/image'
import styles from './MapSearch.module.scss'
import React, { FC } from 'react'
import { PreferenceCard } from '../../../entities/PreferenceCard/ui/PreferenceCard'
import { MapBlock } from '../../../entities/MapBlock/MapBlock'

import dotes from './../../../../public/images/svg/dotes.svg'
import { mapProps, prefCards } from '../model/store'



export const MapSearch: FC = () => {

    return (
        <div className={styles.map_search}>

            <MapBlock {...mapProps}/>
            
            <div className={styles.map_search__preference_list}>
                {prefCards.map((item, index) => <PreferenceCard key={index} data={item}  />)}
            </div>
            
            <Image src={dotes} alt="dotes" className={styles.map_search__dotes} />

        </div>
    )
}
