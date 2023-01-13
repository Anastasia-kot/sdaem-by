import React, {  FC, useEffect } from 'react';
import { New } from '../../src/screens/New/New';
import { Layout } from '../../src/layout/Layout';
import { useRouter } from 'next/router';
import { NewsType } from '../../src/store/newsSlice';
import { sortingNewsPerDate } from '../../helpers/sortingFunctions';


export async function getServerSideProps(context: { params: { id: number; }; }) {
    
    const { id } = context.params;

        const res1 = await fetch(`http://localhost:3000/api/news/${id}`)

        console.log(res1.status)
        if (res1.status === 404) { 
            // return { notFound: true }
            return { props: { data: null }}
        } else {

            const post = await res1.json()

            const res2 = await fetch(`http://localhost:3000/api/news`)
            const data = await res2.json()
            const { news } = data
            let posts: NewsType[] = []

            for (let i = 0; posts.length < 3; i++) {
                if (+id !== sortingNewsPerDate([...news])[i].id) {
                    posts = [...posts, sortingNewsPerDate([...news])[i]]
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
