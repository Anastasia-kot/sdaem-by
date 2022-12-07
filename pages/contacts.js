import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Contacts } from '../src/screens/Contacts/Contacts'
import { Layout } from '../src/layout/Layout';



export default function Home({ Component }) {
  return (
    <Layout>
      <Contacts />
    </Layout>

  )
}
