import Image from 'next/image'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { CategoryType } from '../../../types/formTypes';
import { setFilters } from '../../store/filtersSlice';
import styles from './CategoryCard.module.scss'
const room = require('../../assets/images/room.png');

type Props = {
    filter: { category: CategoryType }
    header: string,
    additional_header: string,
    hashtags?: Array<string>,
    background: string
    arrow_button: boolean
}
export const CategoryCard = ({ filter, header, additional_header, hashtags, background, arrow_button }: Props) => {
    const dispatch = useDispatch();
    const router = useRouter();
 
    const onClick = (props: { category: string, city?: string }) => {
        dispatch(setFilters(props))
        setTimeout(() => {
            router.push('/catalogue')
        },
            3000
        )
    }

    return (
        <div className={styles.Card}>
            <Image src={background} alt="background" className={styles.Image}/>
            <div className={styles.CardContent}>
                <h2 onClick={() => onClick(filter)}> {additional_header}</h2>
                <h1 onClick={() => onClick(filter)}> {header}</h1>
                <ul className={styles.HashtagList}>
                    {hashtags && hashtags.length > 0 && 
                        hashtags.map(h => 
                            <li 
                                onClick={() => onClick({ ...filter, city: h })}
                                key={hashtags.indexOf(h)} 
                                className={styles.HashtagItem}>{h}
                            </li>)}
                </ul>

                {arrow_button &&
                    <button>
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 14.2852L7.57143 7.71373L0.999999 1.1423" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                }


            </div>
        </div>
    )
}
