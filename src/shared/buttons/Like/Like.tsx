import Image from 'next/image'
import { useState } from 'react'
import styles from './Like.module.scss'
 
type Props = {
    isListView: boolean
    style: any
}
export const LikeButton = ({ isListView, style }) => {
    


const [liked, setLiked] = useState(false);

    return (
        <button 
            className={styles.Button}
            style={style}
            onClick={() => setLiked(actual => { return (!actual) })}>
            {isListView && <span>В закладки</span>}
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="#EB5757">
                <path d="m10 15.875-.458-.417q-2.021-1.833-3.334-3.104-1.312-1.271-2.062-2.219-.75-.947-1.031-1.708-.282-.76-.282-1.531 0-1.479 1.042-2.521 1.042-1.042 2.521-1.042 1.042 0 1.979.542T10 5.458q.688-1.041 1.625-1.583t1.979-.542q1.479 0 2.521 1.042 1.042 1.042 1.042 2.521 0 .771-.271 1.51-.271.74-1.021 1.677-.75.938-2.063 2.229-1.312 1.292-3.395 3.188Zm0-.896q1.938-1.75 3.188-2.979 1.25-1.229 1.989-2.135.74-.907 1.031-1.605.292-.698.292-1.364 0-1.229-.833-2.063Q14.833 4 13.604 4q-.75 0-1.396.323-.646.323-1.437 1.135l-.729.854h-.084l-.729-.854q-.812-.833-1.469-1.146Q7.104 4 6.396 4q-1.208 0-2.052.833-.844.834-.844 2.063 0 .666.271 1.333.271.667.989 1.563.719.896 1.98 2.125Q8 13.146 10 14.979Zm0-5.5Z" />
            </svg>
        </button>
    )
}
