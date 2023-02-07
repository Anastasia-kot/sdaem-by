import React, { FC } from 'react'
import styles from './Post.module.scss'
import Image from 'next/image'

import { Breadcrumbs } from '../../Breadcrumbs/Breadcrumbs'
import { Socials_sharing } from '../../../shared/ui/Socials_sharing/Socials_sharing'

import { NewsType } from '../../../../types/news_data'
import { dateConverter } from '../../../shared/helpers/dateConverters'

import room from './../../../../public/images/room_big_quality.png'
import dotes from './../../../../public/images/svg/dotes.svg'


export const Post: FC<{ post: NewsType | null }> = ({ post }) =>   
<>
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
    <div className={styles.post__content}>
        <Image src={dotes} alt="dotes" className={styles.post__dotes}  />    
        <img src={post.image ? post.image : room} alt="" className={styles.post__image} width={845} height={563} />
        <div className={styles.post__text}>
            {post?.description?.map((d, index) => <p key={index}>{d}</p>)}
        </div>
                
    </div>
</>