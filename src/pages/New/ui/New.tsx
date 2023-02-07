import React, { FC } from 'react'
import styles from './New.module.scss'
import Image from 'next/image'

import { Page404 } from '../../404/ui/404'
import { Socials_sharing } from '../../../shared/ui/Socials_sharing/Socials_sharing'
import { Breadcrumbs } from '../../../entities/Breadcrumbs/Breadcrumbs'
import { NewsCard } from '../../../entities/PostCard/ui/NewsCard'

import { dateConverter } from '../../../shared/helpers/dateConverters'


import { NewsType } from '../../../../types/news_data'
import { Post } from '../../../entities/Post/ui/Post'


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

            <Post post = {post}/>
       
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