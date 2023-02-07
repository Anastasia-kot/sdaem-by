import React, { FC } from 'react'
import styles from './Filter.module.scss'
import cross from './../../../../public/images/svg/cross.svg'
import Image from 'next/image'

type Props = {
    key: number
    value: string
    isFiltersRecommendations: boolean
    onClick: ()=> void
    onReset: ()=> void
}

export const FilterItem: FC<Props> = ( 
    { value, isFiltersRecommendations, onClick, onReset }: Props
    ) =>  <li className={ styles.list__item}
        onClick={isFiltersRecommendations ? null: onClick}>
        
        <span className={isFiltersRecommendations ? '' : styles.CursorPointer}>{value}</span>
     

        {isFiltersRecommendations && 
            <Image src={cross} alt='cross' onClick={onReset} className={styles.CursorPointer} />}
    </li>

 