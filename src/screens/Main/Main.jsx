import Image from 'next/image'
import { About } from './About/About'
import { Categories } from './Categories/Categories'
import { Heading } from './Heading/Heading'
import styles from './Main.module.scss'
import { Mapsearch } from './Mapsearch/Mapsearch'
import { Rent } from './Rent/Rent'


export const Main = () => {


    return (
        <main className={styles.Main}>
            <Heading />
            <Categories />
            <Rent />
            <Mapsearch />
            <About />
        </main>
    )
}
