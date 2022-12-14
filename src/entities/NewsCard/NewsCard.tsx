import Image from 'next/image'
import Link from 'next/link';
import { dateConverter } from '../../../helpers/dateConverters';
import styles from './NewsCard.module.scss'
const room = require('../../assets/images/room.png');

type Props = {
    id: number
    image: string | null
    title: string
    shortDescription: string
    description: Array<string>
    date: Date | string // string as ISO Date
}
export const NewsCard = ({
    id,
    image,
    title,
    shortDescription,
    description,  
    date,
}) => {
    return (
        <div className={styles.Card}>
            <Image src={image ? image : room} alt="" width={406} height={227} />
             <div className={styles.CardContent}>
                <h3>{title}</h3>
                <p>{shortDescription}</p>
                     <div className={styles.CardContentFooter}>
                    <span className={styles.Date}>{dateConverter(date)}</span>
                         <Link href={`/news/${id}`} className={styles.ReadButton}>
                            Читать
                        </Link>
                     </div>
               
            </div>
        </div>
    )
}
