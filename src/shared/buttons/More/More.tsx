import Image from 'next/image'
import styles from './More.module.scss'
 
type Props = {
    totalCount: number
    currentPage: number
}
export const MoreButton = ({}) => {
    




    return (
        <button className={styles.Button}>Подробнее</button>

    )
}
