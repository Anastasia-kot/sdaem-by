import Head from 'next/head'
import { FC } from 'react';
import { Catalogue } from '../src/pages/Catalogue/Catalogue'
import { Layout } from '../src/layout/Layout';
import { GetServerSideProps } from 'next';
import { CatalogueState } from '../types/catalogue_data';







export const getServerSideProps: GetServerSideProps = async () => {

  try {
    const res = await fetch(`http://localhost:3000/api/catalogue`)
    const data = await res.json()
    return { props: { data } }

  } catch (err) {
    return { props: { data: {items: null, totalCount: null} } }
  }

}


type Props = {
  data: CatalogueState
}


const Home: FC<Props> = ({ data }) => <Layout>  <Catalogue data={data}/>  </Layout>
export default Home