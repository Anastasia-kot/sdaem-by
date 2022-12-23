import Image from 'next/image'
import Link from 'next/link';
import { dateConverter } from '../../../helpers/dateConverters';
import styles from './NewsCard.module.scss'
const room = require('../../../public/images/room.png');

type Props = {
    data: {
        id: number
        image: string | null
        title: string
        shortDescription: string
        description: Array<string>
        date:  string // string as ISO Date
    }
}

export const NewsCard = (props: Props) => {

   const { id,  image, title, shortDescription, description,  date, } = props.data;

    return (
        <div className={styles.card}>
            {image
                ? <img src={image } alt="article image" className={styles.card__image} />
                : <Image src={room} alt="article image" className={styles.card__image} />
            }
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
