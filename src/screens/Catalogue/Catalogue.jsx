import Image from 'next/image'
import { Filters } from './Filters/Filters'
import styles from './Catalogue.module.scss'
import { Mapsearch } from './Mapsearch/Mapsearch'
import { Objects } from './Objects/Objects.tsx'


export const Catalogue = () => {


    return (
        <main className={styles.Main}>
            <Filters />
            <Objects />
            <Mapsearch />
         </main>
    )
}
