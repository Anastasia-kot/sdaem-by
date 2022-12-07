import Image from 'next/image'
import { Filters } from './Filters/Filters'
import styles from './Catalogue.module.scss'
import { Objects } from './Objects/Objects'
import { MapBlock } from '../../entities/MapBlock/MapBlock'
 



export const Catalogue = () => {


    return (
        <main className={styles.Main}>

            <Filters />

            <Objects />

            <MapBlock
                title={'Показать найденные квартиры на карте'}
                description={'Ищите новостройки рядом с работой, парком или родственниками'}
                dotes={false}
                buttonText={'Открыть карту'}
                minHeight={310}
            >
            </ MapBlock>

         </main>
    )
}
