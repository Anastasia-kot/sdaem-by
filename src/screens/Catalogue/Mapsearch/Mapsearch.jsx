// import Image from 'next/image'
import styles from './Mapsearch.module.scss'
import React from 'react'
import { PreferenceCard } from '../../../entities/PreferenceCard/PreferenceCard.tsx'


export const Mapsearch = () => {

    

    return (

        <div className={styles.MapSearchBlock}>
        
            <h2>Показать найденные квартиры на карте</h2>
            <p>Ищите новостройки рядом с работой, парком или родственниками</p>
            <button>
                <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.462 2.71394C10.3632 1.03952 8.54923 0.0976563 6.50853 0.0976562C4.48528 0.0976562 2.67132 1.03952 1.5376 2.71394C0.403882 4.35347 0.142254 6.44649 0.839929 8.27789C1.03179 8.76626 1.3283 9.27207 1.71202 9.72556L6.12481 14.9232C6.22946 15.0279 6.33412 15.0977 6.49109 15.0977C6.64807 15.0977 6.75272 15.0279 6.85737 14.9232L11.2876 9.72556C11.6713 9.27207 11.9853 8.7837 12.1597 8.27789C12.8574 6.44649 12.5957 4.35347 11.462 2.71394ZM6.50853 8.88835C5.00853 8.88835 3.77016 7.64998 3.77016 6.14998C3.77016 4.64998 5.00853 3.41161 6.50853 3.41161C8.00853 3.41161 9.24691 4.64998 9.24691 6.14998C9.24691 7.64998 8.02598 8.88835 6.50853 8.88835Z" fill="url(#paint0_linear_2831_1716)" />
                    <defs>
                        <linearGradient id="paint0_linear_2831_1716" x1="0.455078" y1="0.847657" x2="14.7623" y2="4.16693" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD54F" />
                            <stop offset="1" stop-color="#FEC100" />
                        </linearGradient>
                    </defs>
                </svg>

                <span>
                    Открыть карту
                </span>
            </button>

        

        </div>
    )
}
  