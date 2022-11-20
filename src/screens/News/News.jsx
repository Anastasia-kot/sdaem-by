import Image from 'next/image'
import { Card } from '../../components/Card/Card.tsx'
import styles from './News.module.scss'

export const News = () => {
    return (
        <main className={styles.News}>
            <nav>
                <ol>
                    <li>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.HomeImage}>
                            <g clip-path="url(#clip0_305_2083)">
                                <path d="M11.7985 5.36427L6.41446 0.458394C6.17814 0.243027 5.82177 0.243051 5.58554 0.458371L0.201516 5.3643C0.0122119 5.5368 -0.0503192 5.80258 0.042165 6.04138C0.134673 6.28019 0.359907 6.43448 0.616008 6.43448H1.47593V11.3498C1.47593 11.5447 1.63394 11.7027 1.82883 11.7027H4.77993C4.97481 11.7027 5.13283 11.5447 5.13283 11.3498V8.36537H6.86724V11.3498C6.86724 11.5447 7.02526 11.7027 7.22014 11.7027H10.1711C10.366 11.7027 10.524 11.5447 10.524 11.3498V6.43448H11.3841C11.6402 6.43448 11.8654 6.28016 11.9579 6.04138C12.0503 5.80256 11.9878 5.5368 11.7985 5.36427Z" fill="#664EF9" />
                                <path d="M10.4317 1.00195H8.06177L10.7846 3.47779V1.35483C10.7846 1.15995 10.6266 1.00195 10.4317 1.00195Z" fill="#664EF9" />
                            </g>
                            <defs>
                                <clipPath id="clip0_305_2083">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </li>
                    <li>Новости</li>
                </ol>
            </nav>
            <div className={styles.TitleBlock}>
                <h1 className={styles.Title}>Новости</h1>
                <div className={styles.SearchWrapper}>
                    <input type="text" placeholder='Поиск по статьям' />
                    <div className={styles.LoopWrapper}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.Loop}>
                            <path d="M16.8676 15.2581L13.5441 11.9344C13.3941 11.7844 13.1907 11.7011 12.9774 11.7011H12.434C13.3541 10.5243 13.9008 9.04417 13.9008 7.43401C13.9008 3.60364 10.7973 0.5 6.96711 0.5C3.13693 0.5 0.0334473 3.60364 0.0334473 7.43401C0.0334473 11.2644 3.13693 14.368 6.96711 14.368C8.57718 14.368 10.0573 13.8213 11.234 12.9012V13.4446C11.234 13.658 11.3173 13.8613 11.4673 14.0113L14.7908 17.335C15.1042 17.6483 15.6108 17.6483 15.9209 17.335L16.8642 16.3916C17.1776 16.0782 17.1776 15.5715 16.8676 15.2581ZM6.96711 11.7011C4.61033 11.7011 2.70024 9.79424 2.70024 7.43401C2.70024 5.07711 4.607 3.16693 6.96711 3.16693C9.32388 3.16693 11.234 5.07378 11.234 7.43401C11.234 9.79091 9.32722 11.7011 6.96711 11.7011Z" fill="white" />
                        </svg>
                    </div>
                    

                </div>
            </div>
           
            <div className={styles.CardsBlock}>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                 
            </div>

            <ol className={styles.Pagination}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ol>

        </main>
    )
}
