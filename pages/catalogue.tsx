import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { Catalogue } from '../src/screens/Catalogue/Catalogue'
import { Layout } from '../src/layout/Layout';
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
    return { props: { data: {items: null, totalCount: null} } }
  }

}



type Props = {
  data: {
    items: CatalogueType[] | null
    totalCount: number | null,
  }
}


const Home: FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Catalogue data={data}/>
    </Layout>

  )
}

export default Home