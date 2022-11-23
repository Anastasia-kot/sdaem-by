import Image from 'next/image'
import styles from './CategoryCard.module.scss'
const room = require('../../assets/images/room.png');

type Props = {
    header: string,
    additional_header: string,
    hashtags?: Array<string>,
    background: string
    arrow_button: boolean
}
export const CategoryCard = ({ header, additional_header, hashtags, background, arrow_button }: Props) => {
    return (
        <div className={styles.Card}>
            <Image src={background} alt="background" />
            <div className={styles.CardContent}>
                <h2> {additional_header}</h2>
                <h1> {header}</h1>
                <ul>
                    {hashtags && hashtags.length > 0 && hashtags.map(h => <li key={hashtags.indexOf(h)}>{h}</li>)}
                </ul>
                {arrow_button &&
                    <button>
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 14.2852L7.57143 7.71373L0.999999 1.1423" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>


                }


            </div>
        </div>
    )
}
