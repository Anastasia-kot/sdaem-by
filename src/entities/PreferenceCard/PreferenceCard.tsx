import Image from 'next/image'
import styles from './PreferenceCard.module.scss'

type Props = { 
    logo: string, 
    header: string,
    description: string | Array<string>,
    button: string,
    isGold: boolean,
    goldBackground: string
 }

export const PreferenceCard = ({logo, header, description, button, isGold, goldBackground}) => {
    return (
        <div className={styles.Card}>
            {isGold && <img src={goldBackground} alt="" width={100} height={100}/>}
             
             <div className={styles.CardHeader}>
                {!isGold && <img src={logo} alt="" width={100} height={100} />}
                <h1 className={styles.CardHeader}>
                    {header}
                </h1>
                </div>
                <p className={styles.CardDescription}>
                {typeof (description) === 'string' 
                    ? description
                    : description.map(d=> <p key={description.indexOf(d)}>d</p>)
                }
                              
                </p>
            <button>{button}</button>


           
        </div>
    )
}
