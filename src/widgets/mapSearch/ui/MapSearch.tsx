import Image, { StaticImageData } from 'next/image'
import styles from './MapSearch.module.scss'
import React, { FC } from 'react'
import { PreferenceCard } from '../../../entities/PreferenceCard/ui/PreferenceCard'
import { MapBlock } from '../../../entities/MapBlock/MapBlock'

import dotes from './../../../../public/images/svg/dotes.svg'
import { prefCards } from '../model/store'



export const MapSearch: FC = () => {

    return (
        <div className={styles.map_search}>
            <MapBlock
                title={'Поиск квартир на карте'}
                description={'Ищите квартиры на сутки в центре города, возле парка или в живописном районе'}
                descriptionWidth={390}
                isDotes={true}
                buttonText={'Открыть карту'}
                minHeight={440}
            >
             </ MapBlock>

      

            <div className={styles.map_search__preference_list}>
                {prefCards.map((item, index) => <PreferenceCard key={index} data={item}  />)}
            </div>
            
            <Image src={dotes} alt="dotes" className={styles.map_search__dotes} />



        </div>
    )
}
