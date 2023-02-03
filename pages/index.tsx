import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Main } from '../src/screens/Main/Main'
import { Layout } from '../src/layout/Layout';
import { FC } from 'react';
import { GetServerSideProps } from 'next';
import { CatalogueType } from '../src/store/catalogueSlice';


export const getServerSideProps: GetServerSideProps = async () => {

    try {
        const res = await fetch(`http://localhost:3000/api/catalogue`)
        const data = await res.json()
        console.log(data)
        // Pass data to the page via props
        return { props: { data } }

    } catch (err) {
        return { props: { data: { items: null, totalCount: null } } }
    }
}

type Props = {
    data: {
        items: CatalogueType[] | null
        totalCount: number | null,
    }
}

const Home: FC<Props> = ({ data }) => <Layout> <Main data={data}/> </Layout> 
export default Home