import React, {  FC, useEffect } from 'react';
import { New } from '../../src/screens/New/New';
import { Layout } from '../../src/layout/Layout';
import { useRouter } from 'next/router';
import { NewsType } from '../../src/store/newsSlice';
import { sortingNewsPerDate } from '../../helpers/sortingFunctions';


export async function getServerSideProps(context: { params: { id: number } }) {
    
    const { id } = context.params;

        const res1 = await fetch(`http://localhost:3000/api/news/${id}`)

        if (res1.status === 404) {

            return { props: { data: null }}

        } else {

                const post = await res1.json()

                const res2 = await fetch(`http://localhost:3000/api/news`)
                const data = await res2.json()
                let posts: NewsType[] = []

                // выбираем 3 новости, у которых id не совпадает с URL ID
                for (let i = 0; posts.length < 3; i++) {
                    if (+id !== sortingNewsPerDate([...data.news])[i].id) {
                        posts = [...posts, sortingNewsPerDate([...data.news])[i]]
                    }
                }

            return { props: { data: { post, posts } } }
        }


}



const NewCard: FC<any> = ({ data }) => {

    return (
        <Layout>
            <New data={data}/>
        </Layout>)
}

export default NewCard;
