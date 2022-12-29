import classNames from 'classnames'
import Image from 'next/image'
import styles from './Filter.module.scss'
 

type ButtonType = 'button' | 'reset' | 'submit'

type Props = {
    key: number
    value: string
    isFiltersRecommendations: boolean
    onClick: ()=> void
    onReset: ()=> void

}
export const FilterItem = ( 
    { value, isFiltersRecommendations, onClick, onReset }: Props
    ) =>  <li className={isFiltersRecommendations ? styles.list__item__status_selected : styles.list__item}
        onClick={isFiltersRecommendations ? null: onClick}>
        
        <span className={isFiltersRecommendations ? '' : styles.CursorPointer}>{value}</span>

        {isFiltersRecommendations && 
            <svg
                onClick={onReset}
                className={styles.CursorPointer}
                width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.91628 5.00007L9.81017 1.10608C10.0636 0.852787 10.0636 0.443255 9.81017 0.189966C9.55688 -0.0633221 9.14735 -0.0633221 8.89406 0.189966L5.00005 4.08396L1.10617 0.189966C0.852759 -0.0633221 0.443344 -0.0633221 0.190056 0.189966C-0.0633519 0.443255 -0.0633519 0.852787 0.190056 1.10608L4.08394 5.00007L0.190056 8.89407C-0.0633519 9.14736 -0.0633519 9.55689 0.190056 9.81018C0.316285 9.93653 0.482257 10 0.648111 10C0.813965 10 0.979819 9.93653 1.10617 9.81018L5.00005 5.91618L8.89406 9.81018C9.0204 9.93653 9.18626 10 9.35211 10C9.51797 10 9.68382 9.93653 9.81017 9.81018C10.0636 9.55689 10.0636 9.14736 9.81017 8.89407L5.91628 5.00007Z" fill="#664EF9" />
            </svg>}
   

</li>

 