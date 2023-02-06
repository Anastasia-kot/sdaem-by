import React, { FC } from 'react'
import styles from './New.module.scss'
import Image from 'next/image'

import { Page404 } from '../404/404'
import { Socials_sharing } from '../../shared/Socials_sharing/Socials_sharing'
import { Breadcrumbs } from '../../entities/Breadcrumbs/Breadcrumbs'
import { NewsCard } from '../../entities/NewsCard/NewsCard'

import { dateConverter } from '../../../helpers/dateConverters'

import room from '../../../public/images/room_big_quality.png';
import dotes from './../../../public/images/svg/dotes.svg'
import { NewsType } from '../../../types/news_data'


type Props = {
    data: {
        post: NewsType | null
        posts: NewsType[] | null
    }
}

export const New: FC<Props> = ({ data }) => {


    const { post, posts } = data

    if (!data.post) { return <Page404 /> }  

    return (
        <main className={styles.new}>

            <div className={styles.new__heading}>
                <div className={styles.heading}>
                    <Breadcrumbs breadcrumbs={[
                        { name: 'news', value: 'Новости' },
                        { name: '', value: `${post?.title}` }]} />

                    <h1 className={styles.heading__title}>{post?.title}</h1>
                    <div className={styles.heading__info}>
                        <span className={styles.info__date}>  { dateConverter(post?.date)}  </span>
                        <Socials_sharing color={'violet'} />
                    </div>
                </div>
            </div>






            <div className={styles.new__content}>
                {post.image  
                    ? <img src={post.image} alt="" className={styles.content__image} />
                    : <Image src={room} alt="" className={styles.content__image} width={845} height={563} />
                }
                <Image src={dotes} alt="dotes" className={styles.Dotes}  />

                <div className={styles.content__text}>
                    {post?.description?.map(d => <p key={post.description.indexOf(d)}>{d}</p>)}
                </div>
            </div>






            <div className={styles.new__alsoRead}>
                <div className={styles.alsoRead__content}>
                    <h2 className={styles.content__title}> Читайте также </h2>
                    <div className={styles.content__cards}>
                        {posts?.map((n) => <NewsCard key={n.id} data={n} />)}
                    </div>

                </div>
            </div>




        </main>
    )
}