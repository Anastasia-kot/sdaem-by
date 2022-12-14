import classNames from 'classnames'
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
            className={classNames(
                styles.Button,
                { [styles.liked]: liked },
            )}
            style={style}
            onClick={() => setLiked(actual => { return (!actual) })}>

         
     
        
          

            {isListView && <span>{liked ?'Добавлено' : 'В закладки'}</span>}
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" >
                <path d="m10 15.417-.25-.229q-1.979-1.792-3.271-3.042-1.291-1.25-2.021-2.167-.729-.917-1-1.635-.27-.719-.27-1.448 0-1.334.947-2.281.948-.948 2.303-.948 1.02 0 1.947.573.927.572 1.615 1.677.708-1.105 1.625-1.677.917-.573 1.958-.573 1.334 0 2.282.948.947.947.947 2.281 0 .729-.26 1.427-.26.698-.99 1.604-.729.906-2.02 2.177-1.292 1.271-3.334 3.125Z"
                    stroke="#EB5757"
                    strokeWidth="1"
                />
            </svg>

      
        </button>
    )
}
