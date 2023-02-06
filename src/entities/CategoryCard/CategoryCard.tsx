import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { cityNameEngToRus } from '../../../helpers/nameConverters';
import { filtersToUrlString } from '../../../helpers/urlHelpers';
import { CategoryType } from '../../../types/formTypes';
import { CityType } from '../../../types/formTypes';
import { setFilters } from '../../store/filtersSlice';
import styles from './CategoryCard.module.scss'
const room = require('../../../public/images/room.png');

type Props = {
    filter: { category: CategoryType }
    header: string,
    additional_header: string,
    hashtags?: Array<CityType>,
    background: StaticImageData
    arrow_button: boolean
}
export const CategoryCard: FC<Props> = React.memo( ({ filter, header, additional_header, hashtags, background, arrow_button }) => {
    // const dispatch = useDispatch();
    const router = useRouter();
 
    const onClick = (props: { category: CategoryType, city?: CityType }) => {
        let searchString = filtersToUrlString(props)
        router.push(`/catalogue${searchString}`)
    }

    return (
        <div className={styles.card}>
            <Image src={background} alt="background" className={styles.card__image}/>
            <div className={styles.card__content}>
                <p onClick={() => onClick(filter)} className={styles.content__subheader}> {additional_header}</p>
                <h1 onClick={() => onClick(filter)} className={styles.content__header}> {header}</h1>
                <ul className={styles.content__hashtaglist}>
                    {hashtags && hashtags.length > 0 && 
                        hashtags.map(h => 
                            <li 
                                onClick={() => onClick({ ...filter, city: h })}
                                key={hashtags.indexOf(h)} 
                                className={styles.hashtaglist__item}>{cityNameEngToRus(h)}
                            </li>)}
                </ul>

                {arrow_button && <button className={styles.button_style_arrow} onClick={() => onClick(filter)} /> }


            </div>
        </div>
    )
}
)
CategoryCard.displayName = 'CategoryCard';

