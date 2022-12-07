import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Breadcrumbs } from '../../entities/Breadcrumbs/Breadcrumbs'
import { NewsCard } from '../../entities/NewsCard/NewsCard'
import { InputBlock } from '../../shared/Input/Input'
import { Pagination, Pagination2 } from '../../shared/Pagination/Pagination'
import { RootState } from '../../store/store'
import styles from './News.module.scss'

export const News = () => {

    const news = useSelector((state: RootState) => state.news.data)

    //for form
    const { handleSubmit, register, formState: { errors } } = useForm<{ searchWord: string }>();
    const onSubmit = values => {
        console.log(values);
        // фильтрация по введенному values

    }

    return (
        <main className={styles.News}>

            <Breadcrumbs breadcrumbs={[{ name: '', value: 'Новости' }]} />
            <div className={styles.TitleBlock}>
                <h1 className={styles.Title}>Новости</h1>

                <form className={styles.SearchWrapper}>
                    <InputBlock
                        type={'text'}
                        labelRus={null}
                        placeholder={'Поиск по статьям'}
                        flexDirection={null}
                        width={616.22}
                        height={37}
                        imageSrc={null}

                        label={'searchWord'}
                        register={register}
                        pattern={/^[а-яА-ЯёЁa-zA-Z0-9]+$/i}
                        required={false}
                    />

                    <div className={styles.LoopWrapper}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.Loop}>
                            <path d="M16.8676 15.2581L13.5441 11.9344C13.3941 11.7844 13.1907 11.7011 12.9774 11.7011H12.434C13.3541 10.5243 13.9008 9.04417 13.9008 7.43401C13.9008 3.60364 10.7973 0.5 6.96711 0.5C3.13693 0.5 0.0334473 3.60364 0.0334473 7.43401C0.0334473 11.2644 3.13693 14.368 6.96711 14.368C8.57718 14.368 10.0573 13.8213 11.234 12.9012V13.4446C11.234 13.658 11.3173 13.8613 11.4673 14.0113L14.7908 17.335C15.1042 17.6483 15.6108 17.6483 15.9209 17.335L16.8642 16.3916C17.1776 16.0782 17.1776 15.5715 16.8676 15.2581ZM6.96711 11.7011C4.61033 11.7011 2.70024 9.79424 2.70024 7.43401C2.70024 5.07711 4.607 3.16693 6.96711 3.16693C9.32388 3.16693 11.234 5.07378 11.234 7.43401C11.234 9.79091 9.32722 11.7011 6.96711 11.7011Z" fill="white" />
                        </svg>
                    </div>
                </form>
            </div>

            <div className={styles.CardsBlock}>
                
                {
                    // @ts-ignore
                news.map( (n) => {   if (n.id < 9) {
                        return <NewsCard
                            key={n.id}
                            id={n.id}
                            image={n.image}
                            title={n.title}
                            shortDescription={n.shortDescription}
                            description={n.description}
                            date={n.date}
                        />
                    }}
                )
                
                }


            </div>

            <Pagination
                totalCount={6}
                currentPage={1} />
            {/* <Pagination2 url={'http://localhost:3000/comments'} author={'adele'} perPage={6} /> */}

        </main>
    )
}
