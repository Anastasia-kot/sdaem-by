import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Breadcrumbs } from '../../entities/Breadcrumbs/Breadcrumbs'
import { NewsCard } from '../../entities/NewsCard/NewsCard'
import { InputBlock } from '../../shared/Input/Input'
import { NewsType } from '../../store/newsSlice'
import { RootState } from '../../store/store'
import styles from './News.module.scss'
import { PaginatedItems } from '../../shared/Pagination/Pagination'

export const News = () => {

    const news: NewsType[] = useSelector((state: RootState) => state.news.data)
 








    //for form

    // let [filteredNews, setFilteredNews] = useState<NewsType[]>(news)
 
    const { handleSubmit, register, formState: { errors } } = useForm<{ searchWord: string }>();

    const sortingFunc = (searchWord) => {
    //     let newNewsList: NewsType[] = []
    //     news.forEach(function (item, index, array) {
    //         if (item.title.includes(searchWord) || item.shortDescription.includes(searchWord) || item.description.join(';').includes(searchWord)) {
    //             newNewsList.push(item)
    //         }
    //     });
    //     setFilteredNews(newNewsList)
    //     // console.log(searchWord)
    //     // console.log(newNewsList)
 
    }
    const onSubmit = values => {
        // sortingFunc(values.searchWord)
    }
















    return (
        <main className={styles.news}>

            <Breadcrumbs breadcrumbs={[{ name: '', value: 'Новости' }]} />
            <div className={styles.news__header}>
                <h1 className={styles.header__title}>Новости</h1>
                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.header__form}>

                    <InputBlock
                        type={'text'}
                        labelRus={null}
                        placeholder={'Поиск по статьям'}
                        flexDirection={null}
                        width={622}
                        height={41}
                        imageSrc={null}

                        label={'searchWord'}
                        register={register}
                        pattern={/^[а-яА-ЯёЁa-zA-Z0-9]+$/i}
                        required={false}
                        onChange={sortingFunc}
                    />

                    <button className={styles.form__submitButton} type="submit">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="white" xmlns="http://www.w3.org/2000/svg" className={styles.submitButton__img}>
                            <path d="M16.8676 15.2581L13.5441 11.9344C13.3941 11.7844 13.1907 11.7011 12.9774 11.7011H12.434C13.3541 10.5243 13.9008 9.04417 13.9008 7.43401C13.9008 3.60364 10.7973 0.5 6.96711 0.5C3.13693 0.5 0.0334473 3.60364 0.0334473 7.43401C0.0334473 11.2644 3.13693 14.368 6.96711 14.368C8.57718 14.368 10.0573 13.8213 11.234 12.9012V13.4446C11.234 13.658 11.3173 13.8613 11.4673 14.0113L14.7908 17.335C15.1042 17.6483 15.6108 17.6483 15.9209 17.335L16.8642 16.3916C17.1776 16.0782 17.1776 15.5715 16.8676 15.2581ZM6.96711 11.7011C4.61033 11.7011 2.70024 9.79424 2.70024 7.43401C2.70024 5.07711 4.607 3.16693 6.96711 3.16693C9.32388 3.16693 11.234 5.07378 11.234 7.43401C11.234 9.79091 9.32722 11.7011 6.96711 11.7011Z" />
                        </svg>
                    </button>
                </form>
            </div>

            <div className={styles.news__cards}>  
                <PaginatedItems itemsPerPage={9} items={news} Component={NewsCard}/>
            </div>
        </main>
    )
}
