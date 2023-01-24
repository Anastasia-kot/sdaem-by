import styles from './NewsCard.module.scss'
import Image from 'next/image'
import Link from 'next/link';
import { dateConverter } from '../../../helpers/dateConverters';
import { NewsType } from '../../store/newsSlice';
import React, { FC } from 'react';
const room = require('../../../public/images/room.png');

type Props = {
    data: NewsType
}

export const NewsCard: FC<Props> = React.memo(( { data }) => {

   const { id, image, title, shortDescription, date } = data;

    return (
        <div className={styles.card}>
            {image
                ? <img  src={image} alt="article image" className={styles.card__image} />
                : <Image src={room} alt="article image" className={styles.card__image} width={406} height={227}/>
            }
                <h3 className={styles.card__title}>{title}</h3>
                <p className={styles.card__description}>{shortDescription}</p>

                <div className={styles.card__footer}>
                    <span className={styles.footer__date}>{dateConverter(date)}</span>
                    <Link href={`/news/${id}`} className={styles.footer__button}> Читать </Link>
                </div>
               
        </div>
    )
})
NewsCard.displayName = 'NewsCard';
