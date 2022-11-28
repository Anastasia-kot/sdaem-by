import Image from 'next/image'
import styles from './Pagination.module.scss'
 
type Props = {
    totalCount: number
    currentPage: number
}
export const Pagination = ({ totalCount, currentPage }) => {
    let arr: Array<number> = [];
    for (let i = 1; i <= totalCount; i++) {
        arr.push(i) 
    }




    return (
        <nav>
            <ol className={styles.Pagination}>

                {arr.map(a => <li key={arr.indexOf(a)} className={a === currentPage ?styles.active: ''}>{a}</li>)}
           
            </ol>
        </nav>
    )
}
