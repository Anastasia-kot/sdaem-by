import classNames from 'classnames'
import Image from 'next/image'
import React, { FC } from 'react';
import { useWindowDimensions } from '../../../helpers/useWindowDimensions.js';
import styles from './PreferenceCard.module.scss'
import arrow from'../../../public/images/svg/arrow_right.svg';
import arrow_white from'../../../public/images/svg/arrow_right_white.svg';




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

export const PreferenceCard: FC<Props> = ({ data }) => {


    //делим строки на массив подстрок, где 1, 3, 5... нежирные, а 2, 4, 6... жирные
    // 1. найти места разреза и сепараторы
    // 2. разрезать на массив строк  (нечетные будут жирными )

    let description = data.description;
    let lastStr: string;

    let text = []
    let descriptionStringArr: Array<string>;

    let currIndex: number;
    let newElements: Array<string>;

    for (let i = 0; i < description.text.length; i++) { // перебираем каждый абзац


        lastStr = description.text?.[i];  // инициализационное значение 
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
        <div className={classNames(     styles.card, { [styles.isGold]: data.isGold }  )} >
            
            
            <div className={styles.card__header}>
                <div className={styles.header__logoWrapper}>
                    <Image src={data.logo} alt="logo" width={64} height={64} className={styles.header__logo} />
                </div>
                <h1 className={ styles.header__title }> {data.header}</h1>
            </div>


            <ul className={styles.card__description}>
                {text.map(d => <li key={text.indexOf(d)}>        {/*//абзац */}
                    {d.map(dd => <span  // спан
                        key={d.indexOf(dd)}
                        style={{ fontWeight: d.indexOf(dd) % 2 !== 0 ? 700 : 400 }}>{dd}</span>)}
                </li>)}
            </ul>


            <button className={styles.card__button}>
                {data.button.text}
                {data.button.image && 
                    data.isGold
                        ? <Image src={arrow_white} alt="arrow" />
                        : <Image src={arrow} alt="arrow" />               
                }
            </button>

        </div>
    )
}

