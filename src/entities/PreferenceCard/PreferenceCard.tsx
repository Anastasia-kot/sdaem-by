import Image from 'next/image'
import styles from './PreferenceCard.module.scss'


type Props = { 
    logo: string, 
    header: string,
    description: Array<string>,
    button: string,
    isGold: boolean,
    goldBackground: string
 }

export const PreferenceCard = ({logo, header, description, button, isGold, goldBackground}) => {
    return (
        <div className={styles.Card}>
            {isGold && <img src={goldBackground} alt="" width={100} height={100} className={styles.goldBackground} />}
             
             <div className={styles.CardHeader}>
                {!isGold && <img src={logo} alt="" width={100} height={100} className={styles.cardLogo} />}
                <h1  className={isGold ? styles.CardHeaderTextGold : styles.CardHeaderText}>
                    {header}
                </h1>
                </div>
                <ul className={styles.CardDescription}>
                 { description.map(d=> <li key={description.indexOf(d)}>{d}</li>) }           
                </ul>
            <button
                className={isGold ? styles.ButtonGold : styles.Button}
            >{button}</button>


           
        </div>
    )
}
