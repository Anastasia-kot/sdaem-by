import classNames from 'classnames'
import Image from 'next/image'
import {useWindowDimensions} from '../../../helpers/useWindowDimensions.js';
import styles from './PreferenceCard.module.scss'
const arrow = require('../../../public/images/svg/arrow_right.svg' );


 

type Props = {
    data: {
        logo: string,
        header: string,
        description: {
            text: Array<string>
            bold: Array<string>
        },
        button: {

            text: string
            image: boolean
 
        },
        isGold: boolean,
    }

}

export const PreferenceCard = ({ data }: Props) => {



// 1. найти места разреза и сепараторы
// 2. разрезать на массив строк  (нечетные будут жирными )

let description = data.description;  // console.log(description);
let lastStr: string;

let text = []
let descriptionStringArr: Array<string>;

let currIndex: number;
let newElements: Array<string>; 

    for (let i = 0; i < description.text.length; i++) { // перебираем каждый абзац
        

                    lastStr  = description.text?.[i];  // инициализационное значение 
                    descriptionStringArr = [lastStr];  // инициализационное значение 


                    for (let i = 0; i < description.bold.length; i++) {
                        // console.log('i', i)
                        // debugger
                        currIndex = lastStr.indexOf(description.bold[i])

                        if (currIndex > -1) {

                            newElements = [
                                lastStr.slice(0, currIndex),
                                lastStr.slice(currIndex, currIndex + description.bold[i].length),
                                lastStr.slice(currIndex + description.bold[i].length),
                            ];

                            (descriptionStringArr.pop());
                            descriptionStringArr = [...descriptionStringArr, ...newElements]
                            lastStr = descriptionStringArr[descriptionStringArr.length - 1]
                        }
                        // debugger

                    }


                    text[i] = descriptionStringArr;
    }



 



    return (
        <div className={classNames(
            styles.card,
            { [styles.isGold]: data.isGold },

        )} >


            <div className={styles.card__header}>
                {!data.isGold && <div className={styles.header__logoWrapper}>
                    <Image src={data.logo} alt="logo" width={64} height={64} className={styles.cardLogo} />
                </div>}
                <h1 className={data.isGold ? styles.CardHeaderTextGold : styles.CardHeaderText}>
                    {data.header}
                </h1>
            </div>

            <ul className={styles.CardDescription}>
                {text.map(d => <li key={text.indexOf(d)}>        {/*//абзац */}
                    {d.map(dd => <span  // спан
                        key={d.indexOf(dd)} 
                        style={{ fontWeight:  d.indexOf(dd)%2 !== 0 ? 700 : 400  }}>{dd}</span>)}
                </li>)}
            </ul>
            <button className={styles.button}>
                {data.button.text}
                {data.button.image && 
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 11.8027L6.5 6.80273L1.5 1.80273" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>}
                
            </button>



        </div>
    )
}
