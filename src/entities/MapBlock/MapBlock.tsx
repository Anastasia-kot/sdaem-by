import Image from 'next/image';
import React, { FC } from 'react';
import styles from './MapBlock.module.scss'
import navIcon from './../../../public/images/svg//navigation_icon.svg'
import dotes from './../../../public/images/svg/dotes.svg'


 
type Props = {
    title: string
    description: string
    descriptionWidth: number
    isDotes: boolean
    buttonText: string
    children: any  // svg in button
    minHeight: number


}

export const MapBlock: FC<Props> = ({ 
    title,
    description,
    descriptionWidth,
    isDotes,
    buttonText,
    children,
    minHeight
 }) => {
    return (
        <div 
        className={styles.map}
        style={{
            minHeight: minHeight,
            height: minHeight
        }}>
            {isDotes && 
                <div className={styles.map__dotes}>
                    <Image src={dotes} alt="dotes" />
                </div>}

            <h2 className={styles.map__title}>{title}</h2>
            <p className={styles.map__description} style={{ maxWidth: `${descriptionWidth}px` }}>{description}</p>
            <button className={styles.map__button}>
                <Image src={navIcon} alt='navIcon' /> 
                {buttonText}
            </button>

        </div>
    )
}


