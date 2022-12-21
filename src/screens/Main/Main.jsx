import styles from './Main.module.scss'
import { About } from './About/About.tsx'
import { Categories } from './Categories/Categories'
import { Heading } from './Heading/Heading.tsx'
import { Mapsearch } from './Mapsearch/Mapsearch'
import { Rent } from './Rent/Rent.tsx'


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
 