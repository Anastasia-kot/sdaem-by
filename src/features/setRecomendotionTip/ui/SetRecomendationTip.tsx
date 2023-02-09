import styles from './SetRecomendationTip.module.scss'
import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FilterItem } from '../../../shared/ui/buttons/Filter/Filter'
import { recommendationTipList } from '../model'
import { setUrlFilters } from '../lib/helpers'



export const SetRecommendationTip: FC = ({ }) => {

    const router = useRouter();


    // recommendations__list
    const [isFiltersRecommendations, setIsFiltersRecommendations] = useState<null | number>(null)

    const onClick = (element, index) => {
        setUrlFilters(element.filter, router); //
        setIsFiltersRecommendations(index);
    }

     const onReset = () => {
        setUrlFilters({}, router)
        setIsFiltersRecommendations(null);
    }


return (
    <div className={styles.recommendations}>
        {isFiltersRecommendations === null && <h2 className={styles.recommendations__title}>Рекомендуем посмотреть</h2>}
        <ul className={styles.recommendations__list}>
            {recommendationTipList.map((i, index) => isFiltersRecommendations !== null
                ? isFiltersRecommendations === index &&
                <FilterItem key={index} value={i.value}
                    isFiltersRecommendations={isFiltersRecommendations === index}
                    onClick={() => { onClick(i, index) }}
                    onReset={onReset}
                />
                : <FilterItem key={index} value={i.value}
                    isFiltersRecommendations={isFiltersRecommendations === index}
                    onClick={() => { onClick(i, index) }}
                    onReset={ onReset}
                />

            )}
        </ul>

    </div>

)
}